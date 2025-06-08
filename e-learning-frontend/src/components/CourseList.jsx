// // // // // // import { useState, useEffect, useContext } from 'react';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // import axios from 'axios';
// // // // // // import { AuthContext } from '../context/AuthContext';

// // // // // // const CourseList = () => {
// // // // // //   const [courses, setCourses] = useState([]);
// // // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // // //   const [error, setError] = useState('');
// // // // // //   const { user, token } = useContext(AuthContext);

// // // // // //   useEffect(() => {
// // // // // //     const fetchCourses = async () => {
// // // // // //       try {
// // // // // //         const res = await axios.get('http://localhost:5000/api/courses');
// // // // // //         setCourses(res.data);
// // // // // //       } catch (err) {
// // // // // //         setError(err.response?.data?.message || 'Failed to fetch courses');
// // // // // //         console.error('Error fetching courses:', err.response?.data || err.message);
// // // // // //       }
// // // // // //     };

// // // // // //     const fetchEnrolledCourses = async () => {
// // // // // //       if (!user || !token) return;
// // // // // //       try {
// // // // // //         const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
// // // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // // //         });
// // // // // //         setEnrolledCourses(res.data.map(enrollment => enrollment.course._id));
// // // // // //       } catch (err) {
// // // // // //         console.error('Error fetching enrolled courses:', err.response?.data || err.message);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchCourses();
// // // // // //     fetchEnrolledCourses();
// // // // // //   }, [user, token]);

// // // // // //   const handleEnroll = async (courseId) => {
// // // // // //     if (!user || !token) {
// // // // // //       setError('Please log in to enroll in a course');
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       console.log('Attempting to enroll in course ID:', courseId);
// // // // // //       console.log('Using token:', token);
// // // // // //       const res = await axios.post(
// // // // // //         'http://localhost:5000/api/enrollments',
// // // // // //         { courseId },
// // // // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // // // //       );
// // // // // //       alert('Successfully enrolled!');
// // // // // //       setEnrolledCourses([...enrolledCourses, courseId]);
// // // // // //       console.log('Enrollment response:', res.data);
// // // // // //     } catch (err) {
// // // // // //       console.error('Enrollment error:', err.response?.data || err.message);
// // // // // //       setError(err.response?.data?.message || 'Failed to enroll');
// // // // // //     }
// // // // // //   };

// // // // // //   if (error) {
// // // // // //     return (
// // // // // //       <div className="course-list">
// // // // // //         <p className="error">{error}</p>
// // // // // //         <button onClick={() => setError('')}>OK</button>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="course-list">
// // // // // //       <h2>Available Courses</h2>
// // // // // //       <div className="courses">
// // // // // //         {courses.map(course => (
// // // // // //           <div key={course._id} className="course-card">
// // // // // //             <img src={course.imageUrl} alt={course.title} className="course-image" />
// // // // // //             <h3>{course.title}</h3>
// // // // // //             <p>{course.description}</p>
// // // // // //             <p>Instructor: {course.instructor?.username || 'Unknown'}</p>
// // // // // //             <p>Total Enrollments: {course.enrollmentCount || 0}</p>
// // // // // //             {user ? (
// // // // // //               enrolledCourses.includes(course._id) ? (
// // // // // //                 <button disabled>Enrolled</button>
// // // // // //               ) : (
// // // // // //                 <button onClick={() => handleEnroll(course._id)}>Enroll</button>
// // // // // //               )
// // // // // //             ) : (
// // // // // //               <Link to="/login">Login to Enroll</Link>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CourseList;
// // // // // import { useState, useEffect, useContext } from 'react';
// // // // // import axios from 'axios';
// // // // // import { Link } from 'react-router-dom';
// // // // // import { AuthContext } from '../context/AuthContext';

// // // // // const CourseList = () => {
// // // // //   const [courses, setCourses] = useState([]);
// // // // //   const [error, setError] = useState('');
// // // // //   const { user, token } = useContext(AuthContext);

