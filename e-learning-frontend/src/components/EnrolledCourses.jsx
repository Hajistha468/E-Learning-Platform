const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  const { courseId } = req.body;

  try {
    // Check if user is already enrolled
    const existingEnrollment = await Enrollment.findOne({
      user: req.user.id,
      course: courseId,
    });

    if (existingEnrollment) {
      return res.status(400).json({ message: 'You are already enrolled in this course' });
    }

    // Create new enrollment
    const enrollment = new Enrollment({
      user: req.user.id,
      course: courseId,
      progress: 0,
    });

    await enrollment.save();
    console.log('New enrollment created:', enrollment);
    res.status(201).json({ message: 'Successfully enrolled', enrollment });
  } catch (err) {
    console.error('Error creating enrollment:', err);
    res.status(500).json({ message: 'Enrollment failed' });
  }
});

router.get('/my-courses', authMiddleware, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user.id })
      .populate('course')
      .populate('user', 'username');
    res.json(enrollments);
  } catch (err) {
    console.error('Error fetching enrollments:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id/progress', authMiddleware, async (req, res) => {
  const { progress } = req.body;
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    if (enrollment.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    enrollment.progress = progress;
    await enrollment.save();
    res.json(enrollment);
  } catch (err) {
    console.error('Error updating progress:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;