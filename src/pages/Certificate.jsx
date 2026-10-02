import React from "react";
import { Link } from "react-router-dom";
import "./Certificate.css";

const Certificate = () => {
  const eligible = true;

  return (
    <div className="certificate-page">

      {/* SIDEBAR */}
      <aside className="certificate-sidebar">

        <Link to="/" className="certificate-logo">
          <span className="certificate-logo-dot">●</span>
          Attendora
        </Link>

        <div className="certificate-sidebar-section">
          <p className="certificate-sidebar-heading">MAIN MENU</p>

          <Link
            to="/student-dashboard"
            className="certificate-sidebar-item"
          >
            <span className="certificate-sidebar-icon">⌂</span>
            Dashboard
          </Link>

          <Link
            to="/my-attendance"
            className="certificate-sidebar-item"
          >
            <span className="certificate-sidebar-icon">▣</span>
            My Attendance
          </Link>

          <Link
            to="/monthly-progress"
            className="certificate-sidebar-item"
          >
            <span className="certificate-sidebar-icon">◔</span>
            Monthly Progress
          </Link>

          <Link
            to="/certificate"
            className="certificate-sidebar-item active"
          >
            <span className="certificate-sidebar-icon">◇</span>
            Certificate
          </Link>
        </div>

        <div className="certificate-sidebar-section">

          <p className="certificate-sidebar-heading">
            ACCOUNT
          </p>

          <Link
            to="/student-dashboard"
            className="certificate-sidebar-item"
          >
            <span className="certificate-sidebar-icon">◉</span>
            Profile
          </Link>

          <Link
            to="/"
            className="certificate-sidebar-item"
          >
            <span className="certificate-sidebar-icon">↪</span>
            Logout
          </Link>

        </div>

        <div className="certificate-goal-card">

          <div className="certificate-goal-icon">
            ★
          </div>

          <h4>Certificate Goal</h4>

          <p>
            Maintain 100% attendance to earn your monthly certificate.
          </p>

        </div>

      </aside>

      {/* MAIN */}
      <main className="certificate-main">

        {/* NAVBAR */}
        <header className="certificate-navbar">

          <div className="certificate-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search certificate..."
            />
          </div>

          <div className="certificate-navbar-right">

            <button className="certificate-notification">
              ♧
              <span></span>
            </button>

            <div className="certificate-profile">

              <div className="certificate-avatar">
                RS
              </div>

              <div className="certificate-profile-info">
                <strong>Rahul Sharma</strong>
                <small>Student</small>
              </div>

              <span className="certificate-profile-arrow">
                ⌄
              </span>

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <div className="certificate-content">

          {/* HEADER */}
          <div className="certificate-page-header">

            <div>

              <p className="certificate-small-title">
                ATTENDORA STUDENT PORTAL
              </p>

              <h1>My Certificate</h1>

              <p>
                View and manage your monthly attendance certificates.
              </p>

            </div>

            <div className="certificate-month-selector">

              <span>Certificate Month</span>

              <strong>
                September 2026
              </strong>

              <span>⌄</span>

            </div>

          </div>

          {/* STATUS */}
          <div
            className={`certificate-status-banner ${
              eligible ? "eligible" : "not-eligible"
            }`}
          >

            <div className="certificate-status-icon">
              {eligible ? "✓" : "!"}
            </div>

            <div className="certificate-status-content">

              <p>
                CERTIFICATE STATUS
              </p>

              <h2>
                {eligible
                  ? "Certificate Available"
                  : "Certificate Not Available"}
              </h2>

              <span>
                {eligible
                  ? "Congratulations! You achieved 100% attendance for September 2026."
                  : "Your attendance has not reached the required 100% target yet."}
              </span>

            </div>

            <div className="certificate-status-percentage">
              <strong>
                100%
              </strong>

              <span>
                Attendance
              </span>
            </div>

          </div>

          {/* CERTIFICATE AREA */}
          <div className="certificate-layout">

            {/* CERTIFICATE PREVIEW */}
            <div className="certificate-preview-card">

              <div className="preview-heading">

                <div>
                  <p>CERTIFICATE PREVIEW</p>
                  <h2>Monthly Attendance Certificate</h2>
                </div>

                <span className="preview-badge">
                  VERIFIED
                </span>

              </div>

              <div className="certificate-paper">

                <div className="certificate-paper-border">

                  <div className="certificate-paper-top">

                    <div className="certificate-paper-logo">
                      <span>●</span>
                      Attendora
                    </div>

                    <div className="certificate-paper-label">
                      CERTIFICATE OF
                      <strong>ATTENDANCE</strong>
                    </div>

                  </div>

                  <div className="certificate-paper-content">

                    <p className="presented-text">
                      This certificate is proudly presented to
                    </p>

                    <h1>
                      Rahul Sharma
                    </h1>

                    <div className="certificate-line"></div>

                    <p className="certificate-description">
                      for achieving <strong>100% attendance</strong>
                      during the month of
                    </p>

                    <h3>
                      September 2026
                    </h3>

                    <p className="certificate-course">
                      B.Tech - Computer Science
                    </p>

                  </div>

                  <div className="certificate-paper-bottom">

                    <div className="signature-block">
                      <div className="signature-line"></div>
                      <span>Authorized By</span>
                      <strong>Attendora Administration</strong>
                    </div>

                    <div className="certificate-seal">
                      <div>
                        ✓
                      </div>
                      <span>
                        100%
                        <small>ATTENDANCE</small>
                      </span>
                    </div>

                    <div className="signature-block">
                      <div className="signature-line"></div>
                      <span>Certificate ID</span>
                      <strong>ATT-SEP26-001</strong>
                    </div>

                  </div>

                </div>

              </div>

              {/* ACTION BUTTONS */}
              <div className="certificate-actions">

                <button
                  className="certificate-download-btn"
                  onClick={() =>
                    alert(
                      "Certificate download will be connected with the backend soon."
                    )
                  }
                >
                  ↓ Download Certificate
                </button>

                <button
                  className="certificate-view-btn"
                  onClick={() =>
                    alert(
                      "Certificate preview is already visible above."
                    )
                  }
                >
                  View Full Certificate
                </button>

              </div>

            </div>

            {/* DETAILS */}
            <div className="certificate-details-card">

              <div className="certificate-details-heading">

                <p>CERTIFICATE DETAILS</p>

                <h2>
                  Certificate Information
                </h2>

              </div>

              <div className="certificate-detail-list">

                <div className="certificate-detail-item">

                  <span>Student Name</span>

                  <strong>
                    Rahul Sharma
                  </strong>

                </div>

                <div className="certificate-detail-item">

                  <span>Student ID</span>

                  <strong>
                    STU001
                  </strong>

                </div>

                <div className="certificate-detail-item">

                  <span>Course</span>

                  <strong>
                    B.Tech - Computer Science
                  </strong>

                </div>

                <div className="certificate-detail-item">

                  <span>Semester</span>

                  <strong>
                    Semester 4
                  </strong>

                </div>

                <div className="certificate-detail-item">

                  <span>Attendance</span>

                  <strong className="gold-text">
                    100%
                  </strong>

                </div>

                <div className="certificate-detail-item">

                  <span>Certificate Month</span>

                  <strong>
                    September 2026
                  </strong>

                </div>

                <div className="certificate-detail-item">

                  <span>Issue Date</span>

                  <strong>
                    30 September 2026
                  </strong>

                </div>

                <div className="certificate-detail-item">

                  <span>Certificate ID</span>

                  <strong>
                    ATT-SEP26-001
                  </strong>

                </div>

              </div>

              <div className="verification-box">

                <div className="verification-icon">
                  ✓
                </div>

                <div>

                  <strong>
                    Digitally Verified
                  </strong>

                  <p>
                    This certificate can be verified using
                    its unique Certificate ID.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* CERTIFICATE HISTORY */}
          <div className="certificate-history-card">

            <div className="certificate-history-header">

              <div>
                <p>CERTIFICATE HISTORY</p>

                <h2>
                  Previous Certificates
                </h2>
              </div>

              <span>
                2026 - 2027
              </span>

            </div>

            <div className="certificate-history-table-wrapper">

              <table className="certificate-history-table">

                <thead>

                  <tr>
                    <th>Month</th>
                    <th>Attendance</th>
                    <th>Certificate ID</th>
                    <th>Issue Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td>
                      <strong>September 2026</strong>
                    </td>

                    <td>
                      <strong className="history-percentage">
                        100%
                      </strong>
                    </td>

                    <td>
                      ATT-SEP26-001
                    </td>

                    <td>
                      30 Sep 2026
                    </td>

                    <td>
                      <span className="history-status">
                        ✓ Issued
                      </span>
                    </td>

                    <td>
                      <button
                        className="history-view-btn"
                        onClick={() =>
                          alert(
                            "Certificate preview is already visible above."
                          )
                        }
                      >
                        View
                      </button>
                    </td>

                  </tr>

                  <tr>

                    <td>
                      <strong>August 2026</strong>
                    </td>

                    <td>
                      <strong className="history-percentage">
                        100%
                      </strong>
                    </td>

                    <td>
                      ATT-AUG26-001
                    </td>

                    <td>
                      31 Aug 2026
                    </td>

                    <td>
                      <span className="history-status">
                        ✓ Issued
                      </span>
                    </td>

                    <td>
                      <button
                        className="history-view-btn"
                        onClick={() =>
                          alert(
                            "Certificate preview is already visible above."
                          )
                        }
                      >
                        View
                      </button>
                    </td>

                  </tr>

                  <tr>

                    <td>
                      <strong>July 2026</strong>
                    </td>

                    <td>
                      <strong className="history-percentage">
                        96%
                      </strong>
                    </td>

                    <td>
                      —
                    </td>

                    <td>
                      —
                    </td>

                    <td>
                      <span className="history-not-issued">
                        Not Eligible
                      </span>
                    </td>

                    <td>
                      —
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* INFO */}
          <div className="certificate-info-box">

            <div className="certificate-info-icon">
              ✦
            </div>

            <div>

              <strong>
                How does the certificate work?
              </strong>

              <p>
                Attendora automatically checks your monthly attendance.
                When you achieve exactly 100% attendance on applicable
                working days, your digital certificate becomes available.
                Sundays and declared holidays are not counted as working
                days.
              </p>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Certificate;