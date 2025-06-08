// import { useState, useEffect, useContext } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const { token, user } = useContext(AuthContext);
//   const [course, setCourse] = useState(null);
//   const [error, setError] = useState('');
//   const [isEnrolled, setIsEnrolled] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [completedCourses, setCompletedCourses] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
//         console.log('Fetched course:', res.data); // Debug
//         setCourse(res.data);
//       } catch (err) {
//         setError(err.response?.data?.message || 'Failed to fetch course details');
//         console.error('Error fetching course:', err.response?.data || err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const checkEnrollment = async () => {
//       if (!user || !token) return;
//       try {
//         const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log('Fetched enrollments:', res.data); // Debug
//         const enrollment = res.data.find(enrollment => enrollment.course._id === courseId);
//         if (enrollment) {
//           setIsEnrolled(true);
//           setProgress(enrollment.progress);
//         }
//         const completed = res.data
//           .filter(enrollment => enrollment.progress === 100)
//           .map(enrollment => ({
//             title: enrollment.course.title,
//             completedAt: enrollment.updatedAt,
//           }));
//         setCompletedCourses(completed);
//       } catch (err) {
//         console.error('Error checking enrollment:', err.response?.data || err.message);
//         setError('Failed to check enrollment status');
//       }
//     };

//     fetchCourse();
//     checkEnrollment();
//   }, [courseId, user, token]);

//   return (
//     <div className="course-detail">
//       {error && (
//         <div className="error-container">
//           <p className="error">{error}</p>
//           <button onClick={() => setError('')}>OK</button>
//         </div>
//       )}
//       {loading && <p>Loading...</p>}
//       {!loading && !error && !course && <p>Course not found.</p>}
//       {!loading && !error && course && (
//         <>
//           <div className="enrollment-count">
//             <p><strong>Total Enrollments:</strong> {course.enrollmentCount}</p>
//           </div>
//           <img src={course.imageUrl} alt={course.title} className="course-image course-image-detail" />
//           <h2>{course.title}</h2>
//           <div className="course-metadata">
//             <p><strong>Duration:</strong> 10 hours</p>
//             <p><strong>Difficulty:</strong> Beginner</p>
//             <p><strong>Instructor:</strong> {course.instructor?.username || 'Unknown'}</p>
//             <p><strong>Created on:</strong> {new Date(course.createdAt).toLocaleDateString()}</p>
//           </div>
//           <div className="course-content">
//             <h3>Course Content</h3>
//             <p><strong>Overview:</strong> This course provides a comprehensive introduction to {course.title}, covering fundamental concepts and practical applications.</p>
//             <ul>
//               <li>Introduction to core concepts and tools</li>
//               <li>Hands-on projects to build real-world skills</li>
//               <li>Quizzes to test your knowledge</li>
//               <li>Access to additional resources and community support</li>
//             </ul>
//             <p><strong>Learning Outcomes:</strong></p>
//             <ul>
//               <li>Understand the basics of {course.title}</li>
//               <li>Apply concepts through practical exercises</li>
//               <li>Develop problem-solving skills in this domain</li>
//             </ul>
//           </div>
//           <div className="course-description">
//             <h3>Detailed Description</h3>
//             <p>{course.description}</p>
//             <p><strong>What You'll Learn:</strong></p>
//             <ul>
//               <li>Master the foundational principles of {course.title} through engaging lectures and interactive examples.</li>
//               <li>Explore real-world applications with case studies and projects tailored to industry needs.</li>
//               <li>Develop hands-on skills with guided exercises and quizzes.</li>
//               <li>Gain insights from industry experts through interviews and Q&A sessions.</li>
//             </ul>
//             <p><strong>Who This Course Is For:</strong></p>
//             <ul>
//               <li>Beginners looking to start their journey in {course.title}.</li>
//               <li>Intermediate learners aiming to deepen their understanding and skills.</li>
//               <li>Professionals seeking to apply {course.title} concepts in their work.</li>
//             </ul>
//             <p><strong>Prerequisites:</strong></p>
//             <ul>
//               <li>Basic understanding of computers and internet navigation.</li>
//               <li>No prior experience in {course.title} is required, though familiarity with related concepts is a plus.</li>
//             </ul>
//             <p><strong>Course Materials:</strong></p>
//             <ul>
//               <li>Downloadable lecture notes and cheat sheets.</li>
//               <li>Access to a private community forum for peer support and discussions.</li>
//               <li>Supplementary readings and resources for deeper exploration.</li>
//             </ul>
//           </div>
//           {course.youtubeChannelLink && (
//             <div className="course-actions">
//               <a href={course.youtubeChannelLink} target="_blank" rel="noopener noreferrer">
//                 Watch on YouTube
//               </a>
//             </div>
//           )}
//           {user ? (
//             isEnrolled ? (
//               progress < 100 ? (
//                 <div className="course-actions">
//                   <Link to={`/quiz/${courseId}`}>
//                     <button className="take-quiz">Take Quiz</button>
//                   </Link>
//                 </div>
//               ) : (
//                 <p>You have completed this course.</p>
//               )
//             ) : (
//               <p>Enroll in the course to take the quiz.</p>
//             )
//           ) : (
//             <p>Please log in to take the quiz.</p>
//           )}
//           {user && (
//             <div className="user-history">
//               <h3>Your Completed Courses</h3>
//               {completedCourses.length === 0 ? (
//                 <p>You haven't completed any courses yet.</p>
//               ) : (
//                 <ul>
//                   {completedCourses.map((completed, index) => (
//                     <li key={index}>
//                       {completed.title} - Completed on {new Date(completed.completedAt).toLocaleDateString()}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;


