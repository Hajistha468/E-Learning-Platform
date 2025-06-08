// // // // import { useState, useEffect, useContext } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { AuthContext } from '../context/AuthContext';
// // // // import axios from 'axios';

// // // // const MyCoursesPage = () => {
// // // //   const [enrollments, setEnrollments] = useState([]);
// // // //   const [error, setError] = useState('');
// // // //   const { user, token } = useContext(AuthContext);

// // // //   useEffect(() => {
// // // //     const fetchEnrollments = async () => {
// // // //       if (!user || !token) {
// // // //         setError('Please log in to view your courses.');
// // // //         return;
// // // //       }
// // // //       try {
// // // //         const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //         });
// // // //         console.log('Fetched enrollments:', res.data); // Debug
// // // //         setEnrollments(res.data);
// // // //       } catch (err) {
// // // //         setError(err.response?.data?.message || 'Failed to fetch your courses');
// // // //         console.error('Error fetching enrollments:', err.response?.data || err.message);
// // // //       }
// // // //     };

// // // //     fetchEnrollments();
// // // //   }, [user, token]);

// // // //   const handleUnenroll = async (enrollmentId) => {
// // // //     if (!user || !token) {
// // // //       setError('Please log in to unenroll from a course');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       console.log('Attempting to unenroll from enrollment ID:', enrollmentId);
// // // //       const res = await axios.delete(`http://localhost:5000/api/enrollments/${enrollmentId}`, {
// // // //         headers: { Authorization: `Bearer ${token}` },
// // // //       });
// // // //       alert('Successfully unenrolled!');
// // // //       setEnrollments(enrollments.filter(enrollment => enrollment._id !== enrollmentId));
// // // //       console.log('Unenrollment response:', res.data);
// // // //     } catch (err) {
// // // //       console.error('Unenrollment error:', err.response?.data || err.message);
// // // //       setError(err.response?.data?.message || 'Failed to unenroll');
// // // //     }
// // // //   };

// // // //   const handleCompleteCourse = async (enrollmentId) => {
// // // //     if (!user || !token) {
// // // //       setError('Please log in to mark a course as complete');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       console.log('Marking course as complete for enrollment ID:', enrollmentId);
// // // //       const res = await axios.put(
// // // //         `http://localhost:5000/api/enrollments/${enrollmentId}/progress`,
// // // //         { progress: 100 },
// // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // //       );
// // // //       alert('Course marked as complete!');
// // // //       setEnrollments(enrollments.map(enrollment =>
// // // //         enrollment._id === enrollmentId ? { ...enrollment, progress: 100 } : enrollment
// // // //       ));
// // // //       console.log('Course completion response:', res.data);
// // // //     } catch (err) {
// // // //       console.error('Course completion error:', err.response?.data || err.message);
// // // //       setError(err.response?.data?.message || 'Failed to mark course as complete');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="page">
// // // //       <div className="enrolled-courses">
// // // //         <h2>My Courses</h2>
// // // //         {error && (
// // // //           <div className="error-container">
// // // //             <p className="error">{error}</p>
// // // //             <button onClick={() => setError('')}>OK</button>
// // // //           </div>
// // // //         )}
// // // //         {!user && !error && <p>Please log in to view your courses.</p>}
// // // //         {user && !error && enrollments.length === 0 && (
// // // //           <p>You are not enrolled in any courses.</p>
// // // //         )}
// // // //         {user && !error && enrollments.length > 0 && (
// // // //           <div className="courses">
// // // //             {enrollments.map(enrollment => {
// // // //               // Skip invalid or completed enrollments
// // // //               if (!enrollment.course || !enrollment.course.imageUrl) {
// // // //                 console.warn('Invalid enrollment:', enrollment);
// // // //                 return null;
// // // //               }
// // // //               if (enrollment.progress >= 100) {
// // // //                 return null; // Hide completed courses
// // // //               }
// // // //               return (
// // // //                 <div key={enrollment._id} className="course-card">
// // // //                   <img
// // // //                     src={enrollment.course.imageUrl}
// // // //                     alt={enrollment.course.title}
// // // //                     className="course-image"
// // // //                   />
// // // //                   <h3>{enrollment.course.title}</h3>
// // // //                   <p>Instructor: {enrollment.course.instructor?.username || 'Unknown'}</p>
// // // //                   <div className="course-actions">
// // // //                     <Link to={`/courses/${enrollment.course._id}`}>
// // // //                       <button className="view-course">View Course</button>
// // // //                     </Link>
// // // //                     <button
// // // //                       className="course-complete"
// // // //                       onClick={() => handleCompleteCourse(enrollment._id)}
// // // //                     >
// // // //                       Mark as Complete
// // // //                     </button>
// // // //                     <button
// // // //                       className="unenroll"
// // // //                       onClick={() => handleUnenroll(enrollment._id)}
// // // //                     >
// // // //                       Unenroll
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MyCoursesPage;
// // // import { useState, useEffect, useContext } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { AuthContext } from '../context/AuthContext';
// // // import axios from 'axios';

