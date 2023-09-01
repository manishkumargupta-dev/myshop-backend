import asyncHandler from "./../middlewares/asyncHandler.js";

const loginUser = asyncHandler(async (req, res) => {
  res.send("loginUser");
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
