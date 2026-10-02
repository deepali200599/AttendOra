import React from "react";
import { Link } from "react-router-dom";
import "./MyAttendance.css";

const MyAttendance = () => {
  const subjects = [
    {
      name: "Web Development",
      code: "WD",
      present: 24,
      absent: 1,
      total: 25,
      percentage: 96,
    },
    {
      name: "Database Management",
      code: "DBMS",
      present: 23,
      absent: 1,
      total: 24,
      percentage: 96,
    },
    {
      name: "Computer Networks",
      code: "CN",
      present: 22,
      absent: 2,
      total: 24,
      percentage: 92,
    },
    {
      name: "Operating System",
      code: "OS",
      present: 24,
      absent: 0,
      total: 24,
      percentage: 100,
    },
    {
      name: "Software Engineering",
      code: "SE",
      present: 23,
      absent: 0,
      total: 23,
      percentage: 100,
    },
  ];

  const recentAttendance = [
    {
      date: "24 Sep 2026",
      subject: "Web Development",
      time: "10:00 AM",
      status: "Present",
    },
    {
      date: "23 Sep 2026",
      subject: "Database Management",
      time: "11:00 AM",
      status: "Present",
    },
    {
      date: "22 Sep 2026",
      subject: "Computer Networks",
      time: "09:00 AM",
      status: "Absent",
    },
    {
      date: "21 Sep 2026",
      subject: "Operating System",
      time: "12:00 PM",
      status: "Present",
    },
    {
      date: "20 Sep 2026",
      subject: "Software Engineering",
      time: "10:00 AM",
      status: "Present",
    },
    {
      date: "19 Sep 2026",
      subject: "Web Development",
      time: "10:00 AM",
      status: "Present",
    },
  ];

  const totalPresent = subjects.reduce(
    (sum, subject) => sum + subject.present,
    0
  );

  const totalAbsent = subjects.reduce(
    (sum, subject) => sum + subject.absent,
    0
  );

  const totalClasses = totalPresent + totalAbsent;

  const overallPercentage = Math.round(
    (totalPresent / totalClasses) * 100
  );

  return (
    <div className="attendance-page">

      {/* SIDEBAR */}
      <aside className="attendance-sidebar">

        <Link to="/" className="attendance-logo">
          <span className="logo-dot">●</span>
          Attendora
        </Link>

        <div className="sidebar-section">
          <p className="sidebar-heading">MAIN MENU</p>

          <Link
            to="/student-dashboard"
            className="attendance-sidebar-item"
          >
            <span className="sidebar-icon">⌂</span>
            Dashboard
          </Link>

          <Link
            to="/my-attendance"
            className="attendance-sidebar-item active"
          >
            <span className="sidebar-icon">▣</span>
            My Attendance
          </Link>

          <Link
            to="/monthly-progress"
            className="attendance-sidebar-item"
          >
            <span className="sidebar-icon">◔</span>
            Monthly Progress
          </Link>

         <Link
  to="/certificate"
  className="attendance-sidebar-item"
>
  <span className="sidebar-icon">◇</span>
  Certificate
</Link>
        </div>

        <div className="sidebar-section account-section">
          <p className="sidebar-heading">ACCOUNT</p>

          <Link
            to="/student-dashboard"
            className="attendance-sidebar-item"
          >
            <span className="sidebar-icon">◉</span>
            Profile
          </Link>

          <Link to="/" className="attendance-sidebar-item">
            <span className="sidebar-icon">↪</span>
            Logout
          </Link>
        </div>

        <div className="attendance-goal-card">
          <div className="goal-icon">★</div>

          <h4>Certificate Goal</h4>

          <p>
            Maintain 100% attendance to earn your monthly certificate.
          </p>
        </div>

      </aside>

      {/* MAIN */}
      <main className="attendance-main">

        {/* NAVBAR */}
        <header className="attendance-navbar">

          <div className="attendance-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search attendance..."
            />
          </div>

          <div className="navbar-right">

            <button className="notification">
              ♧
              <span></span>
            </button>

            <div className="student-profile">

              <div className="profile-avatar">
                RS
              </div>

              <div className="profile-info">
                <strong>Rahul Sharma</strong>
                <small>Student</small>
              </div>

              <span className="profile-arrow">⌄</span>

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <div className="attendance-content">

          {/* HEADER */}
          <div className="attendance-page-header">

            <div>
              <p className="page-small-title">
                ATTENDORA STUDENT PORTAL
              </p>

              <h1>My Attendance</h1>

              <p className="page-description">
                View your subject-wise attendance and monitor
                your present and absent records.
              </p>
            </div>

            <div className="month-selector">
              <span>Current Month</span>
              <strong>September 2026</strong>
              <span>⌄</span>
            </div>

          </div>

          {/* SUMMARY */}
          <div className="attendance-summary">

            <div className="summary-card">

              <div className="summary-icon green-icon">
                ✓
              </div>

              <div className="summary-content">
                <span>Overall Attendance</span>
                <strong>{overallPercentage}%</strong>

                <div className="summary-progress">
                  <div
                    style={{
                      width: `${overallPercentage}%`,
                    }}
                  ></div>
                </div>
              </div>

            </div>

            <div className="summary-card">

              <div className="summary-icon green-light">
                ✓
              </div>

              <div className="summary-content">
                <span>Present Days</span>
                <strong>{totalPresent}</strong>
                <small>Classes attended</small>
              </div>

            </div>

            <div className="summary-card">

              <div className="summary-icon gold-icon">
                ×
              </div>

              <div className="summary-content">
                <span>Absent Days</span>
                <strong>{totalAbsent}</strong>

                <div className="summary-progress absent-progress">
                  <div
                    style={{
                      width: `${Math.round(
                        (totalAbsent / totalClasses) * 100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>

            </div>

            <div className="summary-card">

              <div className="summary-icon target-icon">
                ★
              </div>

              <div className="summary-content">
                <span>Certificate Target</span>
                <strong>100%</strong>
                <small>Monthly requirement</small>
              </div>

            </div>

          </div>

          {/* MAIN GRID */}
          <div className="attendance-main-grid">

            {/* SUBJECT ATTENDANCE */}
            <div className="attendance-card subject-card">

              <div className="card-header">

                <div>
                  <p>SUBJECT-WISE RECORD</p>
                  <h2>Attendance Details</h2>
                </div>

                <span className="card-count">
                  {subjects.length} Subjects
                </span>

              </div>

              <div className="subject-table-wrapper">

                <table className="subject-table">

                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Present</th>
                      <th>Absent</th>
                      <th>Total</th>
                      <th>Attendance</th>
                    </tr>
                  </thead>

                  <tbody>
                    {subjects.map((subject) => (
                      <tr key={subject.code}>

                        <td>
                          <div className="subject-name">

                            <div className="subject-icon">
                              {subject.code}
                            </div>

                            <div>
                              <strong>{subject.name}</strong>
                              <span>
                                {subject.code}
                              </span>
                            </div>

                          </div>
                        </td>

                        <td>
                          <strong className="present-number">
                            {subject.present}
                          </strong>
                        </td>

                        <td>
                          <strong className="absent-number">
                            {subject.absent}
                          </strong>
                        </td>

                        <td>
                          {subject.total}
                        </td>

                        <td>
                          <div className="percentage-box">

                            <strong>
                              {subject.percentage}%
                            </strong>

                            <div className="percentage-bar">
                              <div
                                style={{
                                  width: `${subject.percentage}%`,
                                }}
                              ></div>
                            </div>

                          </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>

            </div>

            {/* GRAPH */}
            <div className="attendance-card chart-card">

              <div className="card-header">

                <div>
                  <p>ATTENDANCE ANALYSIS</p>
                  <h2>Present vs Absent</h2>
                </div>

                <div className="chart-legend">
                  <span>
                    <i className="present-dot"></i>
                    Present
                  </span>

                  <span>
                    <i className="absent-dot"></i>
                    Absent
                  </span>
                </div>

              </div>

              <div className="bar-chart">

                <div className="chart-y-axis">
                  <span>25</span>
                  <span>20</span>
                  <span>15</span>
                  <span>10</span>
                  <span>5</span>
                  <span>0</span>
                </div>

                <div className="chart-area">

                  <div className="chart-grid-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="bars">

                    {subjects.map((subject) => (
                      <div
                        className="bar-column"
                        key={subject.code}
                      >

                        <div className="bar-total">
                          {subject.total}
                        </div>

                        <div className="bar-stack">

                          <div
                            className="bar-present"
                            style={{
                              height: `${
                                (subject.present / 25) * 100
                              }%`,
                            }}
                          ></div>

                          <div
                            className="bar-absent"
                            style={{
                              height: `${
                                (subject.absent / 25) * 100
                              }%`,
                            }}
                          ></div>

                        </div>

                        <span className="bar-label">
                          {subject.code}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

              <div className="attendance-message">

                <div className="message-icon">
                  ✦
                </div>

                <div>
                  <strong>Great attendance!</strong>

                  <p>
                    Keep maintaining your consistency to
                    reach the 100% certificate target.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RECENT ATTENDANCE */}
          <div className="attendance-card recent-card">

            <div className="card-header">

              <div>
                <p>RECENT RECORDS</p>
                <h2>Recent Attendance</h2>
              </div>

              <span className="card-count">
                Latest 6 records
              </span>

            </div>

            <div className="recent-table-wrapper">

              <table className="recent-table">

                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Class Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {recentAttendance.map((record, index) => (
                    <tr key={index}>

                      <td>{record.date}</td>

                      <td>
                        <strong>
                          {record.subject}
                        </strong>
                      </td>

                      <td>{record.time}</td>

                      <td>
                        <span
                          className={`status-badge ${
                            record.status === "Present"
                              ? "status-present"
                              : "status-absent"
                          }`}
                        >
                          {record.status === "Present"
                            ? "✓ Present"
                            : "× Absent"}
                        </span>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default MyAttendance;