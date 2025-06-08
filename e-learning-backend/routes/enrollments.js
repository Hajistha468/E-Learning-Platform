// // // const express = require('express');
// // // const router = express.Router();
// // // const Enrollment = require('../models/Enrollment');
// // // const authMiddleware = require('../middleware/auth');

// // // router.post('/', authMiddleware, async (req, res) => {
// // //   const { courseId } = req.body;

// // //   if (!courseId) {
// // //     return res.status(400).json({ message: 'Course ID is required' });
// // //   }

// // //   try {
// // //     const existingEnrollment = await Enrollment.findOne({
// // //       user: req.user.id,
// // //       course: courseId,
// // //     });

// // //     if (existingEnrollment) {
// // //       return res.status(400).json({ message: 'You are already enrolled in this course' });
// // //     }

// // //     const enrollment = new Enrollment({
// // //       user: req.user.id,
// // //       course: courseId,
// // //       progress: 0,
// // //     });

// // //     await enrollment.save();
// // //     console.log('New enrollment created:', enrollment);
// // //     res.status(201).json({ message: 'Successfully enrolled', enrollment });
// // //   } catch (err) {
// // //     console.error('Error creating enrollment:', err.message);
// // //     res.status(500).json({ message: 'Failed to enroll' });
// // //   }
// // // });

// // // router.get('/my-courses', authMiddleware, async (req, res) => {
// // //   try {
// // //     const enrollments = await Enrollment.find({ user: req.user.id })
// // //       .populate('course')
// // //       .populate('user', 'username');
// // //     res.json(enrollments);
// // //   } catch (err) {
// // //     console.error('Error fetching enrollments:', err.message);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // router.put('/:id/progress', authMiddleware, async (req, res) => {
// // //   const { progress } = req.body;
// // //   try {
// // //     const enrollment = await Enrollment.findById(req.params.id);
// // //     if (!enrollment) {
// // //       return res.status(404).json({ message: 'Enrollment not found' });
// // //     }
// // //     if (enrollment.user.toString() !== req.user.id) {
// // //       return res.status(403).json({ message: 'Unauthorized' });
// // //     }
// // //     enrollment.progress = progress;
// // //     await enrollment.save();
// // //     res.json(enrollment);
// // //   } catch (err) {
// // //     console.error('Error updating progress:', err.message);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // router.delete('/:id', authMiddleware, async (req, res) => {
// // //   try {
// // //     const enrollment = await Enrollment.findById(req.params.id);
// // //     if (!enrollment) {
// // //       return res.status(404).json({ message: 'Enrollment not found' });
// // //     }
// // //     if (enrollment.user.toString() !== req.user.id) {
// // //       return res.status(403).json({ message: 'Unauthorized' });
// // //     }
// // //     await Enrollment.deleteOne({ _id: req.params.id });
// // //     res.json({ message: 'Successfully unenrolled' });
// // //   } catch (err) {
// // //     console.error('Error deleting enrollment:', err.message);
// // //     res.status(500).json({ message: 'Failed to unenroll' });
// // //   }
// // // });

// // // module.exports = router;



// // // // const express = require('express');
// // // // const router = express.Router();
// // // // const Enrollment = require('../models/Enrollment');
// // // // const authMiddleware = require('../middleware/auth');

// // // // Enroll in a course
// // // // router.post('/:courseId', authMiddleware, async (req, res) => {
// // // //   const { courseId } = req.params;
// // // //   const userId = req.user.id;

// // // //   try {
// // // //     // Check if user is already enrolled
// // // //     const existingEnrollment = await Enrollment.findOne({ user: userId, course: courseId });
// // // //     if (existingEnrollment) {
// // // //       return res.status(400).json({ message: 'You are already enrolled in this course' });
// // // //     }

// // // //     // Create new enrollment
// // // //     const enrollment = new Enrollment({
// // // //       user: userId,
// // // //       course: courseId,
// // // //       progress: 0,
// // // //       enrolledAt: new Date(),
// // // //     });

