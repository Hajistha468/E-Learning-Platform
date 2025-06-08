import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const InstructorEnrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/courses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const instructorCourses = res.data.filter(course => course.instructor.toString() === user.id);
        setCourses(instructorCourses);
        if (instructorCourses.length > 0) {
          setSelectedCourseId(instructorCourses[0]._id);
        }
      } catch (err) {
        setError('Failed to fetch courses');
      }
    };

    const fetchEnrollments = async () => {
      if (!user || !token || !selectedCourseId) {
        setError('Please log in and select a course.');
        return;
      }

      try {
        const res = await axios.get(`http://localhost:5000/api/enrollments/instructor-courses?courseId=${selectedCourseId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEnrollments(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch enrolled users');
      }
    };

    fetchCourses();
    fetchEnrollments();
  }, [user, token, selectedCourseId]);

  const handleCourseChange = (e) => {
    setSelectedCourseId(e.target.value);
  };

  return (
    <div className="enrolled-courses">
      <h2>My Course Enrollments</h2>
      {error && <p className="error">{error}</p>}
      {courses.length > 0 && (
        <div>
          <label htmlFor="course-select">Select Course: </label>
          <select id="course-select" value={selectedCourseId} onChange={handleCourseChange}>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
      )}
      {enrollments.length === 0 && !error && <p>No users are enrolled in the selected course yet.</p>}
      <div className="courses">
        {enrollments.map((enrollment, index) => (
          <div key={index} className="course-card">
            <h3>{enrollment.courseTitle}</h3>
            <p><strong>Username:</strong> {enrollment.user.username}</p>
            <p><strong>Email:</strong> {enrollment.user.email}</p>
            <p><strong>Enrolled on:</strong> {new Date(enrollment.enrolledAt).toLocaleDateString()}</p>
            <p><strong>Progress:</strong> {enrollment.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorEnrollments;