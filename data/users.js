import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ram Singh",
    email: "ram@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sam Cruise",
    email: "sam@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
