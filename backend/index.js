const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

// Middleware to handle JSON data
app.use(express.json());
app.use(cors()); // Allow requests from any origin (for development purposes)

// Nodemailer transport setup (using Gmail SMTP for this example)
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like 'smtp.mailtrap.io', etc.
  auth: {
    user: "ds.perera.test@gmail.com", // Replace with your email
    pass: "ycfdgqfhinumrzjx", // Replace with your email password or use app-specific password
  },
});

// POST endpoint to receive data from the frontend and send an email
app.post("/api/submit-data", (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create email options
  const mailOptions = {
    from: "your-email@gmail.com", // Sender's email
    to: email, // Recipient email (from the form)
    subject: "Christmas Wish Submission",
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #f44336; color: #fff; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">🎄 Merry Christmas! 🎁</h1>
      </div>
      <div style="padding: 20px;">
        <h2 style="color: #f44336; font-size: 20px;">Hi ${firstName},</h2>
        <p style="font-size: 16px;">Wishing you a Merry Christmas and a Happy New Year! May this festive season bring joy, love, and happiness to you and your loved ones.</p>
        <p style="font-size: 16px;">Thank you for being part of our journey. We look forward to an amazing year ahead with you!</p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="http://69.197.187.24:3000/" style="text-decoration: none; background-color: #f44336; color: #fff; padding: 10px 20px; border-radius: 5px; font-size: 16px;">Explore More</a>
        </div>
        <p style="font-size: 14px; color: #666;">If you have any questions, feel free to contact us anytime. We're here to help!</p>
      </div>
      <div style="background-color: #f9f9f9; color: #666; text-align: center; padding: 10px; font-size: 12px; border-top: 1px solid #ddd;">
        &copy; ${new Date().getFullYear()} D&D Creations. All rights reserved.
      </div>
    </div>`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send email" });
    }

    console.log("Email sent:", info.response);
    return res
      .status(200)
      .json({ message: "Data received and email sent successfully!" });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
