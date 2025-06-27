const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ✅ Register Route
router.post('/register', async (req, res) => {
    try {
        const { fullname, dob, email, password, gender, domain } = req.body;

        const newUser = new User({ fullname, dob, email, password, gender, domain });
        await newUser.save();

        res.status(201).json({ success: true, message: 'User registered successfully!' });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ success: false, message: 'Error registering user' });
    }
});

// ✅ Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });

        if (user) {
            res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Email or Password is incorrect' });
        }
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ success: false, message: 'Server error during login' });
    }
});

module.exports = router;
