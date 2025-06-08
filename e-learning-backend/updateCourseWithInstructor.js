const mongoose = require('mongoose');
const Course = require('./models/Course');

mongoose.connect('mongodb://localhost:27017/elearning')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const updateCourses = async () => {
  const courses = [
    {
      title: 'Introduction to JavaScript',
      description: 'Learn the fundamentals of JavaScript, including variables, functions, and DOM manipulation.',
      instructor: '68146dad507b0eeeb6203f64', // hajistha
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f1348ac8ab73?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
    },
    {
      title: 'Introduction to Python',
      description: 'Master Python programming with topics like data structures, file handling, and basic algorithms.',
      instructor: '6814af70f405a468cb121554', // preethi
      imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0e4c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
    },
    {
      title: 'Web Development with HTML & CSS',
      description: 'Build responsive websites using HTML and CSS with modern design techniques.',
      instructor: '68146dad507b0eeeb6203f64', // hajistha
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
    },
    {
      title: 'Data Structures and Algorithms',
      description: 'Understand core data structures and algorithms to solve complex problems efficiently.',
      instructor: '6814af70f405a468cb121554', // preethi
      imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae00bc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=8hly31xKli0',
    },
    {
      title: 'React.js for Beginners',
      description: 'Learn to build dynamic web applications using React.js and its component-based architecture.',
      instructor: '68146dad507b0eeeb6203f64', // hajistha
      imageUrl: 'https://images.unsplash.com/photo-1633356122102-3feb822f6f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
    },
    {
      title: 'Node.js and Express',
      description: 'Create scalable backend applications with Node.js and Express framework.',
      instructor: '6814af70f405a468cb121554', // preethi
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
    },
    {
      title: 'Database Management with SQL',
      description: 'Master SQL for managing and querying relational databases effectively.',
      instructor: '68146dad507b0eeeb6203f64', // hajistha
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=p3qvj9hO_Bo',
    },
    {
      title: 'MongoDB Essentials',
      description: 'Learn to work with MongoDB for storing and retrieving data in NoSQL databases.',
      instructor: '6814af70f405a468cb121554', // preethi
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=ExcRbA7fy_A',
    },
    {
      title: 'Machine Learning with Python',
      description: 'Explore machine learning concepts and build models using Python libraries.',
      instructor: '68146dad507b0eeeb6203f64', // hajistha
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Understand the basics of cybersecurity, including encryption and network security.',
      instructor: '6814af70f405a468cb121554', // preethi
      imageUrl: 'https://images.unsplash.com/photo-1558089687-0f3e662dc668?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=1d0Zf9sXlHk',
    },
    {
      title: 'Mobile App Development with Flutter',
      description: 'Build cross-platform mobile apps using Google’s Flutter framework.',
      instructor: '68146dad507b0eeeb6203f64', // hajistha
      imageUrl: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=VPvVD8t02U8',
    },
    {
      title: 'Cloud Computing with AWS',
      description: 'Learn to deploy and manage applications using Amazon Web Services (AWS).',
      instructor: '6814af70f405a468cb121554', // preethi
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=k1RI5locZE4',
    },
    {
      title: 'Django Web Development',
      description: 'Create robust web applications using the Django framework in Python.',
      instructor: '68146dad507b0eeeb6203f64', // hajistha
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=rHux0gMZ3Eg',
    },
    {
      title: 'UI/UX Design Principles',
      description: 'Master the art of designing user-friendly interfaces and experiences.',
      instructor: '6814af70f405a468cb121554', // preethi
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=5uxrL3F92JI',
    },
    {
      title: 'Blockchain Basics',
      description: 'Understand blockchain technology and its applications in cryptocurrencies.',
      instructor: '68146dad507b0eeeb6203f64', // hajistha
      imageUrl: 'https://images.unsplash.com/photo-1631624215749-3e9d1b94332c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      youtubeChannelLink: 'https://www.youtube.com/watch?v=SSo_EIwHSd4',
    },
  ];

  for (const course of courses) {
    try {
      await Course.updateOne(
        { title: course.title },
        {
          $set: {
            title: course.title,
            description: course.description,
            instructor: course.instructor,
            imageUrl: course.imageUrl,
            youtubeChannelLink: course.youtubeChannelLink,
            createdAt: new Date(),
          },
        },
        { upsert: true }
      );
      console.log(`Updated/Inserted course: ${course.title}`);
    } catch (err) {
      console.error(`Error updating/inserting ${course.title}:`, err);
    }
  }
  mongoose.connection.close();
};

updateCourses();