// // // const MyCoursesPage = () => {
// // //   const [enrollments, setEnrollments] = useState([]);
// // //   const [error, setError] = useState('');
// // //   const { user, token } = useContext(AuthContext);

// // //   useEffect(() => {
// // //     const fetchEnrollments = async () => {
// // //       if (!user || !token) {
// // //         setError('Please log in to view your courses.');
// // //         return;
// // //       }
// // //       try {
// // //         const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });
// // //         console.log('Frontend enrollments:', JSON.stringify(res.data, null, 2)); // Debug
// // //         setEnrollments(res.data);
// // //       } catch (err) {
// // //         setError(err.response?.data?.message || 'Failed to fetch your courses');
// // //         console.error('Error fetching enrollments:', err.response?.data || err.message);
// // //       }
// // //     };

// // //     fetchEnrollments();
// // //   }, [user, token]);

// // //   const handleUnenroll = async (enrollmentId) => {
// // //     if (!user || !token) {
// // //       setError('Please log in to unenroll from a course');
// // //       return;
// // //     }

// // //     try {
// // //       console.log('Attempting to unenroll from enrollment ID:', enrollmentId);
// // //       const res = await axios.delete(`http://localhost:5000/api/enrollments/${enrollmentId}`, {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       alert('Successfully unenrolled!');
// // //       setEnrollments(enrollments.filter(enrollment => enrollment._id !== enrollmentId));
// // //       console.log('Unenrollment response:', res.data);
// // //     } catch (err) {
// // //       console.error('Unenrollment error:', err.response?.data || err.message);
// // //       setError(err.response?.data?.message || 'Failed to unenroll');
// // //     }
// // //   };

// // //   const handleCompleteCourse = async (enrollmentId) => {
// // //     if (!user || !token) {
// // //       setError('Please log in to mark a course as complete');
// // //       return;
// // //     }

// // //     try {
// // //       console.log('Marking course as complete for enrollment ID:', enrollmentId);
// // //       const res = await axios.put(
// // //         `http://localhost:5000/api/enrollments/${enrollmentId}/progress`,
// // //         { progress: 100 },
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );
// // //       alert('Course marked as complete!');
// // //       setEnrollments(enrollments.map(enrollment =>
// // //         enrollment._id === enrollmentId ? { ...enrollment, progress: 100 } : enrollment
// // //       ));
// // //       console.log('Course completion response:', res.data);
// // //     } catch (err) {
// // //       console.error('Course completion error:', err.response?.data || err.message);
// // //       setError(err.response?.data?.message || 'Failed to mark course as complete');
// // //     }
// // //   };

