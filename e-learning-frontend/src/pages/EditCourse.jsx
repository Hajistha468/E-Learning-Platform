import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const EditCourse = () => {
  const { courseId } = useParams();
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    courseVideoUrl: '',
  });
  const [contentFile, setContentFile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${courseId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Fetched course:', res.data); // Debug
        setFormData({
          title: res.data.title,
          description: res.data.description,
          imageUrl: res.data.imageUrl,
          courseVideoUrl: res.data.courseVideoUrl,
        });
      } catch (err) {
        console.error('Error fetching course:', err.response?.data || err);
        setError(err.response?.data?.message || 'Failed to load course details');
      }
    };

    fetchCourse();
  }, [courseId, token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setContentFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('imageUrl', formData.imageUrl);
    data.append('courseVideoUrl', formData.courseVideoUrl);
    if (contentFile) {
      data.append('contentFile', contentFile);
    }

    try {
      const res = await axios.put(`http://localhost:5000/api/courses/${courseId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Course update response:', res.data); // Debug
      alert('Course updated successfully!');
      navigate('/instructor-courses');
    } catch (err) {
      console.error('Error updating course:', err.response?.data || err);
      setError(err.response?.data?.message || 'Failed to update course. Please try again.');
    }
  };

  if (user?.role !== 'instructor') {
    return (
      <div className="error-container">
        <p>Not authorized. Instructor role required.</p>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => navigate('/instructor-courses')}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="edit-course">
      <h2>Edit Course</h2>
      <form className="edit-course-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Course Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter course title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter course description"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL (optional)</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseVideoUrl">Course Video URL (optional)</label>
          <input
            type="text"
            id="courseVideoUrl"
            name="courseVideoUrl"
            value={formData.courseVideoUrl}
            onChange={handleChange}
            placeholder="Enter course video URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contentFile">Update Course Content (HTML File, optional)</label>
          <input
            type="file"
            id="contentFile"
            name="contentFile"
            accept=".html"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;