// // // // //   useEffect(() => {
// // // // //     const fetchCourses = async () => {
// // // // //       try {
// // // // //         const res = await axios.get('http://localhost:5000/api/courses');
// // // // //         console.log('Fetched courses:', res.data); // Debug
// // // // //         setCourses(res.data);
// // // // //       } catch (err) {
// // // // //         setError(err.response?.data?.message || 'Failed to fetch courses');
// // // // //         console.error('Error fetching courses:', err.response?.data || err.message);
// // // // //       }
// // // // //     };

// // // // //     fetchCourses();
// // // // //   }, []);

// // // // //   const handleEnroll = async (courseId) => {
// // // // //     if (!user || !token) {
// // // // //       setError('Please log in to enroll in a course');
// // // // //       return;
// // // // //     }

// // // // //     console.log('Attempting to enroll in course ID:', courseId); // Debug
// // // // //     console.log('Using token:', token); // Debug
// // // // //     try {
// // // // //       const res = await axios.post(
// // // // //         `http://localhost:5000/api/enrollments/${courseId}`,
// // // // //         {},
// // // // //         {
// // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // //         }
// // // // //       );
// // // // //       console.log('Enrollment response:', res.data); // Debug
// // // // //       alert('Successfully enrolled!');
// // // // //       // Optionally refresh courses or update UI
// // // // //     } catch (err) {
// // // // //       const errorMessage = err.response?.status === 404
// // // // //         ? 'Enrollment endpoint not found. Please check backend setup.'
// // // // //         : err.response?.status === 400
// // // // //         ? err.response.data.message
// // // // //         : 'Failed to enroll in the course';
// // // // //       setError(errorMessage);
// // // // //       console.error('Enrollment error:', err.response?.data || err.message);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="page">
// // // // //       <h2>Available Courses</h2>
// // // // //       {error && (
// // // // //         <div className="error-container">
// // // // //           <p className="error">{error}</p>
// // // // //           <button onClick={() => setError('')}>OK</button>
// // // // //         </div>
// // // // //       )}
// // // // //       <div className="courses">
// // // // //         {courses.map(course => (
// // // // //           <div key={course._id} className="course-card">
// // // // //             <img
// // // // //               src={course.imageUrl}
// // // // //               alt={course.title}
// // // // //               className="course-image"
// // // // //             />
// // // // //             <h3>{course.title}</h3>
// // // // //             <p>{course.description}</p>
// // // // //             <p>Instructor: {course.instructor?.username || 'Unknown'}</p>
            
// // // // //             <div className="course-actions">
// // // // //               <Link to={`/courses/${course._id}`}>
// // // // //                 <button className="view-course">View Course</button>
// // // // //               </Link>
// // // // //               <button
// // // // //                 className="enroll"
// // // // //                 onClick={() => handleEnroll(course._id)}
// // // // //                 disabled={!user}
// // // // //               >
// // // // //                 Enroll
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CourseList;
// // // import { useState, useEffect, useContext } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import axios from 'axios';
// // // import { AuthContext } from '../context/AuthContext';

// // // const CourseList = () => {
// // //   const { token, user } = useContext(AuthContext);
// // //   const [courses, setCourses] = useState([]);
// // //   const [filteredCourses, setFilteredCourses] = useState([]);
// // //   const [category, setCategory] = useState('');
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [error, setError] = useState('');
// // //   const [enrollments, setEnrollments] = useState([]);

// // //   // Fetch all courses
// // //   const fetchCourses = async () => {
// // //     try {
// // //       const res = await axios.get('http://localhost:5000/api/courses');
// // //       console.log('Fetched courses:', res.data);
// // //       setCourses(res.data);
// // //       setFilteredCourses(res.data);
// // //     } catch (err) {
// // //       console.error('Error fetching courses:', err.response?.data || err.message);
// // //       setError(err.response?.data?.message || 'Failed to fetch courses');
// // //     }
// // //   };

