const express = require("express");
const Attendance = require("../models/Attendance");
const User = require("../models/User");

const router = express.Router();

// ===============================
// MARK ATTENDANCE
// ===============================
router.post("/mark", async (req, res) => {
  try {
    const { studentId, date, status, markedBy } = req.body;

    if (!studentId || !date || !status) {
      return res.status(400).json({
        message: "Student ID, date and status are required",
      });
    }

    const student = await User.findOne({
      studentId: studentId.trim(),
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    const attendanceDate = new Date(date);

    const existingAttendance = await Attendance.findOne({
      student: student._id,
      date: attendanceDate,
    });

    if (existingAttendance) {
      existingAttendance.status = status.toUpperCase();
      existingAttendance.markedBy = markedBy || undefined;

      await existingAttendance.save();

      return res.status(200).json({
        message: "Attendance updated successfully",
        attendance: existingAttendance,
      });
    }

    const attendance = await Attendance.create({
      student: student._id,
      date: attendanceDate,
      status: status.toUpperCase(),
      markedBy: markedBy || undefined,
    });

    res.status(201).json({
      message: "Attendance marked successfully",
      attendance,
    });
  } catch (error) {
    console.error("Attendance Error:", error);

    res.status(500).json({
      message: "Failed to mark attendance",
    });
  }
});


// ===============================
// GET STUDENT ATTENDANCE
// ===============================
router.get("/student/:studentId", async (req, res) => {
  try {
    const student = await User.findOne({
      studentId: req.params.studentId,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    const attendance = await Attendance.find({
      student: student._id,
    }).sort({ date: -1 });

    res.status(200).json({
      student: {
        name: student.name,
        studentId: student.studentId,
        course: student.course,
        semester: student.semester,
        section: student.section,
      },
      attendance,
    });
  } catch (error) {
    console.error("Attendance Fetch Error:", error);

    res.status(500).json({
      message: "Failed to fetch attendance",
    });
  }
});

module.exports = router;