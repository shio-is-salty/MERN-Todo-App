
const express = require('express');
const {
  getAllTodo,
  getTodo,
  postTodo,
  deleteTodo,
  patchTodo,
} =  require('../controllers/TodoControllers')

const router = express.Router();

// GET all todos
router.get('/', getAllTodo);

// GET a single todo
router.get('/:id', getTodo);

// POST a todo
router.post('/', postTodo);

// delete a todo
router.delete('/:id', deleteTodo);

// update a todo
router.patch('/:id', patchTodo);

module.exports = router;