// // //   // Fetch user's enrollments
// // //   const fetchEnrollments = async () => {
// // //     if (!token || !user) return;
// // //     try {
// // //       const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       console.log('Fetched enrollments:', res.data);
// // //       setEnrollments(res.data);
// // //     } catch (err) {
// // //       console.error('Error fetching enrollments:', err.response?.data || err.message);
// // //       setError(err.response?.data?.message || 'Failed to fetch enrollments');
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchCourses();
// // //     fetchEnrollments();
// // //   }, [token, user]);

// // //   const handleFilter = () => {
// // //     let filtered = courses;

// // //     if (category) {
// // //       filtered = filtered.filter(course => course.category === category);
// // //     }

// // //     if (searchQuery) {
// // //       filtered = filtered.filter(course =>
// // //         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //         course.description.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //     }

// // //     setFilteredCourses(filtered);
// // //   };

// // //   useEffect(() => {
// // //     handleFilter();
// // //   }, [category, searchQuery, courses]);

// // //   const handleEnroll = async (courseId) => {
// // //     if (!token || !user) {
// // //       setError('Please log in to enroll in a course');
// // //       return;
// // //     }

// // //     try {
// // //       console.log('Attempting to enroll in course ID:', courseId);
// // //       console.log('Using token:', token);
// // //       const res = await axios.post(
// // //         `http://localhost:5000/api/enrollments`,
// // //         { courseId },
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );
// // //       console.log('Enrollment successful:', res.data);
// // //       fetchEnrollments(); // Refresh enrollments after enrolling
// // //     } catch (err) {
// // //       console.error('Enrollment error:', err.response?.status, err.response?.data || err.message);
// // //       if (err.response?.status === 404) {
// // //         setError('Enrollment endpoint not found. Please check backend setup.');
// // //       } else if (err.response?.status === 403) {
// // //         setError('Not authorized to enroll in this course.');
// // //       } else {
// // //         setError(err.response?.data?.message || 'Failed to enroll in the course');
// // //       }
// // //     }
// // //   };

// // //   const getEnrollmentStatus = (courseId) => {
// // //     const enrollment = enrollments.find(enrollment => enrollment.course._id === courseId);
// // //     if (!enrollment) return { isEnrolled: false, isCompleted: false };
// // //     return {
// // //       isEnrolled: true,
// // //       isCompleted: enrollment.progress === 100,
// // //     };
// // //   };

// // //   const categories = [...new Set(courses.map(course => course.category))];

// // //   return (
// // //     <div className="course-list">
// // //       <h2>All Courses</h2>
// // //       {error && (
// // //         <div className="error-container">
// // //           <p className="error">{error}</p>
// // //           <button onClick={() => setError('')}>OK</button>
// // //         </div>
// // //       )}
// // //       <div className="filter-section">
// // //         <div className="filter">
// // //           <label>Filter by Category:</label>
// // //           <select value={category} onChange={(e) => setCategory(e.target.value)}>
// // //             <option value="">All Categories</option>
// // //             {categories.map((cat, index) => (
// // //               <option key={index} value={cat}>{cat}</option>
// // //             ))}
// // //           </select>
// // //         </div>
// // //         <div className="search">
// // //           <input
// // //             type="text"
// // //             placeholder="Search courses..."
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)}
// // //           />
// // //         </div>
// // //       </div>
// // //       <div className="courses-grid">
// // //         {filteredCourses.length === 0 ? (
// // //           <p>No courses found.</p>
// // //         ) : (
// // //           filteredCourses.map((course, index) => {
// // //             const { isEnrolled, isCompleted } = getEnrollmentStatus(course._id);
// // //             return (
// // //               <div key={index} className="course-card">
// // //                 <img src={course.imageUrl} alt={course.title} />
// // //                 <h3>{course.title}</h3>
// // //                 <p>{course.description}</p>
// // //                 <p><strong>Instructor:</strong> {course.instructor.username}</p>
// // //                 {isCompleted ? (
// // //                   <p className="completed-text">Completed</p>
// // //                 ) : isEnrolled ? (
// // //                   <Link to={`/course/${course._id}`}>
// // //                     <button className="continue-button">Continue</button>
// // //                   </Link>
// // //                 ) : (
// // //                   <button onClick={() => handleEnroll(course._id)}>Enroll</button>
// // //                 )}
// // //                 <Link to={`/course/${course._id}`}>
// // //                   <button className="details-button">View Details</button>
// // //                 </Link>
// // //               </div>
// // //             );
// // //           })
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CourseList;
// // // // import { useState, useEffect, useContext } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import { AuthContext } from '../context/AuthContext';

