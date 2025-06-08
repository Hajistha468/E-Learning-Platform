// import { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AddCourse = () => {
//   const { token, user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     imageUrl: '',
//     courseVideoUrl: '',
//   });
//   const [contentFile, setContentFile] = useState(null);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setContentFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append('title', formData.title);
//     data.append('description', formData.description);
//     data.append('imageUrl', formData.imageUrl);
//     data.append('courseVideoUrl', formData.courseVideoUrl);
//     if (contentFile) {
//       data.append('contentFile', contentFile);
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/courses', data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Course creation response:', res.data); // Debug
//       alert('Course created successfully!');
//       navigate('/instructor-courses');
//     } catch (err) {
//       console.error('Error creating course:', err.response?.data || err);
//       setError(err.response?.data?.message || 'Failed to create course. Please try again.');
//     }
//   };

//   if (user?.role !== 'instructor') {
//     return (
//       <div className="error-container">
//         <p>Not authorized. Instructor role required.</p>
//         <button onClick={() => navigate('/')}>Go to Home</button>
//       </div>
//     );
//   }

//   return (
//     <div className="add-course">
//       <h2>Add a New Course</h2>
//       {error && (
//         <div className="error-container">
//           <p className="error">{error}</p>
//           <button onClick={() => setError('')}>OK</button>
//         </div>
//       )}
//       <form className="add-course-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Course Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Enter course title"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Enter course description"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="imageUrl">Image URL (optional)</label>
//           <input
//             type="text"
//             id="imageUrl"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleChange}
//             placeholder="Enter image URL"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="courseVideoUrl">Course Video URL (optional)</label>
//           <input
//             type="text"
//             id="courseVideoUrl"
//             name="courseVideoUrl"
//             value={formData.courseVideoUrl}
//             onChange={handleChange}
//             placeholder="Enter course video URL"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="contentFile">Course Content (HTML File, optional)</label>
//           <input
//             type="file"
//             id="contentFile"
//             name="contentFile"
//             accept=".html"
//             onChange={handleFileChange}
//           />
//         </div>
//         <button type="submit">Create Course</button>
//       </form>
//     </div>
//   );
// };

// export default AddCourse;

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const AddCourse = () => {
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    courseVideoUrl: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: formData.title,
      description: formData.description,
      imageUrl: formData.imageUrl,
      courseVideoUrl: formData.courseVideoUrl,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/courses', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Course creation response:', res.data);
      navigate('/my-courses');
    } catch (err) {
      console.error('Error creating course:', err);
      const errorMessage = err.response?.data?.message || err.response?.data?.error || 'Failed to create course. Please try again.';
      setError(errorMessage);
    }
  };

  if (user?.role !== 'instructor') {
    navigate('/courses');
    return null;
  }

  return (
    <div className="add-course-page">
      <div className="auth-form">
        <h2>Add a New Course</h2>
        {error && (
          <div className="error-container">
            <p className="error">{error}</p>
            <button onClick={() => setError('')}>OK</button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="sr-only">Course Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Course Title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="sr-only">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Course Description"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl" className="sr-only">Image URL (optional)</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Image URL (optional)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseVideoUrl" className="sr-only">Course Video URL (optional)</label>
            <input
              type="text"
              id="courseVideoUrl"
              name="courseVideoUrl"
              value={formData.courseVideoUrl}
              onChange={handleChange}
              placeholder="Course Video URL (optional)"
            />
          </div>
          <button type="submit" className="add-course-button">Create Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;