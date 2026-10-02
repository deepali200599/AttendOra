const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// ===============================
// REGISTER
// ===============================
router.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      email,
      studentId,
      course,
      semester,
      section,
      password,
    } = req.body;

    // Check required fields
    if (
      !fullName ||
      !email ||
      !studentId ||
      !course ||
      !semester ||
      !section ||
      !password
    ) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    // Password length
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    // Check email
    const existingEmail = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Check student ID
    const existingStudent = await User.findOne({
      studentId: studentId.trim(),
    });

    if (existingStudent) {
      return res.status(400).json({
        message: "Student ID already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create student
    const user = await User.create({
      name: fullName.trim(),
      email: email.toLowerCase(),
      studentId: studentId.trim(),
      course,
      semester,
      section: section.trim(),
      password: hashedPassword,
      role: "STUDENT",
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        studentId: user.studentId,
        course: user.course,
        semester: user.semester,
        section: user.section,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);

    res.status(500).json({
      message: "Registration failed",
    });
  }
});
// ===============================
// LOGIN
// ===============================
router.post("/login", async (req, res) => {
  try {
    const { emailOrId, password } = req.body;

    if (!emailOrId || !password) {
      return res.status(400).json({
        message: "Email/Student ID and password are required",
      });
    }

    const loginValue = emailOrId.trim().toLowerCase();

    // Find user by email OR student ID
    const user = await User.findOne({
      $or: [
        { email: loginValue },
        { studentId: emailOrId.trim() },
      ],
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email/ID or password",
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email/ID or password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        studentId: user.studentId,
        course: user.course,
        semester: user.semester,
        section: user.section,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    res.status(500).json({
      message: "Login failed",
    });
  }
});

module.exports = router;