import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "./../controllers/userControllers.js";

const router = express.Router();

// open routes

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.post("/register", registerUser);

// all users routes

router.route("/profile").get(getUserProfile).put(updateUserProfile);

// admin user routes

router.get("/", getUsers);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
