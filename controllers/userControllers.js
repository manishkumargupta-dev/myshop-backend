import asyncHandler from "./../middlewares/asyncHandler.js";
import User from "./../models/userModel.js";
import bcrypt from "bcryptjs";
import AppError from "../helpers/AppError.js";
import jwt from "jsonwebtoken";

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    throw new AppError(401, "Invalid email or password");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.send("logoutUser");
});

const registerUser = asyncHandler(async (req, res) => {
  res.send("registerUser");
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("getUserProfile");
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("updateUserProfile");
});

const getUsers = asyncHandler(async (req, res) => {
  res.send("getUsers");
});

const getUser = asyncHandler(async (req, res) => {
  res.send("getUser");
});

const updateUser = asyncHandler(async (req, res) => {
  res.send("updateUser");
});

const deleteUser = asyncHandler(async (req, res) => {
  res.send("deleteUser");
});

export {
  loginUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
