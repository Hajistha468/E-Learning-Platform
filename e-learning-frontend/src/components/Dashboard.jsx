import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const [completedCourses, setCompletedCourses] = useState([]);
  const [error, setError] = useState('');
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserHistory = async () => {
      if (!user || !token) {
        setError('Please log in to view your dashboard.');
        return;
      }
      try {
        const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const completed = res.data
          .filter(enrollment => enrollment.progress === 100)
          .map(enrollment => ({
            title: enrollment.course.title,
            completedAt: enrollment.updatedAt,
          }));
        setCompletedCourses(completed);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch your history.');
      }
    };

    fetchUserHistory();
  }, [user, token]);

  if (!user) {
    return <p>Please log in to view your dashboard.</p>;
  }

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard, {user.username}!</h2>
      <div className="user-history">
        <h3>Your Completed Courses</h3>
        {completedCourses.length === 0 ? (
          <p>You haven't completed any courses yet.</p>
        ) : (
          <div className="history-list">
            {completedCourses.map((course, index) => (
              <div key={index} className="history-item">
                <h4>{course.title}</h4>
                <p>Completed on: {new Date(course.completedAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;