// // // //     await enrollment.save();
// // // //     res.status(201).json({ message: 'Enrolled successfully', enrollment });
// // // //   } catch (err) {
// // // //     console.error('Error enrolling in course:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // // Get user's enrollments
// // // // router.get('/my-courses', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const enrollments = await Enrollment.find({ user: req.user.id })
// // // //       .populate({
// // // //         path: 'course',
// // // //         populate: { path: 'instructor', select: 'username' },
// // // //       })
// // // //       .populate('user', 'username email');
// // // //     // Filter out enrollments with null course
// // // //     const validEnrollments = enrollments.filter(enrollment => enrollment.course !== null);
// // // //     res.json(validEnrollments);
// // // //   } catch (err) {
// // // //     console.error('Error fetching enrollments:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // // Unenroll from a course
// // // // router.delete('/:enrollmentId', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const enrollment = await Enrollment.findById(req.params.enrollmentId);
// // // //     if (!enrollment) {
// // // //       return res.status(404).json({ message: 'Enrollment not found' });
// // // //     }
// // // //     if (enrollment.user.toString() !== req.user.id) {
// // // //       return res.status(403).json({ message: 'Not authorized to unenroll' });
// // // //     }
// // // //     await enrollment.deleteOne();
// // // //     res.json({ message: 'Unenrolled successfully' });
// // // //   } catch (err) {
// // // //     console.error('Error unenrolling from course:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // // Update progress for an enrollment
// // // // router.put('/:enrollmentId/progress', authMiddleware, async (req, res) => {
// // // //   const { progress } = req.body;

// // // //   try {
// // // //     const enrollment = await Enrollment.findById(req.params.enrollmentId);
// // // //     if (!enrollment) {
// // // //       return res.status(404).json({ message: 'Enrollment not found' });
// // // //     }
// // // //     if (enrollment.user.toString() !== req.user.id) {
// // // //       return res.status(403).json({ message: 'Not authorized to update progress' });
// // // //     }
// // // //     if (progress < 0 || progress > 100) {
// // // //       return res.status(400).json({ message: 'Progress must be between 0 and 100' });
// // // //     }

// // // //     enrollment.progress = progress;
// // // //     await enrollment.save();
// // // //     res.json({ message: 'Progress updated successfully', enrollment });
// // // //   } catch (err) {
// // // //     console.error('Error updating progress:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // // Get enrolled users for instructor's courses with optional courseId filter
// // // // router.get('/instructor-courses', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const instructorId = req.user.id;
// // // //     const { courseId } = req.query;

// // // //     const query = { instructor: instructorId };
// // // //     if (courseId) {
// // // //       query._id = courseId;
// // // //     }

// // // //     const enrollments = await Enrollment.find()
// // // //       .populate({
// // // //         path: 'course',
// // // //         match: query,
// // // //         populate: { path: 'instructor', select: 'username' },
// // // //       })
// // // //       .populate('user', 'username email');

// // // //     // Filter out enrollments where course is null
// // // //     const validEnrollments = enrollments.filter(enrollment => 
// // // //       enrollment.course && enrollment.course.instructor._id.toString() === instructorId
// // // //     );

// // // //     if (validEnrollments.length === 0) {
// // // //       return res.status(404).json({ message: 'No enrollments found for your courses' });
// // // //     }

// // // //     const enrolledUsers = validEnrollments.map(enrollment => ({
// // // //       courseTitle: enrollment.course.title,
// // // //       user: {
// // // //         username: enrollment.user.username,
// // // //         email: enrollment.user.email,
// // // //       },
// // // //       enrolledAt: enrollment.enrolledAt,
// // // //       progress: enrollment.progress,
// // // //     }));

