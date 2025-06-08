const mongoose = require('mongoose');
const Course = require('./models/Course');

mongoose.connect('mongodb://localhost:27017/elearning')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const updateCourses = async () => {
  const courses = [
    { title: 'Introduction to JavaScript', youtubeChannelLink: 'https://www.youtube.com/watch?v=PkZNo7MFNFg' }, // Example video ID
    { title: 'Introduction to Python', youtubeChannelLink: 'https://www.youtube.com/watch?v=rfscVS0vtbw' },
    { title: 'Web Development with HTML & CSS', youtubeChannelLink: 'https://www.youtube.com/watch?v=UB1O30fR-EE' },
    { title: 'Data Structures and Algorithms', youtubeChannelLink: 'https://www.youtube.com/watch?v=8hly31xKli0' },
  ];

  for (const { title, youtubeChannelLink } of courses) {
    try {
      await Course.updateOne({ title }, { $set: { youtubeChannelLink } });
      console.log(`Updated YouTube video URL for ${title}`);
    } catch (err) {
      console.error(`Error updating ${title}:`, err);
    }
  }
  mongoose.connection.close();
};

updateCourses();