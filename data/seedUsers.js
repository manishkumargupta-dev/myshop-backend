import dotenv from "dotenv";
import users from "./users.js";
import User from "../models/userModel.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const seedUsers = async () => {
  try {
    await User.insertMany(users);
    console.log("Data Seeded!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

seedUsers();