// // // // const CourseList = () => {
// // // //   const { token, user } = useContext(AuthContext);
// // // //   const [courses, setCourses] = useState([]);
// // // //   const [filteredCourses, setFilteredCourses] = useState([]);
// // // //   const [category, setCategory] = useState('');
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [error, setError] = useState('');
// // // //   const [enrollments, setEnrollments] = useState([]);

// // // //   // Fetch all courses
// // // //   const fetchCourses = async () => {
// // // //     try {
// // // //       const res = await axios.get('http://localhost:5000/api/courses');
// // // //       console.log('Fetched courses:', res.data);
// // // //       setCourses(res.data);
// // // //       setFilteredCourses(res.data);
// // // //     } catch (err) {
// // // //       console.error('Error fetching courses:', err.response?.data || err.message);
// // // //       setError(err.response?.data?.message || 'Failed to fetch courses');
// // // //     }
// // // //   };

// // // //   // Fetch user's enrollments
// // // //   const fetchEnrollments = async () => {
// // // //     if (!token || !user) return;
// // // //     try {
// // // //       const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
// // // //         headers: { Authorization: `Bearer ${token}` },
// // // //       });
// // // //       console.log('Fetched enrollments:', res.data);
// // // //       setEnrollments(res.data);
// // // //     } catch (err) {
// // // //       console.error('Error fetching enrollments:', err.response?.data || err.message);
// // // //       setError(err.response?.data?.message || 'Failed to fetch enrollments');
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchCourses();
// // // //     fetchEnrollments();
// // // //   }, [token, user]);

// // // //   const handleFilter = () => {
// // // //     let filtered = courses;

// // // //     if (category) {
// // // //       filtered = filtered.filter(course => course.category === category);
// // // //     }

// // // //     if (searchQuery) {
// // // //       filtered = filtered.filter(course =>
// // // //         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //         course.description.toLowerCase().includes(searchQuery.toLowerCase())
// // // //       );
// // // //     }

// // // //     setFilteredCourses(filtered);
// // // //   };

// // // //   useEffect(() => {
// // // //     handleFilter();
// // // //   }, [category, searchQuery, courses]);

// // // //   const handleEnroll = async (courseId) => {
// // // //     if (!token || !user) {
// // // //       setError('Please log in to enroll in a course');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       console.log('Attempting to enroll in course ID:', courseId);
// // // //       console.log('Using token:', token);
// // // //       const res = await axios.post(
// // // //         `http://localhost:5000/api/enrollments`,
// // // //         { courseId },
// // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // //       );
// // // //       console.log('Enrollment successful:', res.data);
// // // //       fetchEnrollments(); // Refresh enrollments after enrolling
// // // //     } catch (err) {
// // // //       console.error('Enrollment error:', err.response?.status, err.response?.data || err.message);
// // // //       if (err.response?.status === 404) {
// // // //         setError('Enrollment endpoint not found. Please check backend setup.');
// // // //       } else if (err.response?.status === 403) {
// // // //         setError('Not authorized to enroll in this course.');
// // // //       } else {
// // // //         setError(err.response?.data?.message || 'Failed to enroll in the course');
// // // //       }
// // // //     }
// // // //   };