// // // //     res.json(enrolledUsers);
// // // //   } catch (err) {
// // // //     console.error('Error fetching enrolled users:', err);
// // // //     res.status(500).json({ message: 'Server error' });
// // // //   }
// // // // });

// // // // module.exports = router;

// // const express = require('express');
// // const router = express.Router();
// // const Enrollment = require('../models/Enrollment');
// // const authMiddleware = require('../middleware/auth');

// // // Enroll in a course
// // router.post('/:courseId', authMiddleware, async (req, res) => {
// //   const { courseId } = req.params;
// //   const userId = req.user.id;

// //   try {
// //     // Check if user is already actively enrolled
// //     const existingEnrollment = await Enrollment.findOne({
// //       user: userId,
// //       course: courseId,
// //     });

// //     if (existingEnrollment) {
// //       return res.status(400).json({ message: 'You are already enrolled in this course' });
// //     }

// //     const enrollment = new Enrollment({
// //       user: userId,
// //       course: courseId,
// //     });

// //     await enrollment.save();
// //     res.status(201).json({ message: 'Enrolled successfully', enrollment });
// //   } catch (err) {
// //     console.error('Error enrolling in course:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Get user's enrollments
// // router.get('/my-courses', authMiddleware, async (req, res) => {
// //   try {
// //     const enrollments = await Enrollment.find({ user: req.user.id })
// //       .populate({
// //         path: 'course',
// //         populate: { path: 'instructor', select: 'username' },
// //       })
// //       .populate('user', 'username email');
// //     // Filter out enrollments with null course
// //     const validEnrollments = enrollments.filter(enrollment => enrollment.course !== null);
// //     res.json(validEnrollments);
// //   } catch (err) {
// //     console.error('Error fetching enrollments:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Unenroll from a course
// // router.delete('/:enrollmentId', authMiddleware, async (req, res) => {
// //   try {
// //     const enrollment = await Enrollment.findById(req.params.enrollmentId);
// //     if (!enrollment) {
// //       return res.status(404).json({ message: 'Enrollment not found' });
// //     }
// //     if (enrollment.user.toString() !== req.user.id) {
// //       return res.status(403).json({ message: 'Not authorized to unenroll' });
// //     }
// //     await enrollment.deleteOne();
// //     res.json({ message: 'Unenrolled successfully' });
// //   } catch (err) {
// //     console.error('Error unenrolling from course:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Update progress for an enrollment
// // router.put('/:enrollmentId/progress', authMiddleware, async (req, res) => {
// //   const { progress } = req.body;

// //   try {
// //     const enrollment = await Enrollment.findById(req.params.enrollmentId);
// //     if (!enrollment) {
// //       return res.status(404).json({ message: 'Enrollment not found' });
// //     }
// //     if (enrollment.user.toString() !== req.user.id) {
// //       return res.status(403).json({ message: 'Not authorized to update progress' });
// //     }
// //     if (progress < 0 || progress > 100) {
// //       return res.status(400).json({ message: 'Progress must be between 0 and 100' });
// //     }

// //     enrollment.progress = progress;
// //     await enrollment.save();
// //     res.json({ message: 'Progress updated successfully', enrollment });
// //   } catch (err) {
// //     console.error('Error updating progress:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Get enrolled users for instructor's courses with optional courseId filter
// // router.get('/instructor-courses', authMiddleware, async (req, res) => {
// //   try {
// //     const instructorId = req.user.id;
// //     const { courseId } = req.query;

// //     const query = { instructor: instructorId };
// //     if (courseId) {
// //       query._id = courseId;
// //     }

// //     const enrollments = await Enrollment.find()
// //       .populate({
// //         path: 'course',
// //         match: query,
// //         populate: { path: 'instructor', select: 'username' },
// //       })
// //       .populate('user', 'username email');

// //     // Filter out enrollments where course is null or doesn't match instructor
// //     const validEnrollments = enrollments.filter(enrollment => 
// //       enrollment.course && enrollment.course.instructor._id.toString() === instructorId
// //     );

