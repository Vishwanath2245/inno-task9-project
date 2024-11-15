require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = process.env || 3000;
app.use(express.json());

mongoose.connect ((mongodb+srv://vishee:<db_Vishee@1234>@cluster0.9qw9r.mongodb.net/?retryWrites=true, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
      console.error('Could not connect to MongoDB', err);
      process.exit(1);
    });
  
  mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
  });

app.use('/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
