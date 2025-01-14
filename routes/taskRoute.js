const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.post("/task", taskController.createTask);
router.get("/task", taskController.getTasks);
// router.post("/login", userController.loginUser);

module.exports = router;