// // // //   const getEnrollmentStatus = (courseId) => {
// // // //     const enrollment = enrollments.find(enrollment => enrollment.course._id === courseId);
// // // //     if (!enrollment) return { isEnrolled: false, isCompleted: false };
// // // //     return {
// // // //       isEnrolled: true,
// // // //       isCompleted: enrollment.progress === 100,
// // // //     };
// // // //   };

// // // //   const categories = [...new Set(courses.map(course => course.category))];

// // // //   return (
// // // //     <div className="course-list">
// // // //       <h2>All Courses</h2>
// // // //       {error && (
// // // //         <div className="error-container">
// // // //           <p className="error">{error}</p>
// // // //           <button onClick={() => setError('')}>OK</button>
// // // //         </div>
// // // //       )}
// // // //       <div className="filter-section">
// // // //         <div className="filter">
// // // //           <label>Filter by Category:</label>
// // // //           <select value={category} onChange={(e) => setCategory(e.target.value)}>
// // // //             <option value="">All Categories</option>
// // // //             {categories.map((cat, index) => (
// // // //               <option key={index} value={cat}>{cat}</option>
// // // //             ))}
// // // //           </select>
// // // //         </div>
// // // //         <div className="search">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search courses..."
// // // //             value={searchQuery}
// // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //       <div className="courses-grid">
// // // //         {filteredCourses.length === 0 ? (
// // // //           <p>No courses found.</p>
// // // //         ) : (
// // // //           filteredCourses.map((course, index) => {
// // // //             const { isEnrolled, isCompleted } = getEnrollmentStatus(course._id);
// // // //             return (
// // // //               <div key={index} className="course-card">
// // // //                 <img src={course.imageUrl} alt={course.title} />
// // // //                 <h3>{course.title}</h3>
// // // //                 <p>{course.description}</p>
// // // //                 <p><strong>Instructor:</strong> {course.instructor.username}</p>
// // // //                 <div className="button-container">
// // // //                   {isCompleted ? (
// // // //                     <p className="completed-text">Completed</p>
// // // //                   ) : isEnrolled ? (
// // // //                     <Link to={`/course/${course._id}`}>
// // // //                       <button className="continue-button">Continue</button>
// // // //                     </Link>
// // // //                   ) : (
// // // //                     <button onClick={() => handleEnroll(course._id)}>Enroll</button>
// // // //                   )}
// // // //                   <Link to={`/course/${course._id}`}>
// // // //                     <button className="details-button">View Details</button>
// // // //                   </Link>
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CourseList;




// // // --------------------
// // import { useState, useEffect, useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { AuthContext } from '../context/AuthContext';

// // const CourseList = () => {
// //   const { token, user } = useContext(AuthContext);
// //   const [courses, setCourses] = useState([]);
// //   const [filteredCourses, setFilteredCourses] = useState([]);
// //   const [category, setCategory] = useState('');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [error, setError] = useState('');
// //   const [enrollments, setEnrollments] = useState([]);

// //   // Fetch all courses
// //   const fetchCourses = async () => {
// //     try {
// //       const res = await axios.get('http://localhost:5000/api/courses');
// //       console.log('Fetched courses:', res.data);
// //       setCourses(res.data);
// //       setFilteredCourses(res.data);
// //     } catch (err) {
// //       console.error('Error fetching courses:', err.response?.data || err.message);
// //       setError(err.response?.data?.message || 'Failed to fetch courses');
// //     }
// //   };

// //   // Fetch user's enrollments
// //   const fetchEnrollments = async () => {
// //     if (!token || !user) return;
// //     try {
// //       const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       console.log('Fetched enrollments:', res.data);
// //       setEnrollments(res.data);
// //     } catch (err) {
// //       console.error('Error fetching enrollments:', err.response?.data || err.message);
// //       setError(err.response?.data?.message || 'Failed to fetch enrollments');
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCourses();
// //     fetchEnrollments();
// //   }, [token, user]);

// //   const handleFilter = () => {
// //     let filtered = courses;

// //     if (category) {
// //       filtered = filtered.filter(course => course.category === category);
// //     }

// //     if (searchQuery) {
// //       filtered = filtered.filter(course =>
// //         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         course.description.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }

// //     setFilteredCourses(filtered);
// //   };

// //   useEffect(() => {
// //     handleFilter();
// //   }, [category, searchQuery, courses]);

// //   const handleEnroll = async (courseId) => {
// //     if (!token || !user) {
// //       setError('Please log in to enroll in a course');
// //       return;
// //     }

// //     try {
// //       console.log('Attempting to enroll in course ID:', courseId);
// //       console.log('Using token:', token);
// //       const res = await axios.post(
// //         `http://localhost:5000/api/enrollments`,
// //         { courseId },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       console.log('Enrollment successful:', res.data);
// //       fetchEnrollments(); // Refresh enrollments after enrolling
// //     } catch (err) {
// //       console.error('Enrollment error:', err.response?.status, err.response?.data || err.message);
// //       if (err.response?.status === 404) {
// //         setError('Enrollment endpoint not found. Please check backend setup.');
// //       } else if (err.response?.status === 403) {
// //         setError('Not authorized to enroll in this course.');
// //       } else {
// //         setError(err.response?.data?.message || 'Failed to enroll in the course');
// //       }
// //     }
// //   };

// //   const getEnrollmentStatus = (courseId) => {
// //     const enrollment = enrollments.find(
// //       enrollment => enrollment.course && enrollment.course._id === courseId
// //     );
// //     if (!enrollment) return { isEnrolled: false, isCompleted: false };
// //     return {
// //       isEnrolled: true,
// //       isCompleted: enrollment.progress === 100,
// //     };
// //   };

// //   const categories = [...new Set(courses.map(course => course.category))];

// //   return (
// //     <div className="course-list">
// //       <h2>All Courses</h2>
// //       {error && (
// //         <div className="error-container">
// //           <p className="error">{error}</p>
// //           <button onClick={() => setError('')}>OK</button>
// //         </div>
// //       )}
// //       <div className="filter-section">
// //         <div className="filter">
// //           <label>Filter by Category:</label>
// //           <select value={category} onChange={(e) => setCategory(e.target.value)}>
// //             <option value="">All Categories</option>
// //             {categories.map((cat, index) => (
// //               <option key={index} value={cat}>{cat}</option>
// //             ))}
// //           </select>
// //         </div>
// //         <div className="search">
// //           <input
// //             type="text"
// //             placeholder="Search courses..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //           />
// //         </div>
// //       </div>
// //       <div className="courses-grid">
// //         {filteredCourses.length === 0 ? (
// //           <p>No courses found.</p>
// //         ) : (
// //           filteredCourses.map((course, index) => {
// //             const { isEnrolled, isCompleted } = getEnrollmentStatus(course._id);
// //             return (
// //               <div key={index} className="course-card">
// //                 <img src={course.imageUrl} alt={course.title} />
// //                 <h3>{course.title}</h3>
// //                 <p>{course.description}</p>
// //                 <p><strong>Instructor:</strong> {course.instructor.username}</p>
// //                 <div className="button-container">
// //                   {isCompleted ? (
// //                     <p className="completed-text">Completed</p>
// //                   ) : isEnrolled ? (
// //                     <Link to={`/course/${course._id}`}>
// //                       <button className="continue-button">Continue</button>
// //                     </Link>
// //                   ) : (
// //                     <button onClick={() => handleEnroll(course._id)}>Enroll</button>
// //                   )}
// //                   <Link to={`/course/${course._id}`}>
// //                     <button className="details-button">View Details</button>
// //                   </Link>
// //                 </div>
// //               </div>
// //             );
// //           })
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CourseList;

