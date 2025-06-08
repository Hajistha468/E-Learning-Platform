import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const CourseContent = () => {
  const { courseId } = useParams();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${courseId}/content`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContent(res.data.content);
      } catch (err) {
        console.error('Error fetching course content:', err.response?.data || err);
        setError(err.response?.data?.message || 'Failed to load course content');
      }
    };

    fetchContent();
  }, [courseId, token]);

  if (error) {
    return (
      <div className="course-content">
        <p>{error}</p>
        <button onClick={() => navigate(`/courses/${courseId}`)}>Back to Course</button>
      </div>
    );
  }

  return (
    <div className="course-content">
      <h2>Course Content</h2>
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <p>No content available for this course.</p>
      )}
      <button onClick={() => navigate(`/courses/${courseId}`)}>Back to Course</button>
    </div>
  );
};

export default CourseContent;