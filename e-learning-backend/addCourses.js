const axios = require('axios');

   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTM5YzhlYTNjYjNlZTgxMjFhZmJjNCIsImlhdCI6MTc0NjExNjE2OCwiZXhwIjoxNzQ2MTE5NzY4fQ.1eVO8oby5YKBYQm5sXmdkTZsHqCNCTdQlmbjHV4iE9w'; // Replace with your actual token

   const courses = [
     {
       title: 'Introduction to Python',
       description: 'Learn the basics of Python programming.',
     },
     {
       title: 'Web Development with HTML & CSS',
       description: 'Master the fundamentals of web development.',
     },
     {
       title: 'Data Structures and Algorithms',
       description: 'Understand key concepts in computer science.',
     },
   ];

   const addCourses = async () => {
     for (const course of courses) {
       try {
         const res = await axios.post('http://localhost:5000/api/courses', course, {
           headers: { Authorization: `Bearer ${token}` },
         });
         console.log(`Added course: ${res.data.title}`);
       } catch (err) {
         console.error(`Failed to add course: ${err.response?.data?.message}`);
       }
     }
   };

   addCourses();