// //     if (validEnrollments.length === 0) {
// //       return res.json([]);
// //     }

// //     const enrolledUsers = validEnrollments.map(enrollment => ({
// //       courseTitle: enrollment.course.title,
// //       courseId: enrollment.course._id,
// //       user: {
// //         username: enrollment.user.username,
// //         email: enrollment.user.email,
// //       },
// //       enrolledAt: enrollment.enrolledAt,
// //       progress: enrollment.progress,
// //     }));

// //     res.json(enrolledUsers);
// //   } catch (err) {
// //     console.error('Error fetching enrolled users:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });




// // -> worked
// // module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const Enrollment = require('../models/Enrollment');
// // const Course = require('../models/Course');
// // const authMiddleware = require('../middleware/auth');

// // // Enroll in a course
// // router.post('/:courseId', authMiddleware, async (req, res) => {
// //   const { courseId } = req.params;
// //   const userId = req.user.id;

// //   try {
// //     const existingEnrollment = await Enrollment.findOne({
// //       user: userId,
// //       course: courseId,
// //     });

// //     if (existingEnrollment) {
// //       return res.status(400).json({ message: 'You are already enrolled in this course' });
// //     }

// //     const enrollment = new Enrollment({
// //       user: userId,
// //       course: courseId,
// //     });

// //     await enrollment.save();
// //     res.status(201).json({ message: 'Enrolled successfully', enrollment });
// //   } catch (err) {
// //     console.error('Error enrolling in course:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Get user's enrollments
// // router.get('/my-courses', authMiddleware, async (req, res) => {
// //   try {
// //     const enrollments = await Enrollment.find({ user: req.user.id })
// //       .populate({
// //         path: 'course',
// //         populate: {
// //           path: 'instructor',
// //           select: 'username',
// //           model: 'User', // Explicitly specify the model
// //         },
// //       })
// //       .populate('user', 'username email');
// //     const validEnrollments = enrollments.filter(enrollment => 
// //       enrollment.course && enrollment.course.instructor
// //     );
// //     console.log('Valid enrollments:', validEnrollments); // Debug
// //     res.json(validEnrollments);
// //   } catch (err) {
// //     console.error('Error fetching enrollments:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Unenroll from a course
// // router.delete('/:enrollmentId', authMiddleware, async (req, res) => {
// //   try {
// //     const enrollment = await Enrollment.findById(req.params.enrollmentId);
// //     if (!enrollment) {
// //       return res.status(404).json({ message: 'Enrollment not found' });
// //     }
// //     if (enrollment.user.toString() !== req.user.id) {
// //       return res.status(403).json({ message: 'Not authorized to unenroll' });
// //     }
// //     await enrollment.deleteOne();
// //     res.json({ message: 'Unenrolled successfully' });
// //   } catch (err) {
// //     console.error('Error unenrolling from course:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Update progress for an enrollment
// // router.put('/:enrollmentId/progress', authMiddleware, async (req, res) => {
// //   const { progress } = req.body;

// //   try {
// //     const enrollment = await Enrollment.findById(req.params.enrollmentId);
// //     if (!enrollment) {
// //       return res.status(404).json({ message: 'Enrollment not found' });
// //     }
// //     if (enrollment.user.toString() !== req.user.id) {
// //       return res.status(403).json({ message: 'Not authorized to update progress' });
// //     }
// //     if (progress < 0 || progress > 100) {
// //       return res.status(400).json({ message: 'Progress must be between 0 and 100' });
// //     }

// //     enrollment.progress = progress;
// //     await enrollment.save();
// //     res.json({ message: 'Progress updated successfully', enrollment });
// //   } catch (err) {
// //     console.error('Error updating progress:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Get enrolled users for instructor's courses with optional courseId filter
// // router.get('/instructor-courses', authMiddleware, async (req, res) => {
// //   try {
// //     if (req.user.role !== 'instructor') {
// //       return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
// //     }

// //     const instructorId = req.user.id;
// //     const { courseId } = req.query;

// //     const courseQuery = { instructor: instructorId };
// //     if (courseId) {
// //       courseQuery._id = courseId;
// //     }
// //     const instructorCourses = await Course.find(courseQuery);
// //     if (!instructorCourses.length) {
// //       return res.json([]);
// //     }

// //     const enrollments = await Enrollment.find({
// //       course: { $in: instructorCourses.map(course => course._id) },
// //     })
// //       .populate({
// //         path: 'course',
// //         populate: {
// //           path: 'instructor',
// //           select: 'username',
// //           model: 'User',
// //         },
// //       })
// //       .populate('user', 'username email');

// //     console.log('Instructor enrollments:', enrollments);

// //     const validEnrollments = enrollments.filter(enrollment => 
// //       enrollment.course && enrollment.course.instructor
// //     );

// //     if (validEnrollments.length === 0) {
// //       return res.json([]);
// //     }

// //     const enrolledUsers = validEnrollments.map(enrollment => ({
// //       courseTitle: enrollment.course.title,
// //       courseId: enrollment.course._id,
// //       user: {
// //         username: enrollment.user.username,
// //         email: enrollment.user.email,
// //       },
// //       enrolledAt: enrollment.enrolledAt,
// //       progress: enrollment.progress,
// //     }));

// //     res.json(enrolledUsers);
// //   } catch (err) {
// //     console.error('Error fetching instructor enrollments:', err);
// //     res.status(500).json({ message: 'Failed to fetch enrollments' });
// //   }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Enrollment = require('../models/Enrollment');
// const Course = require('../models/Course');
// const authMiddleware = require('../middleware/auth');

// // Log route registration
// console.log('Registering enrollments routes...');

// // Enroll in a course
// router.post('/:courseId', authMiddleware, async (req, res) => {
//   const { courseId } = req.params;
//   const userId = req.user.id;
//   console.log(`Attempting to enroll user ${userId} in course ${courseId}`); // Debug

//   try {
//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     const existingEnrollment = await Enrollment.findOne({
//       user: userId,
//       course: courseId,
//     });

//     if (existingEnrollment) {
//       return res.status(400).json({ message: 'You are already COMPLETED this course' });
//     }

//     const enrollment = new Enrollment({
//       user: userId,
//       course: courseId,
//       progress: 0,
//       enrolledAt: new Date(),
//     });

//     await enrollment.save();
//     console.log(`Enrollment successful for user ${userId} in course ${courseId}`); // Debug
//     res.status(201).json({ message: 'Enrolled successfully', enrollment });
//   } catch (err) {
//     console.error('Error enrolling in course:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Get user's enrollments
// router.get('/my-courses', authMiddleware, async (req, res) => {
//   try {
//     const enrollments = await Enrollment.find({ user: req.user.id })
//       .populate({
//         path: 'course',
//         populate: {
//           path: 'instructor',
//           select: 'username',
//           model: 'User',
//         },
//       })
//       .populate('user', 'username email');
//     const validEnrollments = enrollments.filter(enrollment => 
//       enrollment.course && enrollment.course.instructor
//     );
//     console.log('Valid enrollments for /my-courses:', validEnrollments); // Debug
//     res.json(validEnrollments);
//   } catch (err) {
//     console.error('Error fetching enrollments:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Unenroll from a course
// router.delete('/:enrollmentId', authMiddleware, async (req, res) => {
//   try {
//     const enrollment = await Enrollment.findById(req.params.enrollmentId);
//     if (!enrollment) {
//       return res.status(404).json({ message: 'Enrollment not found' });
//     }
//     if (enrollment.user.toString() !== req.user.id) {
//       return res.status(403).json({ message: 'Not authorized to unenroll' });
//     }
//     await enrollment.deleteOne();
//     res.json({ message: 'Unenrolled successfully' });
//   } catch (err) {
//     console.error('Error unenrolling from course:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Update progress for an enrollment
// router.put('/:enrollmentId/progress', authMiddleware, async (req, res) => {
//   const { progress } = req.body;

