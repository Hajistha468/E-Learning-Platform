// // import { useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import { AuthContext } from '../context/AuthContext';

// // const Navbar = () => {
// //   const { user, logout } = useContext(AuthContext);

// //   return (
// //     <nav className="navbar">
// //       <Link to="/" className="nav-logo">E-Learning</Link>
// //       <div className="nav-links">
// //         <Link to="/courses">Courses</Link>
// //         {user ? (
// //           <>
// //             {user.role === 'instructor' && (
// //               <>
// //                 <Link to="/instructor-enrollments">My Enrollments</Link>
// //                 <Link to="/add-course">Add Course</Link>
// //               </>
// //             )}
// //             <Link to="/dashboard">Dashboard</Link>
// //             <Link to="/my-courses">My Courses</Link>
// //             <span>Welcome, {user.username}</span>
// //             <button onClick={logout}>Logout</button>
// //           </>
// //         ) : (
// //           <>
// //             <Link to="/login">Login</Link>
// //             <Link to="/register">Register</Link>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">E-Learning</Link>
//       </div>
//       <div className="navbar-links">
//         <Link to="/courses">Courses</Link>
//         {user && (
//           <>
            
//             <Link to="/instructor-enrollments">My Enrollments</Link>
//             {user.role === 'instructor' && <Link to="/add-course">Add Course</Link>}
//             <Link to="/dashboard">Dashboard</Link>
//             <Link to="/my-courses">My Courses</Link>
//           </>
//         )}
//       </div>
//       <div className="navbar-auth">
//         {user ? (
//           <>
//             <span className="welcome-message">Welcome, {user.username}</span>
//             <button className="logout-button" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">E-Learning</Link>
      </div>
      <div className="navbar-links">
        <Link to="/courses">Courses</Link>
        {user && (
          <>
            {user.role === 'instructor' && <Link to="/instructor-enrollments">My Enrollments</Link>}
            {user.role === 'instructor' && <Link to="/add-course">Add Course</Link>}
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/my-courses">My Courses</Link>
          </>
        )}
      </div>
      <div className="navbar-auth">
        {user ? (
          <>
            <span className="welcome-message">Welcome, {user.username}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;