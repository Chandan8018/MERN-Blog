import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    //return res.status(400).json({ massage: "All fileds are required" });
    next(errorHandler(400, "All fileds are required"))
  }
  
  // create uniqe password 
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    const response = await newUser.save();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
