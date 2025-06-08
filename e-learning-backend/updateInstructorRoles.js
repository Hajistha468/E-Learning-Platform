const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/elearning')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const updateRoles = async () => {
  const instructorEmails = ['john@example.com','pappyjuhe@gmail.com']; // Add more emails as needed
  for (const email of instructorEmails) {
    try {
      await User.updateOne({ email }, { $set: { role: 'instructor' } });
      console.log(`Updated role to instructor for ${email}`);
    } catch (err) {
      console.error(`Error updating ${email}:`, err);
    }
  }
  mongoose.connection.close();
};

updateRoles();