// // ----------------------------------//////////////////

// import { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const CourseList = () => {
//   const { token, user } = useContext(AuthContext);
//   const [courses, setCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [category, setCategory] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [error, setError] = useState('');
//   const [enrollments, setEnrollments] = useState([]);

//   // Fetch all courses
//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/courses');
//       console.log('Fetched courses:', res.data);
//       setCourses(res.data);
//       setFilteredCourses(res.data);
//     } catch (err) {
//       console.error('Error fetching courses:', err.response?.data || err.message);
//       setError(err.response?.data?.message || 'Failed to fetch courses');
//     }
//   };

//   // Fetch user's enrollments
//   const fetchEnrollments = async () => {
//     if (!token || !user) return;
//     try {
//       const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log('Fetched enrollments:', res.data);
//       setEnrollments(res.data);
//     } catch (err) {
//       console.error('Error fetching enrollments:', err.response?.data || err.message);
//       setError(err.response?.data?.message || 'Failed to fetch enrollments');
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//     fetchEnrollments();
//   }, [token, user]);

//   const handleFilter = () => {
//     let filtered = courses;

//     if (category) {
//       filtered = filtered.filter(course => course.category === category);
//     }

//     if (searchQuery) {
//       filtered = filtered.filter(course =>
//         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredCourses(filtered);
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [category, searchQuery, courses]);

//   const handleEnroll = async (courseId) => {
//     if (!token || !user) {
//       setError('Please log in to enroll in a course');
//       return;
//     }

//     try {
//       console.log('Attempting to enroll in course ID:', courseId);
//       console.log('Using token:', token);
//       const res = await axios.post(
//         `http://localhost:5000/api/enrollments`,
//         { courseId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log('Enrollment successful:', res.data);
//       fetchEnrollments(); // Refresh enrollments after enrolling
//     } catch (err) {
//       console.error('Enrollment error:', err.response?.status, err.response?.data || err.message);
//       if (err.response?.status === 404) {
//         setError('Enrollment endpoint not found. Please check backend setup.');
//       } else if (err.response?.status === 403) {
//         setError('Not authorized to enroll in this course.');
//       } else {
//         setError(err.response?.data?.message || 'Failed to enroll in the course');
//       }
//     }
//   };

//   const getEnrollmentStatus = (courseId) => {
//     const enrollment = enrollments.find(
//       enrollment => enrollment.course && enrollment.course._id === courseId
//     );
//     if (!enrollment) return { isEnrolled: false, isCompleted: false };
//     return {
//       isEnrolled: true,
//       isCompleted: enrollment.progress === 100,
//     };
//   };

//   const categories = [...new Set(courses.map(course => course.category))];

