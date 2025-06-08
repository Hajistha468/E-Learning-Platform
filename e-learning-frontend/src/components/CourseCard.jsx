// import { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const CourseCard = ({ course }) => {
//   const { token, user } = useContext(AuthContext);
//   const [enrollmentStatus, setEnrollmentStatus] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const checkEnrollment = async () => {
//       if (!token || !user) return;
//       try {
//         const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const enrollment = res.data.find(enrollment => 
//           enrollment.course && enrollment.course._id === course._id
//         );
//         setEnrollmentStatus(enrollment || null);
//       } catch (err) {
//         console.error('Error checking enrollment:', err);
//       }
//     };
//     checkEnrollment();
//   }, [token, user, course._id]);

//   const handleEnroll = async () => {
//     if (!token) {
//       setError('Please log in to enroll');
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `http://localhost:5000/api/enrollments/${course._id}`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setEnrollmentStatus({ course, progress: 0 });
//       alert(res.data.message);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Enrollment failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="course-card">
//       {imageError || !course.imageUrl ? (
//         <div className="course-image-placeholder">
//           <span>{course.title}</span>
//         </div>
//       ) : (
//         <img
//           src={course.imageUrl}
//           alt={course.title}
//           className="course-image"
//           onError={handleImageError}
//         />
//       )}
//       <h3>{course.title}</h3>
//       <p>{course.description}</p>
//       <p>Instructor: {course.instructor?.username || 'Unknown'}</p>
//       {error && <p className="error">{error}</p>}
//       <div className="course-actions">
//         {enrollmentStatus ? (
//           <>
//             <p>Progress: {enrollmentStatus.progress}%</p>
//             <a href={`/courses/${course._id}`}>
//               <button className="view-course">View Course</button>
//             </a>
//           </>
//         ) : (
//           <button
//             className="view-course"
//             onClick={handleEnroll}
//             disabled={loading || (enrollmentStatus?.progress === 100)}
//           >
//             {loading ? 'Enrolling...' : 'Enroll'}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
import { useState } from 'react';

const CourseCard = ({ course, enrollmentStatus, handleEnroll, error, loading }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="course-card">
      {imageError || !course.imageUrl ? (
        <div className="course-image-placeholder">
          <span className="placeholder-text">{course.title}</span>
        </div>
      ) : (
        <img
          src={course.imageUrl}
          alt={course.title}
          className="course-image"
          onError={handleImageError}
        />
      )}
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p>Instructor: {course.instructor?.username || 'Unknown'}</p>
      {error && <p className="error">{error}</p>}
      <div className="course-actions">
        <a
          href={course.youtubeChannelLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="view-course">Watch on YouTube</button>
        </a>
        {enrollmentStatus ? (
          <>
            <p>Progress: {enrollmentStatus.progress}%</p>
            <a href={`/courses/${course._id}`}>
              <button className="view-course">View Course</button>
            </a>
          </>
        ) : (
          <button
            className="view-course"
            onClick={handleEnroll}
            disabled={loading || (enrollmentStatus?.progress === 100)}
          >
            {loading ? 'Enrolling...' : 'Enroll'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;