//   try {
//     const enrollment = await Enrollment.findById(req.params.enrollmentId);
//     if (!enrollment) {
//       return res.status(404).json({ message: 'Enrollment not found' });
//     }
//     if (enrollment.user.toString() !== req.user.id) {
//       return res.status(403).json({ message: 'Not authorized to update progress' });
//     }
//     if (progress < 0 || progress > 100) {
//       return res.status(400).json({ message: 'Progress must be between 0 and 100' });
//     }

//     enrollment.progress = progress;
//     await enrollment.save();
//     res.json({ message: 'Progress updated successfully', enrollment });
//   } catch (err) {
//     console.error('Error updating progress:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Get enrolled users for instructor's courses with optional courseId filter
// router.get('/instructor-courses', authMiddleware, async (req, res) => {
//   try {
//     console.log('Handling /instructor-courses for user:', req.user.id); // Debug
//     if (req.user.role !== 'instructor') {
//       return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
//     }

//     const instructorId = req.user.id;
//     const { courseId } = req.query;

//     const courseQuery = { instructor: instructorId };
//     if (courseId) {
//       courseQuery._id = courseId;
//     }
//     const instructorCourses = await Course.find(courseQuery);
//     console.log('Instructor courses:', instructorCourses); // Debug
//     if (!instructorCourses.length) {
//       return res.json([]);
//     }

//     const enrollments = await Enrollment.find({
//       course: { $in: instructorCourses.map(course => course._id) },
//     })
//       .populate({
//         path: 'course',
//         populate: {
//           path: 'instructor',
//           select: 'username',
//           model: 'User',
//         },
//       })
//       .populate('user', 'username email');

//     console.log('Instructor enrollments:', enrollments); // Debug

//     const validEnrollments = enrollments.filter(enrollment => 
//       enrollment.course && enrollment.course.instructor
//     );

//     if (validEnrollments.length === 0) {
//       return res.json([]);
//     }

//     const enrolledUsers = validEnrollments.map(enrollment => ({
//       courseTitle: enrollment.course.title,
//       courseId: enrollment.course._id,
//       user: {
//         username: enrollment.user.username,
//         email: enrollment.user.email,
//       },
//       enrolledAt: enrollment.enrolledAt,
//       progress: enrollment.progress,
//     }));

//     res.json(enrolledUsers);
//   } catch (err) {
//     console.error('Error fetching instructor enrollments:', err);
//     res.status(500).json({ message: 'Failed to fetch enrollments' });
//   }
// });

// // Get quiz questions for a course
// router.get('/quiz/:courseId', authMiddleware, async (req, res) => {
//   const { courseId } = req.params;
//   const userId = req.user.id;
//   console.log(`Fetching quiz for course ${courseId} for user ${userId}`); // Debug

//   try {
//     const enrollment = await Enrollment.findOne({ user: userId, course: courseId });
//     if (!enrollment) {
//       return res.status(400).json({ message: 'You are not enrolled in this course' });
//     }
//     if (enrollment.progress >= 100) {
//       return res.status(400).json({ message: 'You have already completed this course' });
//     }

//     const quiz = await Quiz.findOne({ course: courseId });
//     if (!quiz) {
//       return res.status(404).json({ message: 'Quiz not found for this course' });
//     }

//     res.json(quiz.questions);
//   } catch (err) {
//     console.error('Error fetching quiz:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Submit quiz answers and calculate score
// router.post('/quiz/:courseId', authMiddleware, async (req, res) => {
//   const { courseId } = req.params;
//   const userId = req.user.id;
//   const { answers } = req.body; // Array of selected option indices
//   console.log(`Submitting quiz for course ${courseId} by user ${userId}`); // Debug

