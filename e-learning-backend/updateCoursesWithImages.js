const mongoose = require('mongoose');
const Course = require('./models/Course');

mongoose.connect('mongodb://localhost:27017/elearning')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const updateCourses = async () => {
  const courses = [
    { title: 'Introduction to JavaScript', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.jP50nvdiESemQcdmx3BPAwHaDt&pid=Api&P=0&h=180' },
    { title: 'Introduction to Python', imageUrl: 'https://cdn.educba.com/academy/wp-content/uploads/2019/02/Intro-of-Python-1.jpg' },
    { title: 'Web Development with HTML & CSS', imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { title: 'Data Structures and Algorithms', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.EH80U7QuYs8RfsaEXJ583QHaDt&pid=Api&P=0&h=180' },
  ];

  for (const { title, imageUrl } of courses) {
    try {
      await Course.updateOne({ title }, { $set: { imageUrl } });
      console.log(`Updated image for ${title}`);
    } catch (err) {
      console.error(`Error updating ${title}:`, err);
    }
  }
  mongoose.connection.close();
};

updateCourses();