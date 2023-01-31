const user = require("../model/user");
const User = require("../model/user");
exports.home = (req, res) => {
  res.send("Hello This is Home Routes");
};

exports.fetchUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    /*Cheack weather there or not */

    if (!name || !email) {
      throw new Error("Both field are required");
    }
    /*check if already or not */
    const exitOrNot = await User.findOne({ email });
    if (exitOrNot) {
      throw new Error("User Already exits");
    }
    /*inserting into a DB */
    const user = await User.create({ name, email });

    res.status(201).json({
      success: true,
      message: "User Created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: Error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const nUser = await User.find();
    res.status(200).json({
      success: true,
      message: "all user successfully add",
      nUser,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
exports.editUser = async (req, res) => {
  try {
    const nUsers = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "user update Succesfully",
    });
  } catch (Error) {
    console.log(Error);
    res.status(401).json({
      success: false,
      message: Error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteOne = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "user successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
