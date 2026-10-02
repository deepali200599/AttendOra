import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const students = [
    { id: "STU001", name: "Rahul Sharma", status: "Present" },
    { id: "STU002", name: "Priya Verma", status: "Present" },
    { id: "STU003", name: "Aman Gupta", status: "Absent" },
    { id: "STU004", name: "Anjali Singh", status: "Present" },
    { id: "STU005", name: "Rohit Kumar", status: "Present" },
    { id: "STU006", name: "Sneha Yadav", status: "Present" },
    { id: "STU007", name: "Aditya Mishra", status: "Absent" },
    { id: "STU008", name: "Neha Patel", status: "Present" },
  ];

  const recentRecords = [
    {
      date: "23 Sep 2026",
      subject: "Web Development",
      class: "B.Tech-CSE",
      present: 6,
      absent: 2,
    },
    {
      date: "22 Sep 2026",
      subject: "Database Management",
      class: "B.Tech-CSE",
      present: 7,
      absent: 1,
    },
    {
      date: "21 Sep 2026",
      subject: "Web Development",
      class: "B.Tech-CSE",
      present: 8,
      absent: 0,
    },
  ];

  const [selectedDate, setSelectedDate] = useState("2026-09-24");
  const [selectedSubject, setSelectedSubject] =
    useState("Web Development");

  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = student.status;
      return acc;
    }, {})
  );

  const handleStatusChange = (id, status) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: status,
    }));
  };

  const presentCount = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    (status) => status === "Absent"
  ).length;

  const totalStudents = students.length;

  const attendancePercentage = Math.round(
    (presentCount / totalStudents) * 100
  );

  const handleSaveAttendance = () => {
    alert(
      `Attendance saved successfully for ${selectedSubject} on ${selectedDate}.`
    );
  };

  return (
    <div className="teacher-dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="teacher-sidebar">

        <div className="teacher-logo">
          <div className="logo-mark">A</div>
          <div>
            <h2>Attendora</h2>
            <span>Teacher Panel</span>
          </div>
        </div>

        <nav className="teacher-nav">

          <button
            className={`teacher-nav-item ${
              activeSection === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            <span>⌂</span>
            Dashboard
          </button>

          <button
            className={`teacher-nav-item ${
              activeSection === "attendance" ? "active" : ""
            }`}
            onClick={() => setActiveSection("attendance")}
          >
            <span>✓</span>
            Mark Attendance
          </button>

          <button
            className={`teacher-nav-item ${
              activeSection === "records" ? "active" : ""
            }`}
            onClick={() => setActiveSection("records")}
          >
            <span>▤</span>
            Attendance Records
          </button>

          <button
            className={`teacher-nav-item ${
              activeSection === "monthly" ? "active" : ""
            }`}
            onClick={() => setActiveSection("monthly")}
          >
            <span>▥</span>
            Monthly Report
          </button>

          <button
            className={`teacher-nav-item ${
              activeSection === "profile" ? "active" : ""
            }`}
            onClick={() => setActiveSection("profile")}
          >
            <span>◉</span>
            Profile
          </button>

        </nav>

        <div className="teacher-sidebar-bottom">

          <div className="teacher-tip">
            <div className="tip-icon">✓</div>
            <h4>Attendance Matters</h4>
            <p>
              Consistent attendance helps students stay on track
              with their academic goals.
            </p>
          </div>

          <Link to="/" className="teacher-logout">
            <span>↪</span>
            Logout
          </Link>

        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="teacher-main">

        {/* TOP NAVBAR */}
        <header className="teacher-topbar">

          <div className="teacher-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search students, classes..."
            />
          </div>

          <div className="teacher-top-actions">

            <button className="notification-btn">
              ♧
              <span className="notification-dot"></span>
            </button>

            <div className="teacher-profile-mini">
              <div className="teacher-avatar">AS</div>
              <div>
                <strong>Arjun Singh</strong>
                <small>Teacher</small>
              </div>
            </div>

          </div>
        </header>

        {/* ================= DASHBOARD ================= */}
        {activeSection === "dashboard" && (
          <section className="teacher-content">

            <div className="teacher-heading">

              <div>
                <p className="eyebrow">TEACHER DASHBOARD</p>
                <h1>Good Morning, Arjun</h1>
                <p>
                  Here's what's happening with your classes today.
                </p>
              </div>

              <div className="today-date">
                <span>Today</span>
                <strong>24 September 2026</strong>
              </div>

            </div>

            {/* STATS */}
            <div className="teacher-stats">

              <div className="teacher-stat-card">
                <div className="stat-icon">♙</div>
                <div>
                  <span>Total Students</span>
                  <h3>48</h3>
                </div>
              </div>

              <div className="teacher-stat-card">
                <div className="stat-icon">▦</div>
                <div>
                  <span>Classes Today</span>
                  <h3>3</h3>
                </div>
              </div>

              <div className="teacher-stat-card">
                <div className="stat-icon">✓</div>
                <div>
                  <span>Attendance Marked</span>
                  <h3>2</h3>
                </div>
              </div>

              <div className="teacher-stat-card">
                <div className="stat-icon">◔</div>
                <div>
                  <span>Average Attendance</span>
                  <h3>94%</h3>
                </div>
              </div>

            </div>

            {/* QUICK ACTION */}
            <div className="quick-attendance-card">

              <div>
                <p className="eyebrow">TODAY'S ATTENDANCE</p>
                <h2>Ready to mark attendance?</h2>
                <p>
                  Select your class and mark today's attendance
                  in just a few clicks.
                </p>
              </div>

              <button
                className="primary-attendance-btn"
                onClick={() => setActiveSection("attendance")}
              >
                Mark Attendance →
              </button>

            </div>

            {/* BOTTOM GRID */}
            <div className="teacher-bottom-grid">

              <div className="teacher-panel">

                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">MY CLASSES</p>
                    <h2>Today's Classes</h2>
                  </div>
                </div>

                <div className="class-list">

                  <div className="class-item">
                    <div className="class-time">09:00 AM</div>
                    <div>
                      <strong>Web Development</strong>
                      <span>B.Tech - CSE • Room 204</span>
                    </div>
                    <span className="class-status completed">
                      Completed
                    </span>
                  </div>

                  <div className="class-item">
                    <div className="class-time">11:00 AM</div>
                    <div>
                      <strong>Database Management</strong>
                      <span>B.Tech - CSE • Room 301</span>
                    </div>
                    <span className="class-status upcoming">
                      Upcoming
                    </span>
                  </div>

                  <div className="class-item">
                    <div className="class-time">02:00 PM</div>
                    <div>
                      <strong>Computer Networks</strong>
                      <span>B.Tech - CSE • Lab 2</span>
                    </div>
                    <span className="class-status upcoming">
                      Upcoming
                    </span>
                  </div>

                </div>

              </div>

              <div className="teacher-panel">

                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">RECENT</p>
                    <h2>Attendance Records</h2>
                  </div>

                  <button
                    className="text-btn"
                    onClick={() => setActiveSection("records")}
                  >
                    View All →
                  </button>
                </div>

                <div className="recent-records">

                  {recentRecords.map((record, index) => (
                    <div className="recent-record" key={index}>

                      <div className="record-date">
                        <strong>{record.date}</strong>
                        <span>{record.subject}</span>
                      </div>

                      <div className="record-class">
                        {record.class}
                      </div>

                      <div className="record-numbers">
                        <span className="present-number">
                          {record.present} Present
                        </span>

                        <span className="absent-number">
                          {record.absent} Absent
                        </span>
                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            <div className="teacher-quote">
              <span>“</span>
              <p>
                Every day is an opportunity to make a difference
                in a student's journey.
              </p>
            </div>

          </section>
        )}

        {/* ================= MARK ATTENDANCE ================= */}
        {activeSection === "attendance" && (
          <section className="teacher-content">

            <div className="teacher-heading">

              <div>
                <p className="eyebrow">ATTENDANCE MANAGEMENT</p>
                <h1>Mark Attendance</h1>
                <p>
                  Mark today's attendance for your students.
                </p>
              </div>

              <button
                className="back-dashboard-btn"
                onClick={() => setActiveSection("dashboard")}
              >
                ← Back to Dashboard
              </button>

            </div>

            {/* FILTER CARD */}
            <div className="attendance-filter-card">

              <div className="attendance-filter">

                <label>
                  Class / Section
                  <select defaultValue="B.Tech-CSE">
                    <option>B.Tech-CSE</option>
                    <option>BCA-A</option>
                    <option>BCA-B</option>
                  </select>
                </label>

                <label>
                  Subject
                  <select
                    value={selectedSubject}
                    onChange={(e) =>
                      setSelectedSubject(e.target.value)
                    }
                  >
                    <option>Web Development</option>
                    <option>Database Management</option>
                    <option>Computer Networks</option>
                    <option>Software Engineering</option>
                  </select>
                </label>

                <label>
                  Date
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) =>
                      setSelectedDate(e.target.value)
                    }
                  />
                </label>

              </div>

            </div>

            {/* ATTENDANCE SUMMARY */}
            <div className="attendance-summary">

              <div className="summary-box present-box">
                <span>Present</span>
                <strong>{presentCount}</strong>
              </div>

              <div className="summary-box absent-box">
                <span>Absent</span>
                <strong>{absentCount}</strong>
              </div>

              <div className="summary-box total-box">
                <span>Total Students</span>
                <strong>{totalStudents}</strong>
              </div>

              <div className="summary-box percentage-box">
                <span>Attendance</span>
                <strong>{attendancePercentage}%</strong>
              </div>

            </div>

            {/* ATTENDANCE TABLE */}
            <div className="attendance-management-card">

              <div className="attendance-card-heading">

                <div>
                  <p className="eyebrow">STUDENT LIST</p>
                  <h2>
                    {selectedSubject} —{" "}
                    {new Date(selectedDate).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </h2>
                </div>

                <span className="student-count">
                  {totalStudents} Students
                </span>

              </div>

              <div className="attendance-table-wrapper">

                <table className="attendance-table">

                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Student ID</th>
                      <th>Student Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    {students.map((student, index) => (
                      <tr key={student.id}>

                        <td>{index + 1}</td>

                        <td>
                          <span className="student-id">
                            {student.id}
                          </span>
                        </td>

                        <td>
                          <strong>{student.name}</strong>
                        </td>

                        <td>

                          <div className="status-buttons">

                            <button
                              className={`status-btn present ${
                                attendance[student.id] ===
                                "Present"
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() =>
                                handleStatusChange(
                                  student.id,
                                  "Present"
                                )
                              }
                            >
                              ✓ Present
                            </button>

                            <button
                              className={`status-btn absent ${
                                attendance[student.id] ===
                                "Absent"
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() =>
                                handleStatusChange(
                                  student.id,
                                  "Absent"
                                )
                              }
                            >
                              ✕ Absent
                            </button>

                          </div>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

              <div className="attendance-save-area">

                <p>
                  Please verify all student statuses before
                  saving attendance.
                </p>

                <button
                  className="save-attendance-btn"
                  onClick={handleSaveAttendance}
                >
                  Save Attendance
                </button>

              </div>

            </div>

          </section>
        )}

        {/* ================= RECORDS ================= */}
        {activeSection === "records" && (
          <section className="teacher-content">

            <div className="teacher-heading">

              <div>
                <p className="eyebrow">ATTENDANCE HISTORY</p>
                <h1>Attendance Records</h1>
                <p>
                  View previously marked attendance records.
                </p>
              </div>

              <button
                className="back-dashboard-btn"
                onClick={() => setActiveSection("dashboard")}
              >
                ← Back to Dashboard
              </button>

            </div>

            <div className="teacher-panel full-width-panel">

              <div className="panel-heading">
                <div>
                  <p className="eyebrow">RECENT RECORDS</p>
                  <h2>Attendance History</h2>
                </div>
              </div>

              <div className="records-large-list">

                {recentRecords.map((record, index) => (
                  <div className="large-record" key={index}>

                    <div>
                      <strong>{record.date}</strong>
                      <span>{record.subject}</span>
                    </div>

                    <div>
                      <span>{record.class}</span>
                    </div>

                    <div className="record-numbers">
                      <span className="present-number">
                        {record.present} Present
                      </span>

                      <span className="absent-number">
                        {record.absent} Absent
                      </span>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </section>
        )}

        {/* ================= MONTHLY REPORT ================= */}
        {activeSection === "monthly" && (
          <section className="teacher-content">

            <div className="teacher-heading">

              <div>
                <p className="eyebrow">REPORTS</p>
                <h1>Monthly Report</h1>
                <p>
                  Monthly attendance overview will appear here.
                </p>
              </div>

              <button
                className="back-dashboard-btn"
                onClick={() => setActiveSection("dashboard")}
              >
                ← Back to Dashboard
              </button>

            </div>

            <div className="teacher-panel placeholder-panel">

              <div className="placeholder-icon">▥</div>

              <h2>Monthly Report</h2>

              <p>
                Detailed monthly attendance reports will be
                connected with the backend later.
              </p>

            </div>

          </section>
        )}

        {/* ================= PROFILE ================= */}
        {activeSection === "profile" && (
          <section className="teacher-content">

            <div className="teacher-heading">

              <div>
                <p className="eyebrow">ACCOUNT</p>
                <h1>Teacher Profile</h1>
                <p>
                  View your teacher account information.
                </p>
              </div>

              <button
                className="back-dashboard-btn"
                onClick={() => setActiveSection("dashboard")}
              >
                ← Back to Dashboard
              </button>

            </div>

            <div className="teacher-panel profile-panel">

              <div className="profile-large-avatar">
                AS
              </div>

              <h2>Arjun Singh</h2>
              <p>Teacher</p>

              <div className="profile-details">

                <div>
                  <span>Department</span>
                  <strong>Computer Science</strong>
                </div>

                <div>
                  <span>Subjects</span>
                  <strong>Web Development, Database Management</strong>
                </div>

                <div>
                  <span>Institution</span>
                  <strong>Attendora Institute</strong>
                </div>

              </div>

            </div>

          </section>
        )}

      </main>
    </div>
  );
};

export default TeacherDashboard;