// // // // import { useState, useEffect, useContext } from 'react';
// // // // import axios from 'axios';
// // // // import { AuthContext } from '../context/AuthContext';

// // // // const InstructorEnrollmentsPage = () => {
// // // //   const { token, user } = useContext(AuthContext);
// // // //   const [enrollments, setEnrollments] = useState([]);
// // // //   const [courses, setCourses] = useState([]);
// // // //   const [selectedCourse, setSelectedCourse] = useState('');
// // // //   const [error, setError] = useState('');
// // // //   const [loading, setLoading] = useState(false);

// // // //   const fetchEnrollments = async (courseId = '') => {
// // // //     if (!token || !user || user.role !== 'instructor') {
// // // //       setError('Please log in as an instructor');
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     try {
// // // //       const url = courseId
// // // //         ? `http://localhost:5000/api/enrollments/instructor-courses?courseId=${courseId}`
// // // //         : 'http://localhost:5000/api/enrollments/instructor-courses';
// // // //       const res = await axios.get(url, {
// // // //         headers: { Authorization: `Bearer ${token}` },
// // // //       });
// // // //       console.log('Fetched enrollments:', res.data);
// // // //       setEnrollments(res.data);

// // // //       const uniqueCourses = [
// // // //         ...new Map(
// // // //           res.data.map(enrollment => [enrollment.courseId, {
// // // //             _id: enrollment.courseId,
// // // //             title: enrollment.courseTitle,
// // // //           }])
// // // //         ).values(),
// // // //       ];
// // // //       setCourses(uniqueCourses);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       const errorMessage = err.response?.status === 404
// // // //         ? 'Instructor enrollments endpoint not found. Please check backend setup.'
// // // //         : err.response?.data?.message || 'Failed to fetch enrollments';
// // // //       setError(errorMessage);
// // // //       console.error('Fetch error:', err.response || err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchEnrollments();
// // // //   }, [token, user]);

// // // //   const handleCourseChange = async (e) => {
// // // //     const courseId = e.target.value;
// // // //     setSelectedCourse(courseId);
// // // //     fetchEnrollments(courseId);
// // // //   };

// // // //   return (
// // // //     <div className="page">
// // // //       <div className="enrolled-courses">
// // // //         <h2>My Course Enrollments</h2>
// // // //         {error && (
// // // //           <div className="error-container">
// // // //             <p className="error">{error}</p>
// // // //             <button onClick={() => fetchEnrollments(selectedCourse)}>Retry</button>
// // // //           </div>
// // // //         )}
// // // //         {loading && <p>Loading enrollments...</p>}
// // // //         {!loading && !error && (
// // // //           <>
// // // //             <div style={{ marginBottom: '20px' }}>
// // // //               <label htmlFor="course-select" style={{ marginRight: '10px', fontWeight: '500' }}>
// // // //                 Select Course:
// // // //               </label>
// // // //               <select
// // // //                 id="course-select"
// // // //                 value={selectedCourse}
// // // //                 onChange={handleCourseChange}
// // // //                 style={{ padding: '8px', borderRadius: '5px', fontSize: '1em' }}
// // // //               >
// // // //                 <option value="">All Courses</option>
// // // //                 {courses.map(course => (
// // // //                   <option key={course._id} value={course._id}>
// // // //                     {course.title}
// // // //                   </option>
// // // //                 ))}
// // // //               </select>
// // // //             </div>
// // // //             {enrollments.length === 0 && courses.length === 0 ? (
// // // //               <p>No courses found. Please create courses first.</p>
// // // //             ) : enrollments.length === 0 ? (
// // // //               <p>No enrollments found for {selectedCourse ? 'this course' : 'your courses'}.</p>
// // // //             ) : (
// // // //               <div className="enrolled-list">
// // // //                 {enrollments.map((enrollment, index) => (
// // // //                   <div key={index} className="enrolled-item">
// // // //                     <h4>{enrollment.courseTitle}</h4>
// // // //                     <p>User: {enrollment.user.username} ({enrollment.user.email})</p>
// // // //                     <p>Enrolled At: {new Date(enrollment.enrolledAt).toLocaleDateString()}</p>
// // // //                     <p>Progress: {enrollment.progress}%</p>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default InstructorEnrollmentsPage;
// // // import { useState, useEffect, useContext } from 'react';
// // // import axios from 'axios';
// // // import { AuthContext } from '../context/AuthContext';

// // // const InstructorEnrollmentsPage = () => {
// // //   const { token, user } = useContext(AuthContext);
// // //   const [enrollments, setEnrollments] = useState([]);
// // //   const [courses, setCourses] = useState([]);
// // //   const [selectedCourse, setSelectedCourse] = useState('');
// // //   const [error, setError] = useState('');
// // //   const [loading, setLoading] = useState(false);

// // //   const fetchEnrollments = async (courseId = '') => {
// // //     if (!token || !user) {
// // //       setError('Please log in to view enrollments');
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setError(''); // Clear previous errors
// // //     try {
// // //       const url = courseId
// // //         ? `http://localhost:5000/api/enrollments/instructor-courses?courseId=${courseId}`
// // //         : 'http://localhost:5000/api/enrollments/instructor-courses';
// // //       const res = await axios.get(url, {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       console.log('Fetched enrollments:', res.data); // Debug
// // //       setEnrollments(res.data);
// // //       setCourses([
// // //         ...new Map(
// // //           res.data.map(enrollment => [enrollment.courseId, {
// // //             _id: enrollment.courseId,
// // //             title: enrollment.courseTitle,
// // //           }])
// // //         ).values(),
// // //       ]);
// // //     } catch (err) {
// // //       const errorMessage = err.response?.status === 403
// // //         ? 'You are not authorized to view enrollments. Please ensure you have instructor permissions and try logging in again.'
// // //         : err.response?.status === 404
// // //         ? 'Instructor enrollments endpoint not found. Please check backend setup.'
// // //         : err.response?.data?.message || 'Failed to fetch enrollments';
// // //       setError(errorMessage);
// // //       console.error('Fetch error:', err.response || err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchEnrollments();
// // //   }, [token, user]);

// // //   const handleCourseChange = async (e) => {
// // //     const courseId = e.target.value;
// // //     setSelectedCourse(courseId);
// // //     fetchEnrollments(courseId);
// // //   };

// // //   return (
// // //     <div className="page">
// // //       <div className="enrolled-courses">
// // //         <h2>My Course Enrollments</h2>
// // //         {error && (
// // //           <div className="error-container">
// // //             <p className="error">{error}</p>
// // //             <button onClick={() => fetchEnrollments(selectedCourse)}>Retry</button>
// // //           </div>
// // //         )}
// // //         {loading && <p>Loading enrollments...</p>}
// // //         {!loading && !error && (
// // //           <>
// // //             <div style={{ marginBottom: '20px' }}>
// // //               <label htmlFor="course-select" style={{ marginRight: '10px', fontWeight: '500' }}>
// // //                 Select Course:
// // //               </label>
// // //               <select
// // //                 id="course-select"
// // //                 value={selectedCourse}
// // //                 onChange={handleCourseChange}
// // //                 style={{ padding: '8px', borderRadius: '5px', fontSize: '1em' }}
// // //               >
// // //                 <option value="">All Courses</option>
// // //                 {courses.map(course => (
// // //                   <option key={course._id} value={course._id}>
// // //                     {course.title}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //             </div>
// // //             {enrollments.length === 0 && courses.length === 0 ? (
// // //               <p>No courses found. Please create courses first.</p>
// // //             ) : enrollments.length === 0 ? (
// // //               <p>No enrollments found for {selectedCourse ? 'this course' : 'your courses'}.</p>
// // //             ) : (
// // //               <div className="enrolled-list">
// // //                 {enrollments.map((enrollment, index) => (
// // //                   <div key={index} className="enrolled-item">
// // //                     <h4>{enrollment.courseTitle}</h4>
// // //                     <p>User: {enrollment.user.username} ({enrollment.user.email})</p>
// // //                     <p>Enrolled At: {new Date(enrollment.enrolledAt).toLocaleDateString()}</p>
// // //                     <p>Progress: {enrollment.progress}%</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default InstructorEnrollmentsPage;

// // import { useState, useEffect, useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { AuthContext } from '../context/AuthContext';

// // const InstructorCourses = () => {
// //   const { token, user } = useContext(AuthContext);
// //   const [enrollments, setEnrollments] = useState([]);
// //   const [error, setError] = useState('');
// //   const [filter, setFilter] = useState('All Courses');
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     const fetchEnrollments = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/enrollments', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         console.log('Fetched enrollments:', res.data); // Debug
// //         setEnrollments(res.data);
// //       } catch (err) {
// //         console.error('Error fetching enrollments:', err.response?.data || err);
// //         setError(err.response?.data?.message || 'Failed to fetch enrollments');
// //       }
// //     };

// //     const fetchCourses = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/courses', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         console.log('Fetched courses:', res.data); // Debug
// //         setCourses(res.data.filter(course => course.instructor._id === user.id));
// //       } catch (err) {
// //         console.error('Error fetching courses:', err.response?.data || err);
// //         setError(err.response?.data?.message || 'Failed to fetch courses');
// //       }
// //     };

// //     if (user?.role === 'instructor') {
// //       fetchEnrollments();
// //       fetchCourses();
// //     }
// //   }, [token, user]);

// //   const handleFilterChange = (e) => {
// //     setFilter(e.target.value);
// //   };

// //   const filteredEnrollments = filter === 'All Courses'
// //     ? enrollments
// //     : enrollments.filter(enrollment => enrollment.course.title === filter);

// //   if (user?.role !== 'instructor') {
// //     return (
// //       <div className="error-container">
// //         <p>Not authorized. Instructor role required.</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="instructor-courses">
// //       <h1>My Courses</h1>
// //       {error && (
// //         <div className="error-container">
// //           <p className="error">{error}</p>
// //           <button onClick={() => setError('')}>OK</button>
// //         </div>
// //       )}
// //       <h2>My Courses</h2>
// //       <div className="courses-grid">
// //         {courses.length === 0 ? (
// //           <p>No courses found.</p>
// //         ) : (
// //           courses.map((course, index) => (
// //             <div key={index} className="course-card">
// //               <h3>{course.title}</h3>
// //               <p><strong>Description:</strong> {course.description}</p>
// //               <Link to={`/edit-course/${course._id}`}>
// //                 <button className="edit-button">Edit</button>
// //               </Link>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //       <h2>My Course Enrollments</h2>
// //       <div className="filter">
// //         <label>Select Course:</label>
// //         <select value={filter} onChange={handleFilterChange}>
// //           <option>All Courses</option>
// //           {[...new Set(enrollments.map(enrollment => enrollment.course.title))].map((title, index) => (
// //             <option key={index} value={title}>{title}</option>
// //           ))}
// //         </select>
// //       </div>
// //       <div className="enrollments-grid">
// //         {filteredEnrollments.length === 0 ? (
// //           <p>No enrollments found.</p>
// //         ) : (
// //           filteredEnrollments.map((enrollment, index) => (
// //             <div key={index} className="enrollment-card">
// //               <h3>{enrollment.course.title}</h3>
// //               <p><strong>User:</strong> {enrollment.user.username} ({enrollment.user.email})</p>
// //               <p><strong>Enrolled At:</strong> {enrollment.createdAt ? new Date(enrollment.createdAt).toLocaleDateString() : 'Date not available'}</p>
// //               <p><strong>Progress:</strong> {enrollment.progress}%</p>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default InstructorCourses;
// import { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const InstructorCourses = () => {
//   const { token, user } = useContext(AuthContext);
//   const [enrollments, setEnrollments] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchEnrollments = async (courseId = '') => {
//     if (!token || !user) {
//       setError('Please log in to view enrollments');
//       return;
//     }

//     setLoading(true);
//     setError(''); // Clear previous errors
//     try {
//       const url = courseId
//         ? `http://localhost:5000/api/enrollments/instructor-courses?courseId=${courseId}`
//         : 'http://localhost:5000/api/enrollments/instructor-courses';
//       const res = await axios.get(url, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log('Fetched enrollments:', res.data); // Debug
//       setEnrollments(res.data);
//       setCourses([
//         ...new Map(
//           res.data.map(enrollment => [enrollment.courseId, {
//             _id: enrollment.courseId,
//             title: enrollment.courseTitle,
//           }])
//         ).values(),
//       ]);
//     } catch (err) {
//       const errorMessage = err.response?.status === 403
//         ? 'You are not authorized to view enrollments. Please ensure you have instructor permissions and try logging in again.'
//         : err.response?.status === 404
//         ? 'Instructor enrollments endpoint not found. Please check backend setup.'
//         : err.response?.data?.message || 'Failed to fetch enrollments';
//       setError(errorMessage);
//       console.error('Fetch error:', err.response || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchInstructorCourses = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/courses', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log('Fetched courses:', res.data); // Debug
//       setCourses(res.data.filter(course => course.instructor._id === user.id));
//     } catch (err) {
//       console.error('Error fetching courses:', err.response?.data || err);
//       setError(err.response?.data?.message || 'Failed to fetch courses');
//     }
//   };

//   useEffect(() => {
//     if (user?.role === 'instructor') {
//       fetchEnrollments();
//       fetchInstructorCourses();
//     }
//   }, [token, user]);

//   const handleCourseChange = async (e) => {
//     const courseId = e.target.value;
//     setSelectedCourse(courseId);
//     fetchEnrollments(courseId);
//   };

//   if (user?.role !== 'instructor') {
//     return (
//       <div className="error-container">
//         <p>Not authorized. Instructor role required.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="instructor-courses">
//       <h1>My Courses</h1>
//       {error && (
//         <div className="error-container">
//           <p className="error">{error}</p>
//           <button onClick={() => fetchEnrollments(selectedCourse)}>Retry</button>
//         </div>
//       )}
//       <h2>My Courses</h2>
//       <div className="courses-grid">
//         {courses.length === 0 ? (
//           <p>No courses found.</p>
//         ) : (
//           courses.map((course, index) => (
//             <div key={index} className="course-card">
//               <h3>{course.title}</h3>
//               <p><strong>Description:</strong> {course.description}</p>
//               <Link to={`/edit-course/${course._id}`}>
//                 <button className="edit-button">Edit</button>
//               </Link>
//             </div>
//           ))
//         )}
//       </div>
//       <h2>My Course Enrollments</h2>
//       {loading && <p>Loading enrollments...</p>}
//       {!loading && (
//         <>
//           <div className="filter">
//             <label>Select Course:</label>
//             <select
//               value={selectedCourse}
//               onChange={handleCourseChange}
//               style={{ padding: '8px', borderRadius: '5px', fontSize: '1em' }}
//             >
//               <option value="">All Courses</option>
//               {courses.map(course => (
//                 <option key={course._id} value={course._id}>
//                   {course.title}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {enrollments.length === 0 && courses.length === 0 ? (
//             <p>No courses found. Please create courses first.</p>
//           ) : enrollments.length === 0 ? (
//             <p>No enrollments found for {selectedCourse ? 'this course' : 'your courses'}.</p>
//           ) : (
//             <div className="enrollments-grid">
//               {enrollments.map((enrollment, index) => (
//                 <div key={index} className="enrollment-card">
//                   <h3>{enrollment.courseTitle}</h3>
//                   <p><strong>User:</strong> {enrollment.user.username} ({enrollment.user.email})</p>
//                   <p><strong>Enrolled At:</strong> {enrollment.enrolledAt ? new Date(enrollment.enrolledAt).toLocaleDateString() : 'Date not available'}</p>
//                   <p><strong>Progress:</strong> {enrollment.progress}%</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default InstructorCourses;
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const InstructorCourses = () => {
  const { token, user } = useContext(AuthContext);
  const [enrollments, setEnrollments] = useState([]);
  const [instructorCourses, setInstructorCourses] = useState([]);
  const [enrollmentCourses, setEnrollmentCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch enrollments for the instructor's courses
  const fetchEnrollments = async (courseId = '') => {
    if (!token || !user) {
      setError('Please log in to view enrollments');
      return;
    }

    setLoading(true);
    setError(''); // Clear previous errors
    try {
      const url = courseId
        ? `http://localhost:5000/api/enrollments/instructor-courses?courseId=${courseId}`
        : 'http://localhost:5000/api/enrollments/instructor-courses';
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Fetched enrollments:', res.data); // Debug
      setEnrollments(res.data);
      setEnrollmentCourses([
        ...new Map(
          res.data.map(enrollment => [enrollment.courseId, {
            _id: enrollment.courseId,
            title: enrollment.courseTitle,
          }])
        ).values(),
      ]);
    } catch (err) {
      const errorMessage = err.response?.status === 403
        ? 'You are not authorized to view enrollments. Please ensure you have instructor permissions and try logging in again.'
        : err.response?.status === 404
        ? 'Instructor enrollments endpoint not found. Please check backend setup.'
        : err.response?.data?.message || 'Failed to fetch enrollments';
      setError(errorMessage);
      console.error('Fetch error:', err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the instructor's courses (unaffected by the enrollment filter)
  const fetchInstructorCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Fetched instructor courses:', res.data); // Debug
      setInstructorCourses(res.data.filter(course => course.instructor._id === user.id));
    } catch (err) {
      console.error('Error fetching courses:', err.response?.data || err);
      setError(err.response?.data?.message || 'Failed to fetch courses');
    }
  };

  useEffect(() => {
    if (user?.role === 'instructor') {
      fetchEnrollments();
      fetchInstructorCourses();
    }
  }, [token, user]);

  const handleCourseChange = async (e) => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
    fetchEnrollments(courseId);
  };

  if (user?.role !== 'instructor') {
    return (
      <div className="error-container">
        <p>Not authorized. Instructor role required.</p>
      </div>
    );
  }

  return (
    <div className="instructor-courses">
      <h1>My Courses</h1>
      {error && (
        <div className="error-container">
          <p className="error">{error}</p>
          <button onClick={() => fetchEnrollments(selectedCourse)}>Retry</button>
        </div>
      )}
      <h2>My Course Enrollments</h2>
      {loading && <p>Loading enrollments...</p>}
      {!loading && (
        <>
          <div className="filter">
            <label>Select Course:</label>
            <select
              value={selectedCourse}
              onChange={handleCourseChange}
              style={{ padding: '8px', borderRadius: '5px', fontSize: '1em' }}
            >
              <option value="">All Courses</option>
              {enrollmentCourses.map(course => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
          {enrollments.length === 0 && enrollmentCourses.length === 0 ? (
            <p>No courses with enrollments found. Please create courses and have students enroll.</p>
          ) : enrollments.length === 0 ? (
            <p>No enrollments found for {selectedCourse ? 'this course' : 'your courses'}.</p>
          ) : (
            <div className="enrollments-grid">
              {enrollments.map((enrollment, index) => (
                <div key={index} className="enrollment-card">
                  <h3>{enrollment.courseTitle}</h3>
                  <p><strong>User:</strong> {enrollment.user.username} ({enrollment.user.email})</p>
                  <p><strong>Progress:</strong> {enrollment.progress}%</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <h2>My Courses</h2>
      <div className="courses-grid">
        {instructorCourses.length === 0 ? (
          <p>No courses found.</p>
        ) : (
          instructorCourses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.title}</h3>
              <p><strong>Description:</strong> {course.description}</p>
              <Link to={`/edit-course/${course._id}`}>
                <button className="edit-button">Edit</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InstructorCourses;