const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const User = require('./models/user');

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB with Mongoose
mongoose.connect('mongodb+srv://blue-dev:CGRfO1KFRUhY4oDi@sendwhenicant-dev.btlg11n.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.get('/api/get/index/:index', (req, res) => {
  // return the user at index
  User.findOne({}).skip(req.params.index).exec()
    .then(user => {
      res.json(user)})
    .catch(err => console.error(err));
});

app.get('/api/get/all', async (req, res) => {
  // return all users
  await User.find({}).exec().then(users => {
    res.json(users)})
    .catch(err => console.error(err));
});

app.get('/api/get/id/:id', async (req, res) => {
  // return the user with id
  await User.findById(req.params.id).exec()
    .then(user => {
      res.json(user)})
    .catch(err => console.error(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
