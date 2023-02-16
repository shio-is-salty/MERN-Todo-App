const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model('Todo', todoSchema);
