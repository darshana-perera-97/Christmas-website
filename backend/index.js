const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Store data in a local JSON file
app.post("/api/submit-data", (req, res) => {
  const { firstName, lastName, email } = req.body;

  const data = {
    firstName,
    lastName,
    email,
    submittedAt: new Date().toISOString(),
  };

  // Append data to a JSON file
  fs.readFile("data.json", (err, fileData) => {
    let jsonData = [];
    if (!err && fileData.length) {
      jsonData = JSON.parse(fileData);
    }
    jsonData.push(data);
    fs.writeFile("data.json", JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).send("Error storing data.");
      }

      // Send email
      sendEmail(email, firstName);

      res.status(200).send("Data submitted successfully!");
    });
  });
});

// Send email using nodemailer
const sendEmail = (email, firstName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service provider
    auth: {
      user: "ds.perera.test@gmail.com", // Replace with your email
      pass: "ycfdgqfhinumrzjx", // Replace with your email password
    },
  });

  const mailOptions = {
    from: "ds.perera.test@gmail.com", // Sender address
    to: email, // Recipient address
    subject: "Merry Christmas!", // Subject line
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
    </div>`, // HTML content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
};

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
