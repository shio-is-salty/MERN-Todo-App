require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/Todo');

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.body);
  next();
});

// Routes
app.use('/api/todos', todoRoutes);

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>{
      console.log('Connected to DB');
      console.log(`Connected to port: ${process.env.PORT}`);
    });
  })

  .catch((error) => {
    console.log(error);
  })

