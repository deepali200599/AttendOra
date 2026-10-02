const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    studentId: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },

    course: {
      type: String,
    },

    semester: {
      type: String,
    },

    section: {
      type: String,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["ADMIN", "TEACHER", "STUDENT"],
      default: "STUDENT",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;