//   try {
//     const enrollment = await Enrollment.findOne({ user: userId, course: courseId });
//     if (!enrollment) {
//       return res.status(400).json({ message: 'You are not enrolled in this course' });
//     }
//     if (enrollment.progress >= 100) {
//       return res.status(400).json({ message: 'You have already completed this course' });
//     }

//     const quiz = await Quiz.findOne({ course: courseId });
//     if (!quiz) {
//       return res.status(404).json({ message: 'Quiz not found for this course' });
//     }

//     if (!Array.isArray(answers) || answers.length !== quiz.questions.length) {
//       return res.status(400).json({ message: 'Invalid answers format' });
//     }

//     let score = 0;
//     quiz.questions.forEach((question, index) => {
//       if (answers[index] === question.correctAnswer) {
//         score++;
//       }
//     });

//     const percentage = (score / quiz.questions.length) * 100;
//     const averageScore = 50; // Threshold for completion

//     if (percentage > averageScore) {
//       enrollment.progress = 100;
//       await enrollment.save();
//       console.log(`Course ${courseId} marked as completed for user ${userId}`); // Debug
//     }

//     res.json({
//       score,
//       total: quiz.questions.length,
//       percentage,
//       completed: percentage > averageScore,
//       message: percentage > averageScore ? 'Course completed!' : 'Quiz submitted. Try again to complete the course.',
//     });
//   } catch (err) {
//     console.error('Error submitting quiz:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// module.exports = router;


// \\\\\\\\\\\\\

const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const Quiz = require('../models/Quiz'); // Ensure Quiz model is imported
const authMiddleware = require('../middleware/auth');

// Log route registration
console.log('Registering enrollments routes...');

