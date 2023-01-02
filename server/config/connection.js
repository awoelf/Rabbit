const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://curriculum-admin:Mtmddnjs%400712@cluster0.umgm8xe.mongodb.net/rabbit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
