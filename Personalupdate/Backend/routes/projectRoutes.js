const express = require('express');
const router = express.Router();
const ProjectSubmission = require('../models/ProjectSubmission');
const nodemailer = require('nodemailer');

// 📧 Email config
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gautamankush34@gmail.com',
        pass: 'icaqaakxobrtopzq' // 🛑 Use Gmail App Password, not your real password
    }
});

// 📝 POST: Receive and Save Project + Email
router.post('/submit', async (req, res) => {
    const { fullname, email, projectName, technology, message } = req.body;

    try {
        const newSubmission = new ProjectSubmission({
            fullname,
            email,
            projectName,
            technology,
            message
        });

        await newSubmission.save();

        // 📧 Send Email to You
        const mailOptions = {
            from: 'gautamankush34@gmail.com', // ✅ Same as auth.user
            to: 'sagarankush8224@gmail.com', 
            subject: `New Project Submitted by ${fullname}`,
            text: `
                Name: ${fullname}
                Email: ${email}
                Project: ${projectName}
                Tech: ${technology}
                Note: ${message}
            `
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Email error:', err);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).json({ success: true, message: "Submission saved and email sent!" });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
});

module.exports = router;