import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { token, user } = useContext(AuthContext);
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        console.log('Fetched course:', res.data); // Debug
        setCourse(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch course details');
        console.error('Error fetching course:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    const checkEnrollment = async () => {
      if (!user || !token) return;
      try {
        const res = await axios.get('http://localhost:5000/api/enrollments/my-courses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Fetched enrollments:', res.data); // Debug
        const enrollment = res.data.find(enrollment => enrollment.course && enrollment.course._id === courseId);
        if (enrollment) {
          setIsEnrolled(true);
          setProgress(enrollment.progress);
        }
        const completed = res.data
          .filter(enrollment => enrollment.progress === 100)
          .map(enrollment => ({
            title: enrollment.course?.title || 'Untitled Course',
            completedAt: enrollment.updatedAt,
          }));
        setCompletedCourses(completed);
      } catch (err) {
        console.error('Error checking enrollment:', err.response?.data || err.message);
        setError('Failed to check enrollment status');
      }
    };

    fetchCourse();
    checkEnrollment();
  }, [courseId, user, token]);

  return (
    <div className="course-detail">
      {error && (
        <div className="error-container">
          <p className="error">{error}</p>
          <button onClick={() => setError('')}>OK</button>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {!loading && !error && !course && <p>Course not found.</p>}
      {!loading && !error && course && (
        <>
          <div className="enrollment-count">
            {/* <p><strong>Total Enrollments:</strong> {course.enrollmentCount || 0}</p> */}
          </div>
          {course.imageUrl ? (
            <img src={course.imageUrl} alt={course.title || 'Course Image'} className="course-image course-image-detail" />
          ) : (
            <p>No image available.</p>
          )}
          <h2>{course.title || 'Untitled Course'}</h2>
          <div className="course-metadata">
            <p><strong>Duration:</strong> 10 hours</p>
            <p><strong>Difficulty:</strong> Beginner</p>
            <p><strong>Instructor:</strong> {course.instructor?.username || 'Unknown'}</p>
            <p><strong>Created on:</strong> {course.createdAt ? new Date(course.createdAt).toLocaleDateString() : 'Unknown'}</p>
          </div>
          <div className="course-content">
            <h3>Course Content</h3>
            <p><strong>Overview:</strong> This course provides a comprehensive introduction to {course.title || 'this subject'}, covering fundamental concepts and practical applications.</p>
            <ul>
              <li>Introduction to core concepts and tools</li>
              <li>Hands-on projects to build real-world skills</li>
              <li>Quizzes to test your knowledge</li>
              <li>Access to additional resources and community support</li>
            </ul>
            <p><strong>Learning Outcomes:</strong></p>
            <ul>
              <li>Understand the basics of {course.title || 'this subject'}</li>
              <li>Apply concepts through practical exercises</li>
              <li>Develop problem-solving skills in this domain</li>
            </ul>
          </div>
          <div className="course-description">
            <h3>Detailed Description</h3>
            <p>{course.description || 'No description available.'}</p>
            <p><strong>What You'll Learn:</strong></p>
            <ul>
              <li>Master the foundational principles of {course.title || 'this subject'} through engaging lectures and interactive examples.</li>
              <li>Explore real-world applications with case studies and projects tailored to industry needs.</li>
              <li>Develop hands-on skills with guided exercises and quizzes.</li>
              <li>Gain insights from industry experts through interviews and Q&A sessions.</li>
            </ul>
            <p><strong>Who This Course Is For:</strong></p>
            <ul>
              <li>Beginners looking to start their journey in {course.title || 'this subject'}.</li>
              <li>Intermediate learners aiming to deepen their understanding and skills.</li>
              <li>Professionals seeking to apply {course.title || 'this subject'} concepts in their work.</li>
            </ul>
            <p><strong>Prerequisites:</strong></p>
            <ul>
              <li>Basic understanding of computers and internet navigation.</li>
              <li>No prior experience in {course.title || 'this subject'} is required, though familiarity with related concepts is a plus.</li>
            </ul>
            <p><strong>Course Materials:</strong></p>
            <ul>
              <li>Downloadable lecture notes and cheat sheets.</li>
              <li>Access to a private community forum for peer support and discussions.</li>
              <li>Supplementary readings and resources for deeper exploration.</li>
            </ul>
          </div>
          {course.youtubeChannelLink && (
            <div className="course-actions">
              <a href={course.youtubeChannelLink} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </div>
          )}
          <video width="560" height="315" controls>
  <source src={course.courseVideoUrl} type="video/mp4" />
  Your browser does not support the video tag.
</video>
          {user ? (
            isEnrolled ? (
              progress < 100 ? (
                <div className="course-actions">
                  <Link to={`/quiz/${courseId}`}>
                    <button className="take-quiz">Take Quiz</button>
                  </Link>
                </div>
              ) : (
                <p>You have completed this course.</p>
              )
            ) : (
              <p>Enroll in the course to take the quiz.</p>
            )
          ) : (
            <p>Please log in to take the quiz.</p>
          )}
          {user && (
            <div className="user-history">
              <h3>Your Completed Courses</h3>
              {completedCourses.length === 0 ? (
                <p>You haven't completed any courses yet.</p>
              ) : (
                <ul>
                  {completedCourses.map((completed, index) => (
                    <li key={index}>
                      {completed.title} - Completed on {new Date(completed.completedAt).toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourseDetail;