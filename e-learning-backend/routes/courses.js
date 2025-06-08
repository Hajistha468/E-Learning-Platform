// // // // // const express = require('express');
// // // // // const router = express.Router();
// // // // // const Course = require('../models/Course');
// // // // // const Enrollment = require('../models/Enrollment');
// // // // // const authMiddleware = require('../middleware/auth');

// // // // // // Get all courses
// // // // // router.get('/', async (req, res) => {
// // // // //   try {
// // // // //     const courses = await Course.find().populate('instructor', 'username');
// // // // //     res.json(courses);
// // // // //   } catch (err) {
// // // // //     console.error('Error fetching courses:', err);
// // // // //     res.status(500).json({ message: 'Server error' });
// // // // //   }
// // // // // });

// // // // // // Get a specific course by ID
// // // // // router.get('/:id', async (req, res) => {
// // // // //   try {
// // // // //     const course = await Course.findById(req.params.id).populate('instructor', 'username');
// // // // //     if (!course) {
// // // // //       return res.status(404).json({ message: 'Course not found' });
// // // // //     }
// // // // //     const enrollmentCount = await Enrollment.countDocuments({ course: req.params.id });
// // // // //     res.json({ ...course.toObject(), enrollmentCount });
// // // // //   } catch (err) {
// // // // //     console.error('Error fetching course:', err);
// // // // //     res.status(500).json({ message: 'Server error' });
// // // // //   }
// // // // // });

// // // // // // Create a new course (Instructor only)
// // // // // router.post('/', authMiddleware, async (req, res) => {
// // // // //   const { title, description, imageUrl, courseVideoUrl } = req.body;

// // // // //   try {
// // // // //     // Check if user is an instructor
// // // // //     if (req.user.role !== 'instructor') {
// // // // //       return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
// // // // //     }

// // // // //     // Validate required fields
// // // // //     if (!title || !description) {
// // // // //       return res.status(400).json({ message: 'Title and description are required' });
// // // // //     }

// // // // //     const course = new Course({
// // // // //       title,
// // // // //       description,
// // // // //       instructor: req.user.id,
// // // // //       imageUrl: imageUrl || 'https://via.placeholder.com/300x200?text=Course+Image',
// // // // //       courseVideoUrl: courseVideoUrl || '',
// // // // //       createdAt: new Date(),
// // // // //     });

// // // // //     await course.save();
// // // // //     console.log(`Course created: ${title} by instructor ${req.user.id}`);
// // // // //     res.status(201).json({ message: 'Course created successfully', course });
// // // // //   } catch (err) {
// // // // //     console.error('Error creating course:', err);
// // // // //     res.status(500).json({ message: 'Server error' });
// // // // //   }
// // // // // });

// // // // // module.exports = router;
// // // // const express = require('express');
// // // // const router = express.Router();
// // // // const Course = require('../models/Course');
// // // // const authMiddleware = require('../middleware/auth');
// // // // const multer = require('multer');
// // // // const fs = require('fs');
// // // // const path = require('path');

// // // // // Configure Multer for file uploads
// // // // const storage = multer.diskStorage({
// // // //   destination: (req, file, cb) => {
// // // //     cb(null, 'uploads/');
// // // //   },
// // // //   filename: (req, file, cb) => {
// // // //     cb(null, `${Date.now()}-${file.originalname}`);
// // // //   },
// // // // });

// // // // const upload = multer({
// // // //   storage: storage,
// // // //   fileFilter: (req, file, cb) => {
// // // //     if (path.extname(file.originalname).toLowerCase() === '.html') {
// // // //       cb(null, true);
// // // //     } else {
// // // //       cb(new Error('Only HTML files are allowed'), false);
// // // //     }
// // // //   },
// // // // });

// // // // // Ensure uploads directory exists
// // // // const uploadsDir = path.join(__dirname, '../uploads');
// // // // if (!fs.existsSync(uploadsDir)) {
// // // //   fs.mkdirSync(uploadsDir);
// // // // }

// // // // // Log route registration
// // // // console.log('Registering courses routes...');

// // // // // Get all courses
// // // // router.get('/', async (req, res) => {
// // // //   try {
// // // //     const courses = await Course.find()
// // // //       .populate('instructor', 'username')
// // // //       .sort({ createdAt: -1 });
// // // //     res.json(courses);
// // // //   } catch (err) {
// // // //     console.error('Error fetching courses:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // // Get course by ID
// // // // router.get('/:id', async (req, res) => {
// // // //   try {
// // // //     const course = await Course.findById(req.params.id)
// // // //       .populate('instructor', 'username');
// // // //     if (!course) {
// // // //       return res.status(404).json({ message: 'Course not found' });
// // // //     }
// // // //     res.json(course);
// // // //   } catch (err) {
// // // //     console.error('Error fetching course:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // // Get course content (for enrolled users)
// // // // router.get('/:id/content', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const course = await Course.findById(req.params.id);
// // // //     if (!course) {
// // // //       return res.status(404).json({ message: 'Course not found' });
// // // //     }

// // // //     // Check if user is enrolled
// // // //     const enrollment = await Enrollment.findOne({
// // // //       user: req.user.id,
// // // //       course: req.params.id,
// // // //     });
// // // //     if (!enrollment) {
// // // //       return res.status(403).json({ message: 'You must enroll in the course to access the content' });
// // // //     }

// // // //     res.json({ content: course.content });
// // // //   } catch (err) {
// // // //     console.error('Error fetching course content:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // // Create a new course (Instructor only)
// // // // router.post('/', authMiddleware, upload.single('contentFile'), async (req, res) => {
// // // //   const { title, description, imageUrl, courseVideoUrl } = req.body;
// // // //   let content = '';

// // // //   try {
// // // //     // Check if user is an instructor
// // // //     if (req.user.role !== 'instructor') {
// // // //       return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
// // // //     }

// // // //     // Validate required fields
// // // //     if (!title || !description) {
// // // //       return res.status(400).json({ message: 'Title and description are required' });
// // // //     }

// // // //     // Read the uploaded HTML file
// // // //     if (req.file) {
// // // //       const filePath = path.join(__dirname, '../uploads', req.file.filename);
// // // //       content = fs.readFileSync(filePath, 'utf8');
// // // //       // Delete the file after reading
// // // //       fs.unlinkSync(filePath);
// // // //     }

// // // //     const course = new Course({
// // // //       title,
// // // //       description,
// // // //       instructor: req.user.id,
// // // //       imageUrl: imageUrl || 'https://via.placeholder.com/300x200?text=Course+Image',
// // // //       courseVideoUrl: courseVideoUrl || '',
// // // //       content,
// // // //       createdAt: new Date(),
// // // //     });

// // // //     await course.save();
// // // //     console.log(`Course created: ${title} by instructor ${req.user.id}`);
// // // //     res.status(201).json({ message: 'Course created successfully', course });
// // // //   } catch (err) {
// // // //     console.error('Error creating course:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // const express = require('express');
// // // const router = express.Router();
// // // const Course = require('../models/Course');
// // // const authMiddleware = require('../middleware/auth');
// // // const multer = require('multer');
// // // const fs = require('fs');
// // // const path = require('path');