// // //   return (
// // //     <div className="page">
// // //       <div className="enrolled-courses">
// // //         <h2>My Courses</h2>
// // //         {error && (
// // //           <div className="error-container">
// // //             <p className="error">{error}</p>
// // //             <button onClick={() => setError('')}>OK</button>
// // //           </div>
// // //         )}
// // //         {!user && !error && <p>Please log in to view your courses.</p>}
// // //         {user && !error && enrollments.length === 0 && (
// // //           <p>You are not enrolled in any courses.</p>
// // //         )}
// // //         {user && !error && enrollments.length > 0 && (
// // //           <div className="courses">
// // //             {enrollments.map(enrollment => {
// // //               // Skip invalid or completed enrollments
// // //               if (!enrollment.course || !enrollment.course.imageUrl) {
// // //                 console.warn('Invalid enrollment:', enrollment);
// // //                 return null;
// // //               }
// // //               if (enrollment.progress >= 100) {
// // //                 console.log('Hiding completed course:', enrollment.course.title); // Debug
// // //                 return null; // Hide completed courses
// // //               }
// // //               console.log('Instructor data:', JSON.stringify(enrollment.course.instructor, null, 2)); // Debug
// // //               return (
// // //                 <div key={enrollment._id} className="course-card">
// // //                   <img
// // //                     src={enrollment.course.imageUrl}
// // //                     alt={enrollment.course.title}
// // //                     className="course-image"
// // //                   />
// // //                   <h3>{enrollment.course.title}</h3>
// // //                   <p>Instructor: {enrollment.course.instructor?.username || 'Unknown'}</p>
// // //                   <div className="course-actions">
// // //                     <Link to={`/courses/${enrollment.course._id}`}>
// // //                       <button className="view-course">View Course</button>
// // //                     </Link>
                    
// // //                     <button
// // //                       className="unenroll"
// // //                       onClick={() => handleUnenroll(enrollment._id)}
// // //                     >
// // //                       Unenroll
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MyCoursesPage;

// // import { useState, useEffect, useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { AuthContext } from '../context/AuthContext';

// // const MyCoursesPage = () => {
// //   const { token, user } = useContext(AuthContext);
// //   const [enrollments, setEnrollments] = useState([]);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchEnrollments = async () => {
// //       if (!token || !user) return;
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         console.log('Fetched enrollments:', res.data);
// //         // Filter out enrollments with invalid courses
// //         const validEnrollments = res.data.filter(enrollment => enrollment.course && enrollment.course._id);
// //         setEnrollments(validEnrollments);
// //       } catch (err) {
// //         console.error('Error fetching enrollments:', err.response?.data || err.message);
// //         setError(err.response?.data?.message || 'Failed to fetch enrollments');
// //       }
// //     };

// //     fetchEnrollments();
// //   }, [token, user]);

// //   return (
// //     <div className="my-courses">
// //       <h2>My Courses</h2>
// //       {error && (
// //         <div className="error-container">
// //           <p className="error">{error}</p>
// //           <button onClick={() => setError('')}>OK</button>
// //         </div>
// //       )}
// //       {enrollments.length === 0 ? (
// //         <p>You are not enrolled in any courses yet.</p>
// //       ) : (
// //         <div className="courses-grid">
// //           {enrollments.map((enrollment, index) => (
// //             <div key={index} className="course-card">
// //               {enrollment.course ? (
// //                 <>
// //                   <img src={enrollment.course.imageUrl} alt={enrollment.course.title} />
// //                   <h3>{enrollment.course.title}</h3>
// //                   <p>{enrollment.course.description}</p>
// //                   <p><strong>Instructor:</strong> {enrollment.course.instructor?.username || 'Unknown'}</p>
// //                   <p><strong>Progress:</strong> {enrollment.progress}%</p>
// //                   <div className="button-container">
// //                     {enrollment.progress === 100 ? (
// //                       <p className="completed-text">Completed</p>
// //                     ) : (
// //                       <Link to={`/quiz/${enrollment.course._id}`}>
// //                         <button className="continue-button">Take Quiz</button>
// //                       </Link>
// //                     )}
// //                   </div>
// //                 </>
// //               ) : (
// //                 <p>Course data unavailable.</p>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyCoursesPage;

// import { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const MyCoursesPage = () => {
//   const { token, user } = useContext(AuthContext);
//   const [enrollments, setEnrollments] = useState([]);
//   const [error, setError] = useState('');

//   const fetchEnrollments = async () => {
//     if (!token || !user) return;
//     try {
//       const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log('Fetched enrollments:', res.data);
//       // Filter out enrollments with invalid courses
//       const validEnrollments = res.data.filter(enrollment => enrollment.course && enrollment.course._id);
//       setEnrollments(validEnrollments);
//     } catch (err) {
//       console.error('Error fetching enrollments:', err.response?.data || err.message);
//       setError(err.response?.data?.message || 'Failed to fetch enrollments');
//     }
//   };

//   useEffect(() => {
//     fetchEnrollments();
//   }, [token, user]);

