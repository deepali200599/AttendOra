import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./index.css";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import MyAttendance from "./pages/MyAttendance";
import MonthlyProgress from "./pages/MonthlyProgress";
import Certificate from "./pages/Certificate";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
function Home() {
  const features = [
    {
      icon: "📅",
      title: "Smart Attendance",
      text: "Track attendance easily with class-wise and subject-wise records."
    },
    {
      icon: "🌴",
      title: "Holiday Management",
      text: "Sundays and declared holidays are automatically excluded."
    },
    {
      icon: "🏆",
      title: "100% Certificate",
      text: "Get your monthly 100% attendance certificate automatically."
    },
    {
      icon: "▣",
      title: "QR Verification",
      text: "Verify certificates using a unique ID and QR code."
    },
    {
      icon: "👥",
      title: "Role Based Access",
      text: "Separate dashboards for Admin, Teachers and Students."
    }
  ];

  const steps = [
    {
      number: "01",
      icon: "📅",
      title: "Mark Attendance",
      text: "Teachers mark daily attendance for their assigned classes."
    },
    {
      number: "02",
      icon: "🧮",
      title: "System Calculates",
      text: "The system calculates monthly attendance excluding holidays."
    },
    {
      number: "03",
      icon: "🏆",
      title: "100% Eligibility",
      text: "Students achieving 100% become eligible for a certificate."
    },
    {
      number: "04",
      icon: "↓",
      title: "Download & Verify",
      text: "Download the certificate and verify it using QR or ID."
    }
  ];

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <div className="logo-mark">
              <span>◆</span>
            </div>

            <div>
              <h2>Attendora</h2>
              <p>Attendance • Certificate • Success</p>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">

            {/* LOGIN */}
            <Link to="/login" className="login-btn">
              Login
            </Link>

            {/* GET STARTED → REGISTER */}
            <Link to="/register" className="primary-btn small-btn">
              Get Started <span>→</span>
            </Link>

          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>
        <section className="hero" id="home">

          <div className="hero-background-shape shape-one"></div>
          <div className="hero-background-shape shape-two"></div>

          <div className="container hero-container">

            <div className="hero-content">

              <div className="hero-badge">
                <span>✦</span>
                Smart Attendance
                <b>•</b>
                100% Certificate
                <b>•</b>
                Real Recognition
              </div>

              <h1>
                Your Attendance
                <br />
                Matters. We Make It
                <br />
                <span>Count.</span>
              </h1>

              <p className="hero-description">
                Attendora is a smart attendance management system that
                tracks your monthly attendance, excludes holidays & Sundays,
                and automatically generates a 100% attendance certificate
                when you achieve your goal.
              </p>

              <div className="hero-buttons">

                {/* GET STARTED → REGISTER */}
                <Link to="/register" className="primary-btn">
                  Get Started <span>→</span>
                </Link>

                <button className="outline-btn">
                  Learn More
                </button>

              </div>

              <div className="hero-trust">
                <div>
                  <strong>100%</strong>
                  <span>Accurate</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Access</span>
                </div>

                <div>
                  <strong>QR</strong>
                  <span>Verified</span>
                </div>
              </div>

            </div>

            {/* HERO VISUAL */}
            <div className="hero-visual">

              <div className="decor-leaf leaf-one">🌿</div>
              <div className="decor-leaf leaf-two">🌿</div>

              {/* Attendance Card */}
              <div className="attendance-card glass-card">

                <div className="card-title">
                  <span>Monthly Attendance</span>
                  <span className="check">✓</span>
                </div>

                <div className="attendance-content">

                  <div className="progress-circle">
                    <div>
                      <strong>100%</strong>
                      <small>Perfect</small>
                    </div>
                  </div>

                  <div className="attendance-list">

                    <p>
                      <span>✓</span>
                      Present
                    </p>

                    <p>
                      <span>✓</span>
                      Working Days
                    </p>

                    <p>
                      <span>✓</span>
                      No Holidays
                    </p>

                  </div>

                </div>
              </div>

              {/* Student Image */}
              <div className="student-image">
                <div className="student-placeholder">
                  <div className="student-head"></div>
                  <div className="student-body"></div>
                  <div className="student-book">📚</div>
                </div>
              </div>

              {/* Feature Mini Card */}
              <div className="mini-feature-card">

                <div className="mini-feature">
                  <span className="green-icon">▣</span>
                  <p>Mark Attendance</p>
                </div>

                <div className="mini-feature">
                  <span className="purple-icon">▥</span>
                  <p>View Reports</p>
                </div>

                <div className="mini-feature">
                  <span className="gold-icon">▤</span>
                  <p>Get Certificate</p>
                </div>

              </div>

              {/* Certificate */}
              <div className="certificate-card">

                <div className="certificate-border">

                  <div className="certificate-icon">
                    🏆
                  </div>

                  <div className="certificate-small-title">
                    CERTIFICATE
                  </div>

                  <div className="certificate-main-title">
                    OF 100% MONTHLY
                    <br />
                    ATTENDANCE
                  </div>

                  <div className="certificate-line"></div>

                  <p>Awarded to</p>

                  <h3>Deepali Shukla</h3>

                  <p className="certificate-text">
                    For achieving 100% attendance during
                    <br />
                    September 2026.
                  </p>

                  <div className="certificate-bottom">

                    <div>
                      <small>Certificate ID</small>
                      <strong>ATT-2026-09-0001</strong>
                    </div>

                    <div className="fake-qr">
                      ▦
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="hero-wave"></div>

        </section>

        {/* ================= ABOUT ================= */}
        <section className="about-section" id="about">

          <div className="container about-container">

            <div className="about-image">

              <div className="about-dashboard">

                <div className="dashboard-top">
                  <span>Monthly Overview</span>
                  <span>September 2026</span>
                </div>

                <div className="dashboard-number">
                  <strong>100%</strong>
                  <span>Perfect Attendance</span>
                </div>

                <div className="dashboard-bars">

                  <div className="bar">
                    <span>Week 1</span>
                    <i style={{ width: "100%" }}></i>
                  </div>

                  <div className="bar">
                    <span>Week 2</span>
                    <i style={{ width: "100%" }}></i>
                  </div>

                  <div className="bar">
                    <span>Week 3</span>
                    <i style={{ width: "96%" }}></i>
                  </div>

                  <div className="bar">
                    <span>Week 4</span>
                    <i style={{ width: "100%" }}></i>
                  </div>

                </div>
              </div>

            </div>

            <div className="about-content">

              <span className="section-label">
                ABOUT ATTENDORA
              </span>

              <h2>
                Attendance management,
                <span> made smarter.</span>
              </h2>

              <p>
                Attendora helps educational institutions manage attendance
                digitally while making monthly attendance recognition simple
                and transparent.
              </p>

              <p>
                The system automatically considers working days, Sundays and
                declared holidays before calculating attendance. Students who
                achieve 100% attendance can receive a verified digital
                certificate.
              </p>

              <div className="about-points">

                <div>
                  <span>✓</span>
                  <p>Accurate monthly calculation</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Automatic certificate generation</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Digital QR verification</p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="features-section" id="features">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                WHY ATTENDORA?
              </span>

              <h2>
                Everything You Need
                <br />
                <span>In One Place</span>
              </h2>

              <p>
                Built to simplify attendance, recognize consistency,
                and make academic life easier.
              </p>

            </div>

            <div className="features-grid">

              {features.map((feature, index) => (
                <div className="feature-card" key={index}>

                  <div className="feature-icon">
                    {feature.icon}
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>

                  <span className="feature-arrow">
                    →
                  </span>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="steps-section" id="how-it-works">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                HOW IT WORKS
              </span>

              <h2>
                Simple Steps.
                <span> Big Rewards.</span>
              </h2>

              <p>
                From daily attendance to your monthly certificate,
                everything happens automatically.
              </p>

            </div>

            <div className="steps-grid">

              {steps.map((step, index) => (
                <div className="step-card" key={index}>

                  <div className="step-number">
                    {step.number}
                  </div>

                  <div className="step-icon">
                    {step.icon}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                  {index !== steps.length - 1 && (
                    <div className="step-arrow">
                      →
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= CERTIFICATE CTA ================= */}
        <section className="certificate-cta">

          <div className="container">

            <div className="cta-box">

              <div className="cta-content">

                <span className="section-label">
                  YOUR CONSISTENCY DESERVES RECOGNITION
                </span>

                <h2>
                  Make Every Month
                  <br />
                  <span>Count.</span>
                </h2>

                <p>
                  Achieve 100% attendance and get your verified
                  digital certificate automatically.
                </p>

                {/* GET STARTED → REGISTER */}
                <Link to="/register" className="primary-btn">
                  Get Started <span>→</span>
                </Link>

              </div>

              <div className="cta-trophy">
                🏆
              </div>

            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact-section" id="contact">

          <div className="container contact-container">

            <div className="contact-info">

              <span className="section-label">
                GET IN TOUCH
              </span>

              <h2>
                Have a question?
                <span> Let's talk.</span>
              </h2>

              <p>
                Want to know more about Attendora?
                Send us a message and we'll get back to you.
              </p>

              <div className="contact-details">

                <div>
                  <span>✉</span>

                  <div>
                    <small>Email</small>
                    <strong>hello@attendora.com</strong>
                  </div>
                </div>

                <div>
                  <span>⌖</span>

                  <div>
                    <small>Location</small>
                    <strong>India</strong>
                  </div>
                </div>

              </div>

            </div>

            <form className="contact-form">

              <div className="form-row">

                <input
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

              <button className="primary-btn">
                Send Message →
              </button>

            </form>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container">

          <div className="footer-top">

            <div className="footer-brand">

              <a href="#home" className="logo footer-logo">

                <div className="logo-mark">
                  <span>◆</span>
                </div>

                <div>
                  <h2>Attendora</h2>
                  <p>Attendance • Certificate • Success</p>
                </div>

              </a>

              <p>
                Smart attendance management with
                meaningful recognition.
              </p>

              <div className="socials">
                <a href="#">in</a>
                <a href="#">G</a>
                <a href="#">◎</a>
                <a href="#">X</a>
              </div>

            </div>

            <div className="footer-column">

              <h3>Product</h3>

              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#">Certificates</a>
              <a href="#">Verification</a>

            </div>

            <div className="footer-column">

              <h3>Platform</h3>

              <a href="#">For Students</a>
              <a href="#">For Teachers</a>
              <a href="#">For Admin</a>
              <a href="#">Reports</a>

            </div>

            <div className="footer-column">

              <h3>Company</h3>

              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>

            </div>

          </div>

          <div className="footer-bottom">

            <p>
              © 2026 Attendora. All rights reserved.
            </p>

            <p>
              Built for smarter attendance management.
            </p>

          </div>

        </div>
      </footer>

    </div>
  );
}


/* ================= ROUTES ================= */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route
    path="/student-dashboard"
    element={<StudentDashboard />}
  />
  <Route
  path="/my-attendance"
  element={<MyAttendance />}
/>

<Route
  path="/monthly-progress"
  element={<MonthlyProgress />}
/>
<Route
  path="/certificate"
  element={<Certificate />}
/>
  <Route
  path="/teacher-dashboard"
  element={<TeacherDashboard />}
/>
<Route path="/admin-dashboard" element={<AdminDashboard />} />

      {/* Login page hum next banayenge */}
      <Route
        path="/login"
        element={
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h2>Student Login</h2>
            <p>Login page coming next.</p>

            <Link to="/register">
              Go to Register
            </Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;