// const express = require('express');
//    const mongoose = require('mongoose');
//    const cors = require('cors');
//    const authRoutes = require('./routes/auth');
//    const courseRoutes = require('./routes/courses');
//    const enrollmentRoutes = require('./routes/enrollments');

//    const app = express();

//    app.use(cors());
//    app.use(express.json());

//    mongoose.connect('mongodb://localhost:27017/elearning')
//      .then(() => console.log('MongoDB connected'))
//      .catch(err => console.error('MongoDB connection error:', err));

//    app.use('/api/auth', authRoutes);
//    app.use('/api/courses', courseRoutes);
//    app.use('/api/enrollments', enrollmentRoutes);

//    app.get('/', (req, res) => {
//      res.send('E-learning platform server is running');
//    });

//    const PORT = process.env.PORT || 5000;
//    app.listen(PORT, () => {
//      console.log(`Server running on port ${PORT}`);
//    });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const enrollmentRoutes = require('./routes/enrollments');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Log all incoming requests for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('E-learning platform server is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/elearning', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if MongoDB fails to connect
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});