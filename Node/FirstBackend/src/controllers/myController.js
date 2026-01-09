import { json } from "express";
import User from "../models/userModel.js";

export const UserRegister = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      res.status(400).json({ message: "All feilds Required" });
      return;
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });

    console.log(newUser);
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All feilds Required" });
      return;
    }

    const existingUser = await User.find({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isVarified = existingUser.password === existingUser.password;
    if (!isVarified) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }

    console.log(existingUser);
    res.status(200).json({ message: "Login Successfully", data: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const UserLogout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
