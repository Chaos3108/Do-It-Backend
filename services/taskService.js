const Task = require("../schema/taskSchema");
const utils = require("../utils/utils");
const getTasks = async () => {
    console.log("helooo")
  try {
    const tasks = await Task.find();
    console.log(tasks, "helloo");
    return tasks;
  } catch (error) {
    throw Error("Error in Fething Users");
  }
};

const createTask = async (body) => {
  try {
    const { task_title, description, category } = body;
    const newtask = new Task({ task_title, description, category });
    newtask.save();
    return newtask;
  } catch (error) {
    console.log(error);
  }
};

// const userLogin = async (email, password) => {
//   try {
//     const existingUser = await User.findOne({ email });

//     if (!existingUser) {
//       throw Error("not an existing user");
//     }

//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       existingUser.password
//     );
//     if (!isPasswordCorrect) {
//       throw Error("Invalid Password");
//     }
//     const access_token = await utils.generateAccessToken(existingUser);
//     const refresh_token = await utils.generateRefreshToken(existingUser);
//     return { access_token, refresh_token, existingUser };
//   } catch (error) {
//     throw Error(error.message);
//   }
// };

module.exports = { getTasks, createTask };