//   const handleUnenroll = async (enrollmentId) => {
//     if (!token || !user) {
//       setError('Please log in to unenroll from a course');
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5000/api/enrollments/${enrollmentId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log(`Unenrolled from enrollment ID: ${enrollmentId}`);
//       // Refresh enrollments after unenrolling
//       fetchEnrollments();
//     } catch (err) {
//       console.error('Error unenrolling:', err.response?.data || err.message);
//       setError(err.response?.data?.message || 'Failed to unenroll from the course');
//     }
//   };

//   return (
//     <div className="my-courses">
//       <h2>My Courses</h2>
//       {error && (
//         <div className="error-container">
//           <p className="error">{error}</p>
//           <button onClick={() => setError('')}>OK</button>
//         </div>
//       )}
//       {enrollments.length === 0 ? (
//         <p>You are not enrolled in any courses yet.</p>
//       ) : (
//         <div className="courses-grid">
//           {enrollments.map((enrollment, index) => (
//             <div key={index} className="course-card">
//               {enrollment.course ? (
//                 <>
//                   <img src={enrollment.course.imageUrl} alt={enrollment.course.title} />
//                   <h3>{enrollment.course.title}</h3>
//                   <p>{enrollment.course.description}</p>
//                   <p><strong>Instructor:</strong> {enrollment.course.instructor?.username || 'Unknown'}</p>
//                   <p><strong>Progress:</strong> {enrollment.progress}%</p>
//                   <div className="button-container">
//                     {enrollment.progress === 100 ? (
//                       <p className="completed-text">Completed</p>
//                     ) : (
//                       <Link to={`/quiz/${enrollment.course._id}`}>
//                         <button className="continue-button">Take Quiz</button>
//                       </Link>
//                     )}
//                     <button
//                       className="unenroll-button"
//                       onClick={() => handleUnenroll(enrollment._id)}
//                     >
//                       Unenroll
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <p>Course data unavailable.</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCoursesPage;


import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const MyCoursesPage = () => {
  const { token, user } = useContext(AuthContext);
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState('');

  const fetchEnrollments = async () => {
    if (!token || !user) return;
    try {
      const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Fetched enrollments:', res.data);
      // Filter out enrollments with invalid courses and completed courses
      const validEnrollments = res.data.filter(
        enrollment => enrollment.course && enrollment.course._id && enrollment.progress < 100
      );
      setEnrollments(validEnrollments);
    } catch (err) {
      console.error('Error fetching enrollments:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to fetch enrollments');
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, [token, user]);

  const handleUnenroll = async (enrollmentId) => {
    if (!token || !user) {
      setError('Please log in to unenroll from a course');
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/enrollments/${enrollmentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(`Unenrolled from enrollment ID: ${enrollmentId}`);
      // Refresh enrollments after unenrolling
      fetchEnrollments();
    } catch (err) {
      console.error('Error unenrolling:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to unenroll from the course');
    }
  };

  return (
    <div className="my-courses">
      <h2>My Courses</h2>
      {error && (
        <div className="error-container">
          <p className="error">{error}</p>
          <button onClick={() => setError('')}>OK</button>
        </div>
      )}
      {enrollments.length === 0 ? (
        <p>You are not enrolled in any active courses. Check the Courses page to enroll in a new course.</p>
      ) : (
        <div className="courses-grid">
          {enrollments.map((enrollment, index) => (
            <div key={index} className="course-card">
              {enrollment.course ? (
                <>
                  <img src={enrollment.course.imageUrl} alt={enrollment.course.title} />
                  <h3>{enrollment.course.title}</h3>
                  <p>{enrollment.course.description}</p>
                  <p><strong>Instructor:</strong> {enrollment.course.instructor?.username || 'Unknown'}</p>
                  <p><strong>Progress:</strong> {enrollment.progress}%</p>
                  <div className="button-container">
                    <Link to={`/quiz/${enrollment.course._id}`}>
                      <button className="continue-button">Take Quiz</button>
                    </Link>
                    <button
                      className="unenroll-button"
                      onClick={() => handleUnenroll(enrollment._id)}
                    >
                      Unenroll
                    </button>
                  </div>
                </>
              ) : (
                <p>Course data unavailable.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCoursesPage;