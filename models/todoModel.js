const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
   title: String,
   description: String,
   time: Date,
   isCompleted:Boolean
}) 

const todoModel = mongoose.model('todos',todoSchema);

module.exports = todoModel;