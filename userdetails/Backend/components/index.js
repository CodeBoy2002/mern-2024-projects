import User from "../models/model.js";
import mongoose from "mongoose";

const getUsers = async (req, res) => {
  try {
    const getUsers = await User.find({});
    return res.status(200).json({ count: getUsers.length, data: getUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const singleUser = await User.findById(id)

    if(!singleUser) return res.status(400).json({ message: "User not found" })

    return res.status(200).json({ message: "User found", data: singleUser })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createUsers = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.age ||
      !req.body.phone ||
      !req.body.email ||
      !req.body.country
    ) {
      return res
        .status(400)
        .json({ message: "Please enter all the required fields" });
    }

    const newUser = {
      name: req.body.name,
      age: req.body.age,
      phone: req.body.phone,
      email: req.body.email,
      country: req.body.country,
    };

    const userCreated = await User.create(newUser);

    return res
      .status(200)
      .json({ message: "User created successfully", data: userCreated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findByIdAndDelete(id) 
    if(!user) return res.status(400).json({ message: `User with id ${id} is not found` })

    return res.status(200).json({ message: `user with id ${id} is deleted successfully` })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    
    const user = await User.findByIdAndUpdate(id, req.body)
    
    if(!user) return res.status(400).json({ message: `User with id: ${id} not found` })

    return res.status(200).json({ message: "User updated successfully", data: user })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUsers, createUsers, getUser, deleteUser, updateUser };
