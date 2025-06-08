import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to E-Learning</h1>
      <p>Explore our wide range of courses to enhance your skills.</p>
      <Link to="/courses" className="explore-button">Explore Courses</Link>
    </div>
  );
};

export default Home;