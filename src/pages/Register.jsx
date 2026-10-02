import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    course: "",
    semester: "",
    section: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          studentId: formData.studentId,
          course: formData.course,
          semester: formData.semester,
          section: formData.section,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Registration successful!");
    navigate("/login");
  } catch (error) {
    console.error("Registration error:", error);
    alert("Unable to connect to server. Please try again.");
  }
};

  return (
    <div className="auth-page">
      <div className="auth-left">
        <Link to="/" className="auth-logo">
          <span>●</span> Attendora
        </Link>

        <div className="auth-left-content">
          <p className="auth-small-title">SMART ATTENDANCE SYSTEM</p>

          <h1>
            Start your journey with
            <span> Attendora.</span>
          </h1>

          <p>
            Create your student account and keep track of your attendance,
            monthly progress, and digital certificates in one place.
          </p>

          <div className="auth-points">
            <div>
              <span>✓</span>
              Smart monthly attendance tracking
            </div>

            <div>
              <span>✓</span>
              Automatic 100% attendance eligibility
            </div>

            <div>
              <span>✓</span>
              Digital certificate management
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card register-card">
          <div className="mobile-logo">
            <Link to="/">
              <span>●</span> Attendora
            </Link>
          </div>

          <div className="auth-heading">
            <p>STUDENT REGISTRATION</p>
            <h2>Create your account</h2>
            <span>Join Attendora and manage your attendance easily.</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  placeholder="Enter student ID"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select course</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Semester</label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select semester</option>
                  <option value="1st">1st Semester</option>
                  <option value="2nd">2nd Semester</option>
                  <option value="3rd">3rd Semester</option>
                  <option value="4th">4th Semester</option>
                  <option value="5th">5th Semester</option>
                  <option value="6th">6th Semester</option>
                  <option value="7th">7th Semester</option>
                  <option value="8th">8th Semester</option>
                </select>
              </div>

              <div className="form-group">
                <label>Section</label>
                <input
                  type="text"
                  name="section"
                  placeholder="e.g. A"
                  value={formData.section}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="terms">
              <input type="checkbox" required />
              <span>
                I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </div>

            <button type="submit" className="auth-button">
              Create Student Account
              <span>→</span>
            </button>
          </form>

          <div className="auth-switch">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;