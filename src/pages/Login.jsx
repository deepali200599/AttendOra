import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  const [formData, setFormData] = useState({
    emailOrId: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.emailOrId || !formData.password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrId: formData.emailOrId,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

    const userRole = data.user.role.toLowerCase();

    if (userRole !== role) {
      alert(
        `This account is registered as ${data.user.role}, not ${role}.`
      );
      return;
    }

    localStorage.setItem(
      "attendoraUser",
      JSON.stringify(data.user)
    );

    alert("Login successful!");

    if (userRole === "student") {
      navigate("/student-dashboard");
    } else if (userRole === "teacher") {
      navigate("/teacher-dashboard");
    } else if (userRole === "admin") {
      navigate("/admin-dashboard");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Unable to connect to server. Please try again.");
  }
};

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <Link to="/" className="login-logo">
          <span>●</span> Attendora
        </Link>

        <div className="login-left-content">

          <p className="login-small-title">
            SMART ATTENDANCE SYSTEM
          </p>

          <h1>
            Welcome back to<span> Attendora.</span>
          </h1>

          <p className="login-description">
            Manage attendance, monitor monthly progress,
            and access important records — all in one place.
          </p>

          <div className="login-points">

            <div className="login-point">
              <span>✓</span>
              <p>Role-based access for Students, Teachers & Admins</p>
            </div>

            <div className="login-point">
              <span>✓</span>
              <p>Smart monthly attendance management</p>
            </div>

            <div className="login-point">
              <span>✓</span>
              <p>Digital certificate management</p>
            </div>

          </div>

        </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-card">

          {/* MOBILE LOGO */}
          <div className="login-mobile-logo">
            <Link to="/">
              <span>●</span> Attendora
            </Link>
          </div>


          {/* HEADING */}
          <div className="login-heading">

            <p>ATTENDORA PORTAL</p>

            <h2>Welcome Back</h2>

            <span>
              Select your role and login to continue.
            </span>

          </div>


          {/* ROLE SELECTOR */}
          <div className="role-selector">

            <button
              type="button"
              className={`role-option ${
                role === "student" ? "active" : ""
              }`}
              onClick={() => setRole("student")}
            >
              <span className="role-icon">🎓</span>
              <span>
                <strong>Student</strong>
                <small>Student Portal</small>
              </span>
            </button>


            <button
              type="button"
              className={`role-option ${
                role === "teacher" ? "active" : ""
              }`}
              onClick={() => setRole("teacher")}
            >
              <span className="role-icon">👨‍🏫</span>
              <span>
                <strong>Teacher</strong>
                <small>Teacher Portal</small>
              </span>
            </button>


            <button
              type="button"
              className={`role-option ${
                role === "admin" ? "active" : ""
              }`}
              onClick={() => setRole("admin")}
            >
              <span className="role-icon">⚙</span>
              <span>
                <strong>Admin</strong>
                <small>Admin Portal</small>
              </span>
            </button>

          </div>


          {/* SELECTED ROLE */}
          <div className="selected-role">
            Login as{" "}
            <strong>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </strong>
          </div>


          {/* LOGIN FORM */}
          <form onSubmit={handleSubmit}>

            <div className="login-form-group">

              <label>
                {role === "student"
                  ? "Email or Student ID"
                  : role === "teacher"
                  ? "Email or Teacher ID"
                  : "Email or Admin ID"}
              </label>

              <input
                type="text"
                name="emailOrId"
                placeholder={
                  role === "student"
                    ? "Enter email or student ID"
                    : role === "teacher"
                    ? "Enter email or teacher ID"
                    : "Enter email or admin ID"
                }
                value={formData.emailOrId}
                onChange={handleChange}
              />

            </div>


            <div className="login-form-group">

              <div className="login-password-row">

                <label>Password</label>

                <button
                  type="button"
                  className="login-forgot"
                  onClick={() =>
                    alert(
                      "Password reset feature will be available soon."
                    )
                  }
                >
                  Forgot Password?
                </button>

              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>


            <button
              type="submit"
              className="login-button"
            >
              Login as{" "}
              {role.charAt(0).toUpperCase() + role.slice(1)}

              <span>→</span>
            </button>

          </form>


          {/* STUDENT REGISTER */}
          {role === "student" && (
            <div className="login-switch">
              Don't have a student account?

              <Link to="/register">
                Create Student Account
              </Link>
            </div>
          )}


          {/* TEACHER INFO */}
          {role === "teacher" && (
            <div className="login-info">
              Teacher accounts are created and managed
              by the Admin.
            </div>
          )}


          {/* ADMIN INFO */}
          {role === "admin" && (
            <div className="login-info">
              Admin access is restricted to authorized
              administrators.
            </div>
          )}


          {/* BACK HOME */}
          <Link
            to="/"
            className="login-back-home"
          >
            ← Back to Home
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Login;