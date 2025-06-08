// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { AuthProvider } from './context/AuthContext';
// // import Navbar from './components/Navbar';
// // import Home from './pages/Home';
// // import Courses from './pages/CoursesPage';
// // import CourseDetail from './pages/CourseDetailPage';
// // import LoginPage from './pages/LoginPage';
// // import RegisterPage from './pages/RegisterPage';
// // import EditCourse from './pages/EditCourse';
// // import QuizPage from './pages/QuizPage';
// // import CourseContent from './pages/CourseContent';
// // import AddCourse from './pages/AddCourse';
// // import MyCourses from './pages/MyCoursesPage';
// // import InstructorEnrollments from './pages/InstructorEnrollmentsPage';
// // import Dashboard from './components/Dashboard';
// // import ErrorBoundary from './components/ErrorBoundary';
// // import './styles/App.css';

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <Router>
// //         <div className="App">
// //           <Navbar />
// //           <div className="page">
// //             <Routes>
// //               <Route path="/" element={<Home />} />
// //               <Route path="/courses" element={<Courses />} />
// //               <Route path="/courses/:courseId" element={<CourseDetail />} />
// //               {/* <Route path="/courses/:courseId/content" element={<CourseContent />} /> */}
// //               <Route path="/login" element={<LoginPage />} />
// //               <Route path="/register" element={<RegisterPage />} />
// //               <Route path="/edit-course/:courseId" element={<EditCourse />} />
// //               <Route
// //               path="/my-courses"
// //               element={
// //                 <ErrorBoundary>
// //                   <MyCourses />
// //                 </ErrorBoundary>
// //               }
// //             />
// //             <Route path="/quiz/:courseId" element={<QuizPage />} />
// //               <Route path="/instructor-enrollments" element={<InstructorEnrollments />} />
// //               <Route path="/dashboard" element={<Dashboard />} />
// //               <Route path="/add-course" element={<AddCourse />} />
// //             </Routes>
            
// //           </div>
// //         </div>
// //       </Router>
// //     </AuthProvider>
// //   );
// // }

// // export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Courses from './pages/CoursesPage';
// import CourseDetail from './pages/CourseDetailPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import EditCourse from './pages/EditCourse';
// import QuizPage from './pages/QuizPage';
// import CourseContent from './pages/CourseContent';
// import AddCourse from './pages/AddCourse';
// import MyCourses from './pages/MyCoursesPage';
// import InstructorEnrollments from './pages/InstructorEnrollmentsPage';
// import Dashboard from './components/Dashboard';
// import ErrorBoundary from './components/ErrorBoundary';
// import './styles/App.css';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="page">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/courses" element={<Courses />} />
//               <Route path="/courses/:courseId" element={<CourseDetail />} />
//               {/* <Route path="/courses/:courseId/content" element={<CourseContent />} /> */}
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/register" element={<RegisterPage />} />
//               <Route path="/edit-course/:courseId" element={<EditCourse />} />
//               <Route
//                 path="/my-courses"
//                 element={
//                   <ErrorBoundary>
//                     <MyCourses />
//                   </ErrorBoundary>
//                 }
//               />
//               <Route path="/quiz/:courseId" element={<QuizPage />} />
//               <Route path="/instructor-enrollments" element={<InstructorEnrollments />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/add-course" element={<AddCourse />} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/CoursesPage';
import CourseDetail from './pages/CourseDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EditCourse from './pages/EditCourse';
import QuizPage from './pages/QuizPage';
import CourseContent from './pages/CourseContent';
import AddCourse from './pages/AddCourse';
import MyCourses from './pages/MyCoursesPage';
import InstructorEnrollments from './pages/InstructorEnrollmentsPage';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetail />} />
              {/* <Route path="/courses/:courseId/content" element={<CourseContent />} /> */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/edit-course/:courseId" element={<EditCourse />} />
              <Route
                path="/my-courses"
                element={
                  <ErrorBoundary>
                    <MyCourses />
                  </ErrorBoundary>
                }
              />
              <Route path="/quiz/:courseId" element={<QuizPage />} />
              <Route path="/instructor-enrollments" element={<InstructorEnrollments />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;