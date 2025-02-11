require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // Configure Email Transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // Your Gmail Address
            pass: process.env.EMAIL_PASS, // App Password from Google
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