//   return (
//     <div className="course-list">
//       <h2>All Courses</h2>
//       {error && (
//         <div className="error-container">
//           <p className="error">{error}</p>
//           <button onClick={() => setError('')}>OK</button>
//         </div>
//       )}
//       <div className="filter-section">
//         <div className="filter">
//           <label>Filter by Category:</label>
//           <select value={category} onChange={(e) => setCategory(e.target.value)}>
//             <option value="">All Categories</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>
//         <div className="search">
//           <input
//             type="text"
//             placeholder="Search courses..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="courses-grid">
//         {filteredCourses.length === 0 ? (
//           <p>No courses found.</p>
//         ) : (
//           filteredCourses.map((course, index) => {
//             const { isEnrolled, isCompleted } = getEnrollmentStatus(course._id);
//             return (
//               <div key={index} className="course-card">
//                 <img src={course.imageUrl} alt={course.title} />
//                 <h3>{course.title}</h3>
//                 <p>{course.description}</p>
//                 <p><strong>Instructor:</strong> {course.instructor.username}</p>
//                 <div className="button-container">
//                   {isCompleted ? (
//                     <p className="completed-text">Completed</p>
//                   ) : isEnrolled ? (
//                     <Link to={`/courses/${course._id}`}>
//                       <button className="continue-button">Resume Learning</button>
//                     </Link>
//                   ) : (
//                     <button onClick={() => handleEnroll(course._id)}>Join Now</button>
//                   )}
//                   <Link to={`/courses/${course._id}`}>
//                     <button className="details-button">Explore Course</button>
//                   </Link>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default CourseList;

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const CourseList = () => {
  const { token, user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [enrollments, setEnrollments] = useState([]);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      console.log('Fetched courses:', res.data);
      // Filter out courses without a valid _id
      const validCourses = res.data.filter(course => course && course._id);
      setCourses(validCourses);
      setFilteredCourses(validCourses);
    } catch (err) {
      console.error('Error fetching courses:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to fetch courses');
    }
  };

  // Fetch user's enrollments
  const fetchEnrollments = async () => {
    if (!token || !user) return;
    try {
      const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Fetched enrollments:', res.data);
      setEnrollments(res.data);
    } catch (err) {
      console.error('Error fetching enrollments:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to fetch enrollments');
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [token, user]);

  const handleFilter = () => {
    let filtered = courses;

    if (searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [searchQuery, courses]);

  const handleEnroll = async (courseId) => {
    if (!token || !user) {
      setError('Please log in to enroll in a course');
      return;
    }

    try {
      console.log('Attempting to enroll in course ID:', courseId);
      console.log('Using token:', token);
      const res = await axios.post(
        `http://localhost:5000/api/enrollments`,
        { courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Enrollment successful:', res.data);
      fetchEnrollments(); // Refresh enrollments after enrolling
    } catch (err) {
      console.error('Enrollment error:', err.response?.status, err.response?.data || err.message);
      if (err.response?.status === 404) {
        setError('Enrollment endpoint not found. Please check backend setup.');
      } else if (err.response?.status === 403) {
        setError('Not authorized to enroll in this course.');
      } else {
        setError(err.response?.data?.message || 'Failed to enroll in the course');
      }
    }
  };

  const getEnrollmentStatus = (courseId) => {
    const enrollment = enrollments.find(
      enrollment => enrollment.course && enrollment.course._id === courseId
    );
    if (!enrollment) return { isEnrolled: false, isCompleted: false };
    return {
      isEnrolled: true,
      isCompleted: enrollment.progress === 100,
    };
  };

  return (
    <div className="course-list">
      <h2>All Courses</h2>
      {error && (
        <div className="error-container">
          <p className="error">{error}</p>
          <button onClick={() => setError('')}>OK</button>
        </div>
      )}
      <div className="filter-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {/* <span className="search-icon">🔍</span> */}
          <span className="search-icon">
  <i className="fas fa-search"></i>
</span>
        </div>
      </div>
      <div className="courses-grid">
        {filteredCourses.length === 0 ? (
          <p>No courses found.</p>
        ) : (
          filteredCourses.map((course, index) => {
            const { isEnrolled, isCompleted } = getEnrollmentStatus(course._id);
            return (
              <div key={index} className="course-card">
                <img src={course.imageUrl} alt={course.title} />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p><strong>Instructor:</strong> {course.instructor?.username || 'Unknown'}</p>
                <div className="button-container">
                  {isCompleted ? (
                    <p className="completed-text">Completed</p>
                  ) : isEnrolled ? (
                    <Link to={`/courses/${course._id}`}>
                      <button className="continue-button">Resume Learning</button>
                    </Link>
                  ) : (
                    <>
                      <button onClick={() => handleEnroll(course._id)}>Join Now</button>
                      <Link to={`/courses/${course._id}`}>
                        <button className="explore-button">Explore Course</button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CourseList;