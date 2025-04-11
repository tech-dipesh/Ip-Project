import express from "express";
import User from "./model.js";

const router = express.Router();

router.get('/login', (req, res) => {
  res.json({ message: 'Login route is working' });
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/signup', (req, res) => {
  res.json({ message: 'Signup route is working' });
});

router.post('/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const newUser = new User({ fullName, email, password });
    await newUser.save();

    res.json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
