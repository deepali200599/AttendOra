import React from "react";
import { Link } from "react-router-dom";
import "./MonthlyProgress.css";

const MonthlyProgress = () => {
  const monthlyData = [
    { month: "January", present: 22, absent: 2, total: 24, percentage: 92 },
    { month: "February", present: 23, absent: 1, total: 24, percentage: 96 },
    { month: "March", present: 21, absent: 2, total: 23, percentage: 91 },
    { month: "April", present: 24, absent: 0, total: 24, percentage: 100 },
    { month: "May", present: 23, absent: 1, total: 24, percentage: 96 },
    { month: "June", present: 24, absent: 0, total: 24, percentage: 100 },
  ];

  const subjectData = [
    {
      name: "Web Development",
      code: "WD",
      percentage: 96,
      present: 24,
      absent: 1,
    },
    {
      name: "Database Management",
      code: "DBMS",
      percentage: 96,
      present: 23,
      absent: 1,
    },
    {
      name: "Computer Networks",
      code: "CN",
      percentage: 92,
      present: 22,
      absent: 2,
    },
    {
      name: "Operating System",
      code: "OS",
      percentage: 100,
      present: 24,
      absent: 0,
    },
    {
      name: "Software Engineering",
      code: "SE",
      percentage: 100,
      present: 23,
      absent: 0,
    },
  ];

  const currentPercentage = 96;
  const targetPercentage = 100;
  const progressToTarget = Math.min(
    (currentPercentage / targetPercentage) * 100,
    100
  );

  return (
    <div className="progress-page">

      {/* SIDEBAR */}
      <aside className="progress-sidebar">
        <Link to="/" className="progress-logo">
          <span className="logo-dot">●</span>
          Attendora
        </Link>

        <div className="progress-sidebar-section">
          <p className="progress-sidebar-heading">MAIN MENU</p>

          <Link to="/student-dashboard" className="progress-sidebar-item">
            <span className="progress-sidebar-icon">⌂</span>
            Dashboard
          </Link>

          <Link to="/my-attendance" className="progress-sidebar-item">
            <span className="progress-sidebar-icon">▣</span>
            My Attendance
          </Link>

          <Link
            to="/monthly-progress"
            className="progress-sidebar-item active"
          >
            <span className="progress-sidebar-icon">◔</span>
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

        <div className="progress-sidebar-section">
          <p className="progress-sidebar-heading">ACCOUNT</p>

          <Link to="/student-dashboard" className="progress-sidebar-item">
            <span className="progress-sidebar-icon">◉</span>
            Profile
          </Link>

          <Link to="/" className="progress-sidebar-item">
            <span className="progress-sidebar-icon">↪</span>
            Logout
          </Link>
        </div>

        <div className="progress-goal-card">
          <div className="progress-goal-icon">★</div>
          <h4>Certificate Goal</h4>
          <p>Maintain 100% attendance to earn your monthly certificate.</p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="progress-main">

        {/* NAVBAR */}
        <header className="progress-navbar">
          <div className="progress-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search attendance..."
            />
          </div>

          <div className="progress-navbar-right">
            <button className="progress-notification">
              ♧
              <span></span>
            </button>

            <div className="progress-profile">
              <div className="progress-avatar">RS</div>

              <div className="progress-profile-info">
                <strong>Rahul Sharma</strong>
                <small>Student</small>
              </div>

              <span className="progress-profile-arrow">⌄</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="progress-content">

          {/* PAGE HEADER */}
          <div className="progress-page-header">
            <div>
              <p className="progress-small-title">
                ATTENDORA STUDENT PORTAL
              </p>

              <h1>Monthly Progress</h1>

              <p>
                Track your attendance performance month by month and
                stay on target for your digital certificate.
              </p>
            </div>

            <div className="progress-month-selector">
              <span>Academic Year</span>
              <strong>2026 - 2027</strong>
              <span>⌄</span>
            </div>
          </div>

          {/* TOP STATS */}
          <div className="progress-summary">

            <div className="progress-summary-card">
              <div className="progress-summary-icon green">
                ✓
              </div>

              <div>
                <span>Current Attendance</span>
                <strong>96%</strong>
                <small>Excellent performance</small>
              </div>
            </div>

            <div className="progress-summary-card">
              <div className="progress-summary-icon gold">
                ◔
              </div>

              <div>
                <span>Average Attendance</span>
                <strong>96%</strong>
                <small>Academic year average</small>
              </div>
            </div>

            <div className="progress-summary-card">
              <div className="progress-summary-icon light">
                ▣
              </div>

              <div>
                <span>Best Month</span>
                <strong>100%</strong>
                <small>April & June</small>
              </div>
            </div>

            <div className="progress-summary-card">
              <div className="progress-summary-icon target">
                ★
              </div>

              <div>
                <span>Certificate Target</span>
                <strong>100%</strong>
                <small>Monthly requirement</small>
              </div>
            </div>

          </div>

          {/* CURRENT MONTH PROGRESS */}
          <div className="progress-main-card current-progress-card">

            <div className="progress-card-heading">
              <div>
                <p>THIS MONTH</p>
                <h2>September 2026</h2>
              </div>

              <div className="progress-percentage">
                <strong>96%</strong>
                <span>Attendance</span>
              </div>
            </div>

            <div className="progress-target-row">
              <span>Your Progress</span>
              <span>Target: 100%</span>
            </div>

            <div className="main-progress-track">
              <div
                className="main-progress-fill"
                style={{ width: `${progressToTarget}%` }}
              >
                <span></span>
              </div>
            </div>

            <div className="progress-days">
              <div>
                <strong>24</strong>
                <span>Present Days</span>
              </div>

              <div>
                <strong>1</strong>
                <span>Absent Days</span>
              </div>

              <div>
                <strong>25</strong>
                <span>Working Days</span>
              </div>

              <div>
                <strong>1</strong>
                <span>Day to Target</span>
              </div>
            </div>

          </div>

          {/* MONTHLY CHART */}
          <div className="progress-chart-card">

            <div className="progress-card-heading">
              <div>
                <p>ATTENDANCE TREND</p>
                <h2>Monthly Attendance Overview</h2>
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

            <div className="progress-bar-chart">

              <div className="chart-y-axis">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              <div className="progress-chart-area">

                <div className="chart-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="progress-bars">
                  {monthlyData.map((item) => (
                    <div className="progress-bar-column" key={item.month}>

                      <div className="progress-bar-value">
                        {item.percentage}%
                      </div>

                      <div className="progress-bar-stack">
                        <div
                          className="progress-bar-present"
                          style={{
                            height: `${item.percentage}%`,
                          }}
                        ></div>

                        <div
                          className="progress-bar-absent"
                          style={{
                            height: `${100 - item.percentage}%`,
                          }}
                        ></div>
                      </div>

                      <span className="progress-bar-label">
                        {item.month.substring(0, 3)}
                      </span>

                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* SUBJECT PERFORMANCE */}
          <div className="subject-progress-card">

            <div className="progress-card-heading">
              <div>
                <p>SUBJECT PERFORMANCE</p>
                <h2>Attendance by Subject</h2>
              </div>

              <Link to="/my-attendance">
                View Details →
              </Link>
            </div>

            <div className="subject-progress-list">

              {subjectData.map((subject) => (
                <div className="subject-progress-row" key={subject.code}>

                  <div className="subject-progress-name">
                    <div className="subject-code">
                      {subject.code}
                    </div>

                    <div>
                      <strong>{subject.name}</strong>
                      <span>
                        {subject.present} Present · {subject.absent} Absent
                      </span>
                    </div>
                  </div>

                  <div className="subject-progress-bar-area">
                    <div className="subject-progress-track">
                      <div
                        className="subject-progress-fill"
                        style={{
                          width: `${subject.percentage}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <strong className="subject-progress-percent">
                    {subject.percentage}%
                  </strong>

                </div>
              ))}

            </div>
          </div>

          {/* CERTIFICATE STATUS */}
          <div className="certificate-progress-card">

            <div className="certificate-progress-icon">
              ★
            </div>

            <div className="certificate-progress-content">
              <p>CERTIFICATE ELIGIBILITY</p>

              <h2>
                {currentPercentage === 100
                  ? "You're eligible for your certificate!"
                  : "Keep going to reach 100% attendance"}
              </h2>

              <span>
                A monthly certificate is generated automatically when
                your attendance reaches exactly 100%.
              </span>

              <div className="certificate-mini-progress">
                <div
                  style={{
                    width: `${currentPercentage}%`,
                  }}
                ></div>
              </div>

              <small>
                Current: {currentPercentage}% &nbsp; | &nbsp; Target: 100%
              </small>
            </div>

            <div className="certificate-status">
              <span>STATUS</span>

              <strong>
                {currentPercentage === 100
                  ? "Eligible"
                  : "In Progress"}
              </strong>
            </div>

          </div>

          {/* MESSAGE */}
          <div className="progress-message">
            <div className="message-icon">✦</div>

            <div>
              <strong>Keep up the consistency!</strong>
              <p>
                You are maintaining a strong attendance record.
                Stay consistent and reach 100% to unlock your monthly
                digital certificate.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MonthlyProgress;