// // // // Configure Multer for file uploads
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => {
// // //     cb(null, 'uploads/');
// // //   },
// // //   filename: (req, file, cb) => {
// // //     cb(null, `${Date.now()}-${file.originalname}`);
// // //   },
// // // });

// // // const upload = multer({
// // //   storage: storage,
// // //   fileFilter: (req, file, cb) => {
// // //     if (path.extname(file.originalname).toLowerCase() === '.html') {
// // //       cb(null, true);
// // //     } else {
// // //       cb(new Error('Only HTML files are allowed'), false);
// // //     }
// // //   },
// // // });

// // // // Ensure uploads directory exists
// // // const uploadsDir = path.join(__dirname, '../uploads');
// // // if (!fs.existsSync(uploadsDir)) {
// // //   fs.mkdirSync(uploadsDir);
// // // }

// // // // Log route registration
// // // console.log('Registering courses routes...');

// // // // Get all courses
// // // router.get('/', async (req, res) => {
// // //   try {
// // //     const courses = await Course.find()
// // //       .populate('instructor', 'username')
// // //       .sort({ createdAt: -1 });
// // //     res.json(courses);
// // //   } catch (err) {
// // //     console.error('Error fetching courses:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Get course by ID
// // // router.get('/:id', async (req, res) => {
// // //   try {
// // //     const course = await Course.findById(req.params.id)
// // //       .populate('instructor', 'username');
// // //     if (!course) {
// // //       return res.status(404).json({ message: 'Course not found' });
// // //     }
// // //     res.json(course);
// // //   } catch (err) {
// // //     console.error('Error fetching course:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Get course content (for enrolled users)
// // // router.get('/:id/content', authMiddleware, async (req, res) => {
// // //   try {
// // //     const course = await Course.findById(req.params.id);
// // //     if (!course) {
// // //       return res.status(404).json({ message: 'Course not found' });
// // //     }

// // //     // Check if user is enrolled
// // //     const enrollment = await Enrollment.findOne({
// // //       user: req.user.id,
// // //       course: req.params.id,
// // //     });
// // //     if (!enrollment) {
// // //       return res.status(403).json({ message: 'You must enroll in the course to access the content' });
// // //     }

// // //     res.json({ content: course.content });
// // //   } catch (err) {
// // //     console.error('Error fetching course content:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Create a new course (Instructor only)
// // // router.post('/', authMiddleware, upload.single('contentFile'), async (req, res) => {
// // //   const { title, description, imageUrl, courseVideoUrl } = req.body;
// // //   let content = '';

// // //   try {
// // //     // Check if user is an instructor
// // //     if (req.user.role !== 'instructor') {
// // //       return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
// // //     }

// // //     // Validate required fields
// // //     if (!title || !description) {
// // //       return res.status(400).json({ message: 'Title and description are required' });
// // //     }

// // //     // Read the uploaded HTML file
// // //     if (req.file) {
// // //       const filePath = path.join(__dirname, '../uploads', req.file.filename);
// // //       content = fs.readFileSync(filePath, 'utf8');
// // //       // Delete the file after reading
// // //       fs.unlinkSync(filePath);
// // //     }

// // //     const course = new Course({
// // //       title,
// // //       description,
// // //       instructor: req.user.id,
// // //       imageUrl: imageUrl || 'https://via.placeholder.com/300x200?text=Course+Image',
// // //       courseVideoUrl: courseVideoUrl || '',
// // //       content,
// // //       createdAt: new Date(),
// // //     });

// // //     await course.save();
// // //     console.log(`Course created: ${title} by instructor ${req.user.id}`);
// // //     res.status(201).json({ message: 'Course created successfully', course });
// // //   } catch (err) {
// // //     console.error('Error creating course:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Update a course (Instructor only)
// // // router.put('/:id', authMiddleware, upload.single('contentFile'), async (req, res) => {
// // //   const { title, description, imageUrl, courseVideoUrl } = req.body;
// // //   let content;

// // //   try {
// // //     // Check if user is an instructor
// // //     if (req.user.role !== 'instructor') {
// // //       return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
// // //     }

// // //     const course = await Course.findById(req.params.id);
// // //     if (!course) {
// // //       return res.status(404).json({ message: 'Course not found' });
// // //     }

// // //     // Check if the instructor owns this course
// // //     if (course.instructor.toString() !== req.user.id) {
// // //       return res.status(403).json({ message: 'Not authorized to update this course' });
// // //     }

// // //     // Read the uploaded HTML file if provided
// // //     if (req.file) {
// // //       const filePath = path.join(__dirname, '../uploads', req.file.filename);
// // //       content = fs.readFileSync(filePath, 'utf8');
// // //       fs.unlinkSync(filePath);
// // //     }

// // //     // Update fields
// // //     course.title = title || course.title;
// // //     course.description = description || course.description;
// // //     course.imageUrl = imageUrl || course.imageUrl;
// // //     course.courseVideoUrl = courseVideoUrl || course.courseVideoUrl;
// // //     if (content !== undefined) {
// // //       course.content = content;
// // //     }

// // //     await course.save();
// // //     console.log(`Course updated: ${course.title} by instructor ${req.user.id}`);
// // //     res.json({ message: 'Course updated successfully', course });
// // //   } catch (err) {
// // //     console.error('Error updating course:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const Course = require('../models/Course');
// // const authMiddleware = require('../middleware/auth');

// // // Get all courses
// // router.get('/', async (req, res) => {
// //   try {
// //     const courses = await Course.find().populate('instructor', 'username');
// //     res.json(courses);
// //   } catch (err) {
// //     console.error('Error fetching courses:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Get a single course by ID
// // router.get('/:id', async (req, res) => {
// //   try {
// //     const course = await Course.findById(req.params.id).populate('instructor', 'username');
// //     if (!course) {
// //       return res.status(404).json({ message: 'Course not found' });
// //     }
// //     res.json(course);
// //   } catch (err) {
// //     console.error('Error fetching course:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Get course content by ID
// // router.get('/:id/content', async (req, res) => {
// //   try {
// //     const course = await Course.findById(req.params.id).select('content');
// //     if (!course) {
// //       return res.status(404).json({ message: 'Course not found' });
// //     }
// //     res.json(course.content || []);
// //   } catch (err) {
// //     console.error('Error fetching course content:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Add or update course content (instructor only)
// // router.post('/:id/content', authMiddleware, async (req, res) => {
// //   if (req.user.role !== 'instructor') {
// //     return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
// //   }

// //   try {
// //     const course = await Course.findById(req.params.id);
// //     if (!course) {
// //       return res.status(404).json({ message: 'Course not found' });
// //     }

// //     if (course.instructor.toString() !== req.user.id) {
// //       return res.status(403).json({ message: 'Not authorized to update this course' });
// //     }

// //     const { title, description, htmlContent } = req.body;

// //     // If content array doesn't exist, initialize it
// //     if (!course.content) {
// //       course.content = [];
// //     }

// //     // Add new lesson to content
// //     course.content.push({
// //       title,
// //       description,
// //       htmlContent: htmlContent || '',
// //     });

// //     await course.save();
// //     res.status(201).json({ message: 'Content added successfully', content: course.content });
// //   } catch (err) {
// //     console.error('Error adding course content:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Create a new course (instructor only)
// // router.post('/', authMiddleware, async (req, res) => {
// //   if (req.user.role !== 'instructor') {
// //     return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
// //   }

// //   const { title, description, imageUrl, youtubeChannelLink, category } = req.body;

// //   try {
// //     const course = new Course({
// //       title,
// //       description,
// //       instructor: req.user.id,
// //       imageUrl: imageUrl || '',
// //       youtubeChannelLink: youtubeChannelLink || '',
// //       category: category || 'General',
// //     });

// //     await course.save();
// //     res.status(201).json({ message: 'Course created successfully', course });
// //   } catch (err) {
// //     console.error('Error creating course:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Update a course (instructor only)
// // router.put('/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const course = await Course.findById(req.params.id);
// //     if (!course) {
// //       return res.status(404).json({ message: 'Course not found' });
// //     }

// //     if (course.instructor.toString() !== req.user.id || req.user.role !== 'instructor') {
// //       return res.status(403).json({ message: 'Not authorized to update this course' });
// //     }

// //     const { title, description, imageUrl, youtubeChannelLink, category } = req.body;
// //     course.title = title || course.title;
// //     course.description = description || course.description;
// //     course.imageUrl = imageUrl || course.imageUrl;
// //     course.youtubeChannelLink = youtubeChannelLink || course.youtubeChannelLink;
// //     course.category = category || course.category;

// //     await course.save();
// //     res.json({ message: 'Course updated successfully', course });
// //   } catch (err) {
// //     console.error('Error updating course:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Delete a course (instructor only)
// // router.delete('/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const course = await Course.findById(req.params.id);
// //     if (!course) {
// //       return res.status(404).json({ message: 'Course not found' });
// //     }

// //     if (course.instructor.toString() !== req.user.id || req.user.role !== 'instructor') {
// //       return res.status(403).json({ message: 'Not authorized to delete this course' });
// //     }

// //     await Course.deleteOne({ _id: req.params.id });
// //     res.json({ message: 'Course deleted successfully' });
// //   } catch (err) {
// //     console.error('Error deleting course:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // module.exports = router;

// // -----------------------------

// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course');
// const Enrollment = require('../models/Enrollment'); // Added to delete enrollments
// const authMiddleware = require('../middleware/auth');

// // Get all courses
// router.get('/', async (req, res) => {
//   try {
//     const courses = await Course.find().populate('instructor', 'username');
//     res.json(courses);
//   } catch (err) {
//     console.error('Error fetching courses:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Get a single course by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id).populate('instructor', 'username');
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.json(course);
//   } catch (err) {
//     console.error('Error fetching course:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Get course content by ID
// router.get('/:id/content', async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id).select('content');
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.json(course.content || []);
//   } catch (err) {
//     console.error('Error fetching course content:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Add or update course content (instructor only)
// router.post('/:id/content', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'instructor') {
//     return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
//   }

//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     if (course.instructor.toString() !== req.user.id) {
//       return res.status(403).json({ message: 'Not authorized to update this course' });
//     }

//     const { title, description, htmlContent } = req.body;

//     // If content array doesn't exist, initialize it
//     if (!course.content) {
//       course.content = [];
//     }

//     // Add new lesson to content
//     course.content.push({
//       title,
//       description,
//       htmlContent: htmlContent || '',
//     });

//     await course.save();
//     res.status(201).json({ message: 'Content added successfully', content: course.content });
//   } catch (err) {
//     console.error('Error adding course content:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Create a new course (instructor only)
// router.post('/', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'instructor') {
//     return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
//   }

//   const { title, description, imageUrl, youtubeChannelLink, category } = req.body;

//   try {
//     const course = new Course({
//       title,
//       description,
//       instructor: req.user.id,
//       imageUrl: imageUrl || '',
//       youtubeChannelLink: youtubeChannelLink || '',
//       category: category || 'General',
//     });

//     await course.save();
//     res.status(201).json({ message: 'Course created successfully', course });
//   } catch (err) {
//     console.error('Error creating course:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Update a course (instructor only)
// router.put('/:id', authMiddleware, async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     if (course.instructor.toString() !== req.user.id || req.user.role !== 'instructor') {
//       return res.status(403).json({ message: 'Not authorized to update this course' });
//     }

//     const { title, description, imageUrl, youtubeChannelLink, category } = req.body;
//     course.title = title || course.title;
//     course.description = description || course.description;
//     course.imageUrl = imageUrl || course.imageUrl;
//     course.youtubeChannelLink = youtubeChannelLink || course.youtubeChannelLink;
//     course.category = category || course.category;

//     await course.save();
//     res.json({ message: 'Course updated successfully', course });
//   } catch (err) {
//     console.error('Error updating course:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Delete a course (instructor only)
// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     if (course.instructor.toString() !== req.user.id || req.user.role !== 'instructor') {
//       return res.status(403).json({ message: 'Not authorized to delete this course' });
//     }

//     // Delete all enrollments associated with this course
//     await Enrollment.deleteMany({ course: req.params.id });

//     // Delete the course
//     await Course.deleteOne({ _id: req.params.id });

//     res.json({ message: 'Course and associated enrollments deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting course:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const authMiddleware = require('../middleware/auth');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'username');
    res.json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err.message, err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get a single course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'username');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error('Error fetching course:', err.message, err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get course content by ID
router.get('/:id/content', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).select('content');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    // Since content isn't in the schema, return an empty array for compatibility
    res.json([]);
  } catch (err) {
    console.error('Error fetching course content:', err.message, err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Add or update course content (instructor only)
router.post('/:id/content', authMiddleware, async (req, res) => {
  if (req.user.role !== 'instructor') {
    return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
  }

  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (course.instructor.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this course' });
    }

    // Since content isn't in the schema, return an error
    return res.status(400).json({ message: 'Content field not supported in this schema' });
  } catch (err) {
    console.error('Error adding course content:', err.message, err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Create a new course (instructor only)
router.post('/', authMiddleware, async (req, res) => {
  if (req.user.role !== 'instructor') {
    return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
  }

  try {
    // Log the incoming request for debugging
    console.log('Request body:', req.body);

    // Since we're not using multipart/form-data anymore, req.body should be JSON
    if (!req.body) {
      return res.status(400).json({ message: 'Request body is empty' });
    }

    const { title, description, imageUrl, courseVideoUrl } = req.body;

    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const course = new Course({
      title,
      description,
      instructor: req.user.id,
      imageUrl: imageUrl || 'https://via.placeholder.com/300x200?text=Course+Image',
      courseVideoUrl: courseVideoUrl || '',
    });

    console.log('Saving course:', course);
    await course.save();
    console.log('Course saved successfully');
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (err) {
    console.error('Error creating course:', err.message, err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update a course (instructor only)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (course.instructor.toString() !== req.user.id || req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Not authorized to update this course' });
    }

    const { title, description, imageUrl, courseVideoUrl } = req.body;
    course.title = title || course.title;
    course.description = description || course.description;
    course.imageUrl = imageUrl || course.imageUrl;
    course.courseVideoUrl = courseVideoUrl || course.courseVideoUrl;

    await course.save();
    res.json({ message: 'Course updated successfully', course });
  } catch (err) {
    console.error('Error updating course:', err.message, err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete a course (instructor only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (course.instructor.toString() !== req.user.id || req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Not authorized to delete this course' });
    }

    // Delete all enrollments associated with this course
    await Enrollment.deleteMany({ course: req.params.id });

    // Delete the course
    await Course.deleteOne({ _id: req.params.id });

    res.json({ message: 'Course and associated enrollments deleted successfully' });
  } catch (err) {
    console.error('Error deleting course:', err.message, err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;