const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("Users not availabe");
    res.json(users);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

//ROUTES FOR LOGIN AND AUTH

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: token,
      });
    } else {
      res.status(400).json({ error: "Invalid Email or Password." });
    }
  } else {
    res.status(400).json({ error: "User does not exist." });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password, pic } = req.body;

  const validate = await User.findOne({ email: email });

  if (validate) {
    return res.status(400).json({ error: "This Email already exist." });
  }

  if (!email) {
    return res.status(400).json({ error: "Email address is required." });
  }

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Password must be at least 8 characters long." });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hash, pic });

  res.json(user);
});

//END OF LOGIN AND AUTH

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8001;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
