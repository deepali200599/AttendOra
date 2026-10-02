import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [user] = useState(() => {
    const savedUser = localStorage.getItem("attendoraUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const attendanceData = [
    { month: "Jan", value: 88 },
    { month: "Feb", value: 92 },
    { month: "Mar", value: 95 },
    { month: "Apr", value: 90 },
    { month: "May", value: 96 },
    { month: "Jun", value: 94 },
  ];

  const calendarDays = [
    { day: 1, status: "present" },
    { day: 2, status: "present" },
    { day: 3, status: "present" },
    { day: 4, status: "present" },
    { day: 5, status: "present" },
    { day: 6, status: "holiday" },
    { day: 7, status: "holiday" },

    { day: 8, status: "present" },
    { day: 9, status: "present" },
    { day: 10, status: "present" },
    { day: 11, status: "absent" },
    { day: 12, status: "present" },
    { day: 13, status: "holiday" },
    { day: 14, status: "holiday" },

    { day: 15, status: "present" },
    { day: 16, status: "present" },
    { day: 17, status: "present" },
    { day: 18, status: "present" },
    { day: 19, status: "present" },
    { day: 20, status: "holiday" },
    { day: 21, status: "holiday" },

    { day: 22, status: "present" },
    { day: 23, status: "present" },
    { day: 24, status: "present" },
    { day: 25, status: "present" },
    { day: 26, status: "present" },
    { day: 27, status: "holiday" },
    { day: 28, status: "holiday" },

    { day: 29, status: "present" },
    { day: 30, status: "present" },
  ];

  return (
    <div className="student-dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="student-sidebar">

        <div className="student-logo">
          <span>●</span>
          Attendora
        </div>

        <div className="sidebar-menu">

          <p className="menu-title">MAIN MENU</p>

          <Link to="/student-dashboard" className="sidebar-item active">
            <span className="sidebar-icon">⌂</span>
            Dashboard
          </Link>

          <Link to="/my-attendance" className="sidebar-item">
  <span className="sidebar-icon">▣</span>
  My Attendance
</Link>

          <Link
  to="/monthly-progress"
  className="sidebar-item"
>
  <span className="sidebar-icon">◔</span>
  Monthly Progress
</Link>

          <Link
  to="/certificate"
  className="sidebar-item"
>
  <span className="sidebar-icon">◇</span>
  Certificate
</Link>

          <p className="menu-title second-title">ACCOUNT</p>

          <Link to="#" className="sidebar-item">
            <span className="sidebar-icon">◉</span>
            Profile
          </Link>

          <Link to="/" className="sidebar-item logout-item">
            <span className="sidebar-icon">↪</span>
            Logout
          </Link>

        </div>

        <div className="sidebar-bottom-card">
          <div className="sidebar-small-icon">✓</div>
          <h4>Keep Going!</h4>
          <p>
            Maintain your attendance to unlock your monthly certificate.
          </p>
        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <main className="student-main">

        {/* TOP NAVBAR */}
        <header className="student-navbar">

          <div className="dashboard-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search attendance, certificates..."
            />
          </div>

          <div className="navbar-right">

            <button className="notification-btn">
              ♢
              <span className="notification-dot"></span>
            </button>

            <div className="profile-mini">
              <div className="profile-avatar">RS</div>

              <div>
                <strong>Rahul Sharma</strong>
                <small>Student</small>
              </div>

              <span className="profile-arrow">⌄</span>
            </div>

          </div>

        </header>

        {/* ================= CONTENT ================= */}
        <section className="dashboard-content">

          {/* GREETING */}
          <div className="dashboard-heading">

            <div>
              <p className="dashboard-label">STUDENT DASHBOARD</p>

              <h1>
                Good Morning, <span>Rahul!</span>
              </h1>

              <p className="dashboard-subtitle">
                Here's your attendance overview for this month.
              </p>
            </div>

            <div className="current-month">
              <span>▣</span>
              September 2026
            </div>

          </div>

          {/* ================= STAT CARDS ================= */}
          <div className="student-stat-grid">

            <div className="student-stat-card">
              <div className="stat-top">
                <div>
                  <p>Attendance Percentage</p>
                  <h2>96%</h2>
                </div>

                <div className="stat-icon attendance-icon">
                  ✓
                </div>
              </div>

              <div className="stat-progress">
                <span style={{ width: "96%" }}></span>
              </div>

              <small>
                Excellent attendance
              </small>
            </div>

            <div className="student-stat-card">
              <div className="stat-top">
                <div>
                  <p>Present Days</p>
                  <h2>23</h2>
                </div>

                <div className="stat-icon present-icon">
                  ✓
                </div>
              </div>

              <div className="stat-card-footer">
                <span>Out of 24 working days</span>
              </div>
            </div>

            <div className="student-stat-card">
              <div className="stat-top">
                <div>
                  <p>Absent Days</p>
                  <h2>1</h2>
                </div>

                <div className="stat-icon absent-icon">
                  !
                </div>
              </div>

              <div className="stat-card-footer">
                <span>Keep improving</span>
              </div>
            </div>

            <div className="student-stat-card">
              <div className="stat-top">
                <div>
                  <p>Working Days</p>
                  <h2>24</h2>
                </div>

                <div className="stat-icon working-icon">
                  ◫
                </div>
              </div>

              <div className="stat-card-footer">
                <span>September 2026</span>
              </div>
            </div>

          </div>

          {/* ================= PROFILE + CHART ================= */}
          <div className="dashboard-two-column">

            {/* PROFILE CARD */}
            <div className="dashboard-card student-profile-card">

              <div className="card-heading">
                <div>
                  <p className="card-label">STUDENT PROFILE</p>
                  <h3>Personal Information</h3>
                </div>

                <button className="edit-btn">
                  Edit Profile
                </button>
              </div>

              <div className="profile-main">

                <div className="large-avatar">
  {user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "ST"}
</div>

<div className="profile-info">
  <h2>{user?.name || "Student"}</h2>
  <span className="student-badge">Student</span>

  <div className="profile-details">

    <div>
      <small>Student ID</small>
      <strong>{user?.studentId || "Not Available"}</strong>
    </div>

    <div>
      <small>Course</small>
      <strong>{user?.course || "Not Available"}</strong>
    </div>

    <div>
      <small>Semester</small>
      <strong>{user?.semester || "Not Available"}</strong>
    </div>

    <div>
      <small>Section</small>
      <strong>{user?.section || "Not Available"}</strong>
    </div>

  </div>
</div>

              </div>

            </div>

            {/* CERTIFICATE CARD */}
            <div className="dashboard-card certificate-card">

              <div className="certificate-top">
                <div>
                  <p className="card-label">CERTIFICATE STATUS</p>
                  <h3>Monthly Certificate</h3>
                </div>

                <div className="certificate-icon">
                  ★
                </div>
              </div>

              <div className="certificate-progress">

                <div className="certificate-circle">
                  <div>
                    <strong>96%</strong>
                    <span>Attendance</span>
                  </div>
                </div>

                <div className="certificate-text">
                  <h4>Not Eligible Yet</h4>

                  <p>
                    You need 100% attendance to receive
                    this month's digital certificate.
                  </p>

                  <button className="certificate-btn">
                    View Requirements →
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* ================= GRAPHS ================= */}
          <div className="dashboard-two-column graph-row">

            {/* BAR CHART */}
            <div className="dashboard-card attendance-chart-card">

              <div className="card-heading">

                <div>
                  <p className="card-label">ATTENDANCE ANALYTICS</p>
                  <h3>Monthly Attendance Progress</h3>
                </div>

                <select className="chart-select">
                  <option>2026</option>
                  <option>2025</option>
                </select>

              </div>

              <div className="bar-chart">

                <div className="chart-y-axis">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>

                <div className="chart-area">

                  <div className="chart-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="bars">

                    {attendanceData.map((item, index) => (
                      <div className="bar-group" key={index}>

                        <div className="bar-value">
                          {item.value}%
                        </div>

                        <div className="bar-wrapper">
                          <div
                            className="attendance-bar"
                            style={{
                              height: `${item.value}%`,
                            }}
                          ></div>
                        </div>

                        <span className="bar-label">
                          {item.month}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

            {/* DONUT CHART */}
            <div className="dashboard-card summary-card">

              <div className="card-heading">

                <div>
                  <p className="card-label">ATTENDANCE SUMMARY</p>
                  <h3>This Month</h3>
                </div>

              </div>

              <div className="donut-container">

                <div className="donut-chart">

                  <div className="donut-inner">
                    <strong>96%</strong>
                    <span>Overall</span>
                  </div>

                </div>

              </div>

              <div className="summary-legend">

                <div>
                  <span className="legend-dot present-dot"></span>
                  <p>Present</p>
                  <strong>23 Days</strong>
                </div>

                <div>
                  <span className="legend-dot absent-dot"></span>
                  <p>Absent</p>
                  <strong>1 Day</strong>
                </div>

                <div>
                  <span className="legend-dot holiday-dot"></span>
                  <p>Holidays</p>
                  <strong>6 Days</strong>
                </div>

              </div>

            </div>

          </div>

          {/* ================= CALENDAR + ACTIVITY ================= */}
          <div className="dashboard-two-column">

            {/* CALENDAR */}
            <div className="dashboard-card calendar-card">

              <div className="card-heading">

                <div>
                  <p className="card-label">ATTENDANCE CALENDAR</p>
                  <h3>September 2026</h3>
                </div>

                <div className="calendar-actions">
                  <button>‹</button>
                  <button>›</button>
                </div>

              </div>

              <div className="calendar-weekdays">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>

              <div className="calendar-grid">

                {calendarDays.map((item) => (
                  <div
                    key={item.day}
                    className={`calendar-day ${item.status}`}
                  >
                    <span>{item.day}</span>
                  </div>
                ))}

              </div>

              <div className="calendar-legend">

                <span>
                  <i className="present-dot"></i>
                  Present
                </span>

                <span>
                  <i className="absent-dot"></i>
                  Absent
                </span>

                <span>
                  <i className="holiday-dot"></i>
                  Holiday
                </span>

              </div>

            </div>

            {/* RECENT ACTIVITY */}
            <div className="dashboard-card activity-card">

              <div className="card-heading">

                <div>
                  <p className="card-label">RECENT ACTIVITY</p>
                  <h3>Latest Updates</h3>
                </div>

                <button className="view-all-btn">
                  View All
                </button>

              </div>

              <div className="activity-list">

                <div className="activity-item">

                  <div className="activity-icon present-activity">
                    ✓
                  </div>

                  <div>
                    <strong>Attendance marked</strong>
                    <p>Database Management System</p>
                    <small>Today, 10:32 AM</small>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-icon present-activity">
                    ✓
                  </div>

                  <div>
                    <strong>Attendance marked</strong>
                    <p>Web Development</p>
                    <small>Today, 09:15 AM</small>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-icon certificate-activity">
                    ★
                  </div>

                  <div>
                    <strong>Monthly progress updated</strong>
                    <p>August attendance: 94%</p>
                    <small>2 days ago</small>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-icon profile-activity">
                    ◉
                  </div>

                  <div>
                    <strong>Profile updated</strong>
                    <p>Student information was updated</p>
                    <small>5 days ago</small>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================= QUICK ACTIONS ================= */}
          <div className="quick-section">

            <div className="quick-heading">
              <p className="card-label">QUICK ACTIONS</p>
              <h3>What would you like to do?</h3>
            </div>

            <div className="quick-grid">

              <button className="quick-card">
                <div className="quick-icon">▣</div>
                <div>
                  <strong>View Attendance History</strong>
                  <span>Check your complete attendance record</span>
                </div>
                <b>→</b>
              </button>

              <button className="quick-card">
                <div className="quick-icon">◫</div>
                <div>
                  <strong>Check Monthly Progress</strong>
                  <span>View attendance month by month</span>
                </div>
                <b>→</b>
              </button>

              <button className="quick-card">
                <div className="quick-icon">▤</div>
                <div>
                  <strong>Download Certificate</strong>
                  <span>Access your eligible certificates</span>
                </div>
                <b>→</b>
              </button>

              <button className="quick-card">
                <div className="quick-icon">◉</div>
                <div>
                  <strong>Update Profile</strong>
                  <span>Manage your personal information</span>
                </div>
                <b>→</b>
              </button>

            </div>

          </div>

          {/* QUOTE */}
          <div className="dashboard-quote">

            <div className="quote-mark">“</div>

            <div>
              <p>
                Discipline today builds the success of tomorrow.
              </p>
              <span>— Attendora</span>
            </div>

          </div>

          <footer className="student-footer">
            © 2026 Attendora. Smart Attendance Management System.
          </footer>

        </section>

      </main>

    </div>
  );
};

export default StudentDashboard;