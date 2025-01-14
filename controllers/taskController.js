const taskService = require("../services/taskService");

const createTask = async (req, res) => {
  try {
    // const {  } = req.body;
    task = taskService.createTask(req.body);
    if (task) {
      return res
        .status(200)
        .json({ status: 201, message: "Succesfully Added task" });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Bad Request" });
    }
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
const getTasks = async (req, res) => {
  try {
    const { email } = req.body;
    tasks = await taskService.getTasks();
    if (tasks.length === 0) {
      return res.status(200).json({ status: 200, data: [] });
    } else {
      return res.status(200).json({ status: 200, data: tasks });
    }
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};


module.exports = { getTasks, createTask };
