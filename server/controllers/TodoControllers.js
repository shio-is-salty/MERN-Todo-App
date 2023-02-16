const mongoose = require('mongoose');
const Todo = require('../model/TodoModel');

const getAllTodo = async (req, res) => {
  const todo = await Todo.find({}).sort({createdAt: -1});
  res.status(200).json(todo);
}

const getTodo = async (req, res) => {
  const {id} = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such todo'});
  }

  const todo = await Todo.findById(id);

  if(!todo){
    return res.status(404).json({error: 'No such todo'});
  }

  res.status(200).json(todo);
}

const postTodo = async (req, res) => {
  const { todo, isDone } = req.body;

  // Add to db

  try{
    const addTodo = await Todo.create({todo, isDone});
    res.status(200).json(addTodo);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

const deleteTodo = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such todo'});
  }

  const todo = await Todo.findOneAndDelete({_id: id});

  if(!todo){
    return res.status(404).json({error: 'No such todo'});
  }

  res.status(200).json(todo);
}

const patchTodo = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such todo'});
  }

  const todo = await Todo.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if(!todo){
    return res.status(404).json({error: 'No such todo'});
  }

  res.status(200).json(todo);
}

module.exports = {
  getAllTodo,
  getTodo,
  postTodo,
  deleteTodo,
  patchTodo,
}