// Enroll in a course
router.post('/', authMiddleware, async (req, res) => {
  const { courseId } = req.body; // Get courseId from body
  const userId = req.user.id;
  console.log(`Attempting to enroll user ${userId} in course ${courseId}`); // Debug

  try {
    if (!courseId) {
      return res.status(400).json({ message: 'Course ID is required' });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const existingEnrollment = await Enrollment.findOne({
      user: userId,
      course: courseId,
    });

    if (existingEnrollment) {
      return res.status(400).json({ message: 'You are already enrolled in this course' });
    }

    const enrollment = new Enrollment({
      user: userId,
      course: courseId,
      progress: 0,
      enrolledAt: new Date(),
    });

    await enrollment.save();
    console.log(`Enrollment successful for user ${userId} in course ${courseId}`); // Debug
    res.status(201).json({ message: 'Enrolled successfully', enrollment });
  } catch (err) {
    console.error('Error enrolling in course:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's enrollments
router.get('/my-courses', authMiddleware, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user.id })
      .populate({
        path: 'course',
        populate: {
          path: 'instructor',
          select: 'username',
          model: 'User',
        },
      })
      .populate('user', 'username email');
    const validEnrollments = enrollments.filter(enrollment => 
      enrollment.course && enrollment.course.instructor
    );
    console.log('Valid enrollments for /my-courses:', validEnrollments); // Debug
    res.json(validEnrollments);
  } catch (err) {
    console.error('Error fetching enrollments:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Unenroll from a course
router.delete('/:enrollmentId', authMiddleware, async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.enrollmentId);
    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    if (enrollment.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to unenroll' });
    }
    await enrollment.deleteOne();
    res.json({ message: 'Unenrolled successfully' });
  } catch (err) {
    console.error('Error unenrolling from course:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update progress for an enrollment
router.put('/:enrollmentId/progress', authMiddleware, async (req, res) => {
  const { progress } = req.body;

  try {
    const enrollment = await Enrollment.findById(req.params.enrollmentId);
    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    if (enrollment.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update progress' });
    }
    if (progress < 0 || progress > 100) {
      return res.status(400).json({ message: 'Progress must be between 0 and 100' });
    }

    enrollment.progress = progress;
    await enrollment.save();
    res.json({ message: 'Progress updated successfully', enrollment });
  } catch (err) {
    console.error('Error updating progress:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get enrolled users for instructor's courses with optional courseId filter
router.get('/instructor-courses', authMiddleware, async (req, res) => {
  try {
    console.log('Handling /instructor-courses for user:', req.user.id); // Debug
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Not authorized. Instructor role required.' });
    }

    const instructorId = req.user.id;
    const { courseId } = req.query;

    const courseQuery = { instructor: instructorId };
    if (courseId) {
      courseQuery._id = courseId;
    }
    const instructorCourses = await Course.find(courseQuery);
    console.log('Instructor courses:', instructorCourses); // Debug
    if (!instructorCourses.length) {
      return res.json([]);
    }

    const enrollments = await Enrollment.find({
      course: { $in: instructorCourses.map(course => course._id) },
    })
      .populate({
        path: 'course',
        populate: {
          path: 'instructor',
          select: 'username',
          model: 'User',
        },
      })
      .populate('user', 'username email');

    console.log('Instructor enrollments:', enrollments); // Debug

    const validEnrollments = enrollments.filter(enrollment => 
      enrollment.course && enrollment.course.instructor
    );

    if (validEnrollments.length === 0) {
      return res.json([]);
    }

    const enrolledUsers = validEnrollments.map(enrollment => ({
      courseTitle: enrollment.course.title,
      courseId: enrollment.course._id,
      user: {
        username: enrollment.user.username,
        email: enrollment.user.email,
      },
      enrolledAt: enrollment.enrolledAt,
      progress: enrollment.progress,
    }));

    res.json(enrolledUsers);
  } catch (err) {
    console.error('Error fetching instructor enrollments:', err);
    res.status(500).json({ message: 'Failed to fetch enrollments' });
  }
});

// Get quiz questions for a course
router.get('/quiz/:courseId', authMiddleware, async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user.id;
  console.log(`Fetching quiz for course ${courseId} for user ${userId}`); // Debug

  try {
    const enrollment = await Enrollment.findOne({ user: userId, course: courseId });
    if (!enrollment) {
      return res.status(400).json({ message: 'You are not enrolled in this course' });
    }
    if (enrollment.progress >= 100) {
      return res.status(400).json({ message: 'You have already completed this course' });
    }

    const quiz = await Quiz.findOne({ course: courseId });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found for this course' });
    }

    res.json(quiz.questions);
  } catch (err) {
    console.error('Error fetching quiz:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit quiz answers and calculate score
router.post('/quiz/:courseId', authMiddleware, async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user.id;
  const { answers } = req.body; // Array of selected option indices
  console.log(`Submitting quiz for course ${courseId} by user ${userId}`); // Debug

  try {
    const enrollment = await Enrollment.findOne({ user: userId, course: courseId });
    if (!enrollment) {
      return res.status(400).json({ message: 'You are not enrolled in this course' });
    }
    if (enrollment.progress >= 100) {
      return res.status(400).json({ message: 'You have already completed this course' });
    }

    const quiz = await Quiz.findOne({ course: courseId });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found for this course' });
    }

    if (!Array.isArray(answers) || answers.length !== quiz.questions.length) {
      return res.status(400).json({ message: 'Invalid answers format' });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });

    const percentage = (score / quiz.questions.length) * 100;
    const averageScore = 50; // Threshold for completion

    if (percentage > averageScore) {
      enrollment.progress = 100;
      await enrollment.save();
      console.log(`Course ${courseId} marked as completed for user ${userId}`); // Debug
    }

    res.json({
      score,
      total: quiz.questions.length,
      percentage,
      completed: percentage > averageScore,
      message: percentage > averageScore ? 'Course completed!' : 'Quiz submitted. Try again to complete the course.',
    });
  } catch (err) {
    console.error('Error submitting quiz:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;