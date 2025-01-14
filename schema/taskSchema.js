const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task_title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});
const Task = new mongoose.model("Task", taskSchema);
module.exports =  Task ;
