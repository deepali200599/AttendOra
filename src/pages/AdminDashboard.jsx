import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Bachelor of Computer Applications",
      code: "BCA",
      duration: "3 Years",
      status: "Active",
    },
    {
      id: 2,
      name: "Bachelor of Technology - Computer Science",
      code: "BTECH-CSE",
      duration: "4 Years",
      status: "Active",
    },
  ]);

  const [showCourseForm, setShowCourseForm] = useState(false);

  const [courseForm, setCourseForm] = useState({
    name: "",
    code: "",
    duration: "",
  });

  const [searchCourse, setSearchCourse] = useState("");

  /* =========================
     SEMESTER MANAGEMENT
  ========================= */

  const [semesters, setSemesters] = useState([
    {
      id: 1,
      course: "BCA",
      semester: "Semester 1",
      academicYear: "2025-26",
      status: "Active",
    },
    {
      id: 2,
      course: "BCA",
      semester: "Semester 2",
      academicYear: "2025-26",
      status: "Active",
    },
    {
      id: 3,
      course: "BTECH-CSE",
      semester: "Semester 4",
      academicYear: "2025-26",
      status: "Active",
    },
  ]);

  const [showSemesterForm, setShowSemesterForm] = useState(false);

  const [semesterForm, setSemesterForm] = useState({
    course: "",
    semester: "",
    academicYear: "",
  });

  const [searchSemester, setSearchSemester] = useState("");

// -------------------------
const [classes, setClasses] = useState([
  {
    id: 1,
    course: "BCA",
    semester: "Semester 1",
    section: "A",
    batch: "2025-26",
    strength: 42,
    status: "Active",
  },
  {
    id: 2,
    course: "BCA",
    semester: "Semester 2",
    section: "A",
    batch: "2025-26",
    strength: 38,
    status: "Active",
  },
  {
    id: 3,
    course: "BTECH-CSE",
    semester: "Semester 4",
    section: "A",
    batch: "2025-26",
    strength: 55,
    status: "Active",
  },
]);

const [showClassForm, setShowClassForm] = useState(false);

const [classForm, setClassForm] = useState({
  course: "",
  semester: "",
  section: "",
  batch: "",
  strength: "",
});

const [searchClass, setSearchClass] = useState("");
// ----------------------------------
const [subjects, setSubjects] = useState([
  {
    id: 1,
    course: "BCA",
    semester: "Semester 1",
    subjectName: "Programming in C",
    subjectCode: "BCA101",
    credits: 4,
    status: "Active",
  },
  {
    id: 2,
    course: "BCA",
    semester: "Semester 1",
    subjectName: "Computer Fundamentals",
    subjectCode: "BCA102",
    credits: 3,
    status: "Active",
  },
  {
    id: 3,
    course: "BTECH-CSE",
    semester: "Semester 4",
    subjectName: "Web Development",
    subjectCode: "CSE401",
    credits: 4,
    status: "Active",
  },
]);

const [showSubjectForm, setShowSubjectForm] = useState(false);

const [subjectForm, setSubjectForm] = useState({
  course: "",
  semester: "",
  subjectName: "",
  subjectCode: "",
  credits: "",
});

const [searchSubject, setSearchSubject] = useState("");
// teacher class
const [teachers, setTeachers] = useState([
  {
    id: 1,
    teacherId: "TCH001",
    name: "Amit Verma",
    email: "amit@example.com",
    phone: "9876543210",
    department: "Computer Science",
    status: "Active",
  },
  {
    id: 2,
    teacherId: "TCH002",
    name: "Neha Singh",
    email: "neha@example.com",
    phone: "9876543211",
    department: "Computer Applications",
    status: "Active",
  },
  {
    id: 3,
    teacherId: "TCH003",
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    phone: "9876543212",
    department: "Computer Science",
    status: "Active",
  },
]);

const [showTeacherForm, setShowTeacherForm] = useState(false);

const [teacherForm, setTeacherForm] = useState({
  teacherId: "",
  name: "",
  email: "",
  phone: "",
  department: "",
});

const [searchTeacher, setSearchTeacher] = useState("");
// student
const [students, setStudents] = useState([
  {
    id: 1,
    studentId: "STU001",
    name: "Rahul Sharma",
    course: "BCA",
    semester: "Semester 1",
    section: "A",
    email: "rahul@example.com",
    status: "Active",
  },
  {
    id: 2,
    studentId: "STU002",
    name: "Priya Verma",
    course: "BCA",
    semester: "Semester 1",
    section: "A",
    email: "priya@example.com",
    status: "Active",
  },
  {
    id: 3,
    studentId: "STU003",
    name: "Aman Gupta",
    course: "BTECH-CSE",
    semester: "Semester 4",
    section: "A",
    email: "aman@example.com",
    status: "Active",
  },
]);

const [showStudentForm, setShowStudentForm] = useState(false);

const [studentForm, setStudentForm] = useState({
  studentId: "",
  name: "",
  course: "",
  semester: "",
  section: "",
  email: "",
});

const [searchStudent, setSearchStudent] = useState("");

// CALENDER
const [calendar, setCalendar] = useState([
  {
    id: 1,
    date: "2026-09-02",
    title: "Ganesh Chaturthi",
    type: "Holiday",
    status: "Declared",
  },
  {
    id: 2,
    date: "2026-09-14",
    title: "College Foundation Day",
    type: "Holiday",
    status: "Declared",
  },
]);

const [showCalendarForm, setShowCalendarForm] = useState(false);

const [calendarForm, setCalendarForm] = useState({
  date: "",
  title: "",
});

const [searchCalendar, setSearchCalendar] = useState("");
//  certificate
const [certificates, setCertificates] = useState([
  {
    id: 1,
    certificateId: "ATT-SEP26-001",
    studentId: "STU001",
    studentName: "Rahul Sharma",
    course: "BCA",
    month: "September 2026",
    attendance: "100%",
    issueDate: "2026-09-30",
    status: "Issued",
    verification: "Verified",
  },
  {
    id: 2,
    certificateId: "ATT-SEP26-002",
    studentId: "STU002",
    studentName: "Priya Verma",
    course: "BCA",
    month: "September 2026",
    attendance: "100%",
    issueDate: "2026-09-30",
    status: "Issued",
    verification: "Verified",
  },
]);

const [searchCertificate, setSearchCertificate] = useState("");

  const stats = [
    {
      title: "Total Students",
      value: "248",
      icon: "🎓",
      type: "green",
    },
    {
      title: "Total Teachers",
      value: "18",
      icon: "👨‍🏫",
      type: "gold",
    },
    {
      title: "Total Classes",
      value: "12",
      icon: "🏫",
      type: "light-green",
    },
    {
      title: "Subjects",
      value: "36",
      icon: "📚",
      type: "target",
    },
  ];

  const managementCards = [
    {
      id: "courses",
      title: "Courses",
      description: "Manage academic courses and programs.",
      icon: "🎓",
    },
    {
      id: "semesters",
      title: "Semesters",
      description: "Create and manage academic semesters.",
      icon: "📅",
    },
    {
      id: "classes",
      title: "Classes & Sections",
      description: "Manage classes, sections and batches.",
      icon: "🏫",
    },
    {
      id: "subjects",
      title: "Subjects",
      description: "Add and manage subjects.",
      icon: "📖",
    },
    {
      id: "teachers",
      title: "Teachers",
      description: "Add and manage teacher accounts.",
      icon: "👨‍🏫",
    },
    {
      id: "students",
      title: "Students",
      description: "Manage student records and accounts.",
      icon: "👨‍🎓",
    },
    {
      id: "calendar",
      title: "Academic Calendar",
      description: "Manage holidays and working days.",
      icon: "🗓️",
    },
    {
      id: "certificates",
      title: "Certificates",
      description: "View and manage attendance certificates.",
      icon: "🏆",
    },
  ];

  const recentActivity = [
    {
      title: "New student registered",
      name: "Rahul Sharma",
      time: "Today, 10:25 AM",
    },
    {
      title: "Teacher account added",
      name: "Priya Verma",
      time: "Today, 09:40 AM",
    },
    {
      title: "New subject created",
      name: "Web Development",
      time: "Yesterday, 04:15 PM",
    },
    {
      title: "Holiday added",
      name: "Republic Day",
      time: "Yesterday, 12:30 PM",
    },
  ];

  const handleSectionChange = (section) => {
  setActiveSection(section);
  setShowCourseForm(false);
  setShowSemesterForm(false);
  setShowClassForm(false);
  setShowSubjectForm(false);
  setShowTeacherForm(false);
   setShowStudentForm(false);
   setShowCalendarForm(false);
};

  /* =========================
     COURSE FUNCTIONS
  ========================= */

  const handleCourseInput = (e) => {
    const { name, value } = e.target;

    setCourseForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCourse = (e) => {
    e.preventDefault();

    if (!courseForm.name || !courseForm.code || !courseForm.duration) {
      alert("Please fill all course details.");
      return;
    }

    const newCourse = {
      id: Date.now(),
      name: courseForm.name,
      code: courseForm.code.toUpperCase(),
      duration: courseForm.duration,
      status: "Active",
    };

    setCourses((prev) => [...prev, newCourse]);

    setCourseForm({
      name: "",
      code: "",
      duration: "",
    });

    setShowCourseForm(false);
  };

  const handleDeleteCourse = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const filteredCourses = courses.filter((course) => {
    const search = searchCourse.toLowerCase();

    return (
      course.name.toLowerCase().includes(search) ||
      course.code.toLowerCase().includes(search)
    );
  });

  /* =========================
     SEMESTER FUNCTIONS
  ========================= */

  const handleSemesterInput = (e) => {
    const { name, value } = e.target;

    setSemesterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSemester = (e) => {
    e.preventDefault();

    if (
      !semesterForm.course ||
      !semesterForm.semester ||
      !semesterForm.academicYear
    ) {
      alert("Please fill all semester details.");
      return;
    }

    const newSemester = {
      id: Date.now(),
      course: semesterForm.course,
      semester: semesterForm.semester,
      academicYear: semesterForm.academicYear,
      status: "Active",
    };

    setSemesters((prev) => [...prev, newSemester]);

    setSemesterForm({
      course: "",
      semester: "",
      academicYear: "",
    });

    setShowSemesterForm(false);
  };

  const handleDeleteSemester = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this semester?"
    );

    if (!confirmDelete) return;

    setSemesters((prev) =>
      prev.filter((semester) => semester.id !== id)
    );
  };

  const filteredSemesters = semesters.filter((semester) => {
    const search = searchSemester.toLowerCase();

    return (
      semester.course.toLowerCase().includes(search) ||
      semester.semester.toLowerCase().includes(search) ||
      semester.academicYear.toLowerCase().includes(search)
    );
  });

  const handleClassInput = (e) => {
  const { name, value } = e.target;

  setClassForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleAddClass = (e) => {
  e.preventDefault();

  if (
    !classForm.course ||
    !classForm.semester ||
    !classForm.section ||
    !classForm.batch ||
    !classForm.strength
  ) {
    alert("Please fill all class details.");
    return;
  }

  const newClass = {
    id: Date.now(),
    course: classForm.course,
    semester: classForm.semester,
    section: classForm.section.toUpperCase(),
    batch: classForm.batch,
    strength: Number(classForm.strength),
    status: "Active",
  };

  setClasses((prev) => [...prev, newClass]);

  setClassForm({
    course: "",
    semester: "",
    section: "",
    batch: "",
    strength: "",
  });

  setShowClassForm(false);
};

const handleDeleteClass = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this class?"
  );

  if (!confirmDelete) return;

  setClasses((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

const filteredClasses = classes.filter((item) => {
  const search = searchClass.toLowerCase();

  return (
    item.course.toLowerCase().includes(search) ||
    item.semester.toLowerCase().includes(search) ||
    item.section.toLowerCase().includes(search) ||
    item.batch.toLowerCase().includes(search)
  );
});
  // subject functon

  /* SUBJECT FUNCTIONS */

const handleSubjectInput = (e) => {
  const { name, value } = e.target;

  setSubjectForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleAddSubject = (e) => {
  e.preventDefault();

  if (
    !subjectForm.course ||
    !subjectForm.semester ||
    !subjectForm.subjectName ||
    !subjectForm.subjectCode ||
    !subjectForm.credits
  ) {
    alert("Please fill all subject details.");
    return;
  }

  const newSubject = {
    id: Date.now(),
    course: subjectForm.course,
    semester: subjectForm.semester,
    subjectName: subjectForm.subjectName,
    subjectCode: subjectForm.subjectCode.toUpperCase(),
    credits: Number(subjectForm.credits),
    status: "Active",
  };

  setSubjects((prev) => [...prev, newSubject]);

  setSubjectForm({
    course: "",
    semester: "",
    subjectName: "",
    subjectCode: "",
    credits: "",
  });

  setShowSubjectForm(false);
};

const handleDeleteSubject = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this subject?"
  );

  if (!confirmDelete) return;

  setSubjects((prev) =>
    prev.filter((subject) => subject.id !== id)
  );
};

const filteredSubjects = subjects.filter((subject) => {
  const search = searchSubject.toLowerCase();

  return (
    subject.course.toLowerCase().includes(search) ||
    subject.semester.toLowerCase().includes(search) ||
    subject.subjectName.toLowerCase().includes(search) ||
    subject.subjectCode.toLowerCase().includes(search)
  );
});
// teachger function
/* TEACHER FUNCTIONS */

const handleTeacherInput = (e) => {
  const { name, value } = e.target;

  setTeacherForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleAddTeacher = (e) => {
  e.preventDefault();

  if (
    !teacherForm.teacherId ||
    !teacherForm.name ||
    !teacherForm.email ||
    !teacherForm.phone ||
    !teacherForm.department
  ) {
    alert("Please fill all teacher details.");
    return;
  }

  const newTeacher = {
    id: Date.now(),
    teacherId: teacherForm.teacherId.toUpperCase(),
    name: teacherForm.name,
    email: teacherForm.email,
    phone: teacherForm.phone,
    department: teacherForm.department,
    status: "Active",
  };

  setTeachers((prev) => [...prev, newTeacher]);

  setTeacherForm({
    teacherId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  setShowTeacherForm(false);
};

const handleDeleteTeacher = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this teacher?"
  );

  if (!confirmDelete) return;

  setTeachers((prev) =>
    prev.filter((teacher) => teacher.id !== id)
  );
};

const filteredTeachers = teachers.filter((teacher) => {
  const search = searchTeacher.toLowerCase();

  return (
    teacher.teacherId.toLowerCase().includes(search) ||
    teacher.name.toLowerCase().includes(search) ||
    teacher.email.toLowerCase().includes(search) ||
    teacher.phone.toLowerCase().includes(search) ||
    teacher.department.toLowerCase().includes(search)
  );
});
/* STUDENT FUNCTIONS */

const handleStudentInput = (e) => {
  const { name, value } = e.target;

  setStudentForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleAddStudent = (e) => {
  e.preventDefault();

  if (
    !studentForm.studentId ||
    !studentForm.name ||
    !studentForm.course ||
    !studentForm.semester ||
    !studentForm.section ||
    !studentForm.email
  ) {
    alert("Please fill all student details.");
    return;
  }

  const newStudent = {
    id: Date.now(),
    studentId: studentForm.studentId.toUpperCase(),
    name: studentForm.name,
    course: studentForm.course,
    semester: studentForm.semester,
    section: studentForm.section.toUpperCase(),
    email: studentForm.email,
    status: "Active",
  };

  setStudents((prev) => [...prev, newStudent]);

  setStudentForm({
    studentId: "",
    name: "",
    course: "",
    semester: "",
    section: "",
    email: "",
  });

  setShowStudentForm(false);
};

const handleDeleteStudent = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this student?"
  );

  if (!confirmDelete) return;

  setStudents((prev) =>
    prev.filter((student) => student.id !== id)
  );
};

const filteredStudents = students.filter((student) => {
  const search = searchStudent.toLowerCase();

  return (
    student.studentId.toLowerCase().includes(search) ||
    student.name.toLowerCase().includes(search) ||
    student.course.toLowerCase().includes(search) ||
    student.semester.toLowerCase().includes(search) ||
    student.section.toLowerCase().includes(search) ||
    student.email.toLowerCase().includes(search)
  );
});
// CALENDAR FUNCTIONS
/* CALENDAR FUNCTIONS */

const handleCalendarInput = (e) => {
  const { name, value } = e.target;

  setCalendarForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleAddHoliday = (e) => {
  e.preventDefault();

  if (!calendarForm.date || !calendarForm.title) {
    alert("Please fill all holiday details.");
    return;
  }

  const selectedDate = new Date(calendarForm.date);

  const newHoliday = {
    id: Date.now(),
    date: calendarForm.date,
    title: calendarForm.title,
    type: "Holiday",
    status: "Declared",
  };

  setCalendar((prev) => [...prev, newHoliday]);

  setCalendarForm({
    date: "",
    title: "",
  });

  setShowCalendarForm(false);
};

const handleDeleteHoliday = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this holiday?"
  );

  if (!confirmDelete) return;

  setCalendar((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

const filteredCalendar = calendar
  .filter((item) => {
    const search = searchCalendar.toLowerCase();

    return (
      item.date.toLowerCase().includes(search) ||
      item.title.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search)
    );
  })
  .sort((a, b) => new Date(a.date) - new Date(b.date));
  // certificate
  const filteredCertificates = certificates.filter((certificate) => {
  const search = searchCertificate.toLowerCase();

  return (
    certificate.certificateId.toLowerCase().includes(search) ||
    certificate.studentId.toLowerCase().includes(search) ||
    certificate.studentName.toLowerCase().includes(search) ||
    certificate.course.toLowerCase().includes(search) ||
    certificate.month.toLowerCase().includes(search)
  );
});
  /* =========================
     DASHBOARD
  ========================= */

  const renderDashboard = () => (
    <>
      <div className="admin-heading">
        <div>
          <p className="admin-eyebrow">ADMINISTRATION</p>
          <h1>Admin Dashboard</h1>
          <p className="admin-date">
            Manage your academic attendance system from one place.
          </p>
        </div>
      </div>

      <div className="admin-stats">
        {stats.map((stat) => (
          <div className="admin-stat-card" key={stat.title}>
            <div className={`admin-stat-icon ${stat.type}`}>
              {stat.icon}
            </div>

            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="admin-welcome-card">
        <div>
          <span>ATTENDORA ADMIN</span>
          <h2>Keep your academic system organized.</h2>
          <p>
            Manage students, teachers, classes, subjects and academic
            calendars from a single dashboard.
          </p>
        </div>

        <div className="admin-welcome-icon">✓</div>
      </div>

      <div className="admin-section-title">
        <div>
          <p className="admin-eyebrow">MANAGEMENT</p>
          <h2>System Management</h2>
        </div>
      </div>

      <div className="admin-management-grid">
        {managementCards.map((card) => (
          <button
            className="admin-management-card"
            key={card.id}
            onClick={() => handleSectionChange(card.id)}
          >
            <div className="management-icon">{card.icon}</div>

            <div className="management-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>

            <span className="management-arrow">→</span>
          </button>
        ))}
      </div>

      <div className="admin-bottom-grid">
        <div className="admin-panel">
          <div className="admin-panel-heading">
            <div>
              <p className="admin-eyebrow">ACTIVITY</p>
              <h3>Recent Activity</h3>
            </div>

            <button className="admin-text-button">View All</button>
          </div>

          <div className="admin-activity-list">
            {recentActivity.map((activity, index) => (
              <div className="admin-activity-item" key={index}>
                <div className="activity-icon">✓</div>

                <div className="activity-info">
                  <strong>{activity.title}</strong>
                  <span>{activity.name}</span>
                </div>

                <small>{activity.time}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-panel admin-calendar-panel">
          <div className="admin-panel-heading">
            <div>
              <p className="admin-eyebrow">ACADEMIC</p>
              <h3>Calendar Overview</h3>
            </div>
          </div>

          <div className="calendar-overview">
            <div className="calendar-overview-item">
              <span>Working Days</span>
              <strong>22</strong>
            </div>

            <div className="calendar-overview-item">
              <span>Holidays</span>
              <strong>4</strong>
            </div>

            <div className="calendar-overview-item">
              <span>Sundays</span>
              <strong>4</strong>
            </div>
          </div>

          <button
            className="admin-calendar-button"
            onClick={() => handleSectionChange("calendar")}
          >
            Manage Calendar →
          </button>
        </div>
      </div>
    </>
  );

  /* =========================
     COURSES
  ========================= */

  const renderCourses = () => (
    <div className="admin-management-page">
      <button
        className="admin-back-button"
        onClick={() => setActiveSection("dashboard")}
      >
        ← Back to Dashboard
      </button>

      <div className="admin-page-header">
        <div>
          <p className="admin-eyebrow">ACADEMIC MANAGEMENT</p>
          <h1>Courses</h1>
          <p>Manage all academic courses offered by your institution.</p>
        </div>

        <button
          className="admin-primary-button"
          onClick={() => setShowCourseForm(!showCourseForm)}
        >
          + Add Course
        </button>
      </div>

      {showCourseForm && (
        <form className="course-form-card" onSubmit={handleAddCourse}>
          <div className="course-form-header">
            <div>
              <p className="admin-eyebrow">NEW COURSE</p>
              <h2>Add Course</h2>
            </div>

            <button
              type="button"
              className="course-close-button"
              onClick={() => setShowCourseForm(false)}
            >
              ×
            </button>
          </div>

          <div className="course-form-grid">
            <div className="admin-form-group">
              <label>Course Name</label>
              <input
                type="text"
                name="name"
                value={courseForm.name}
                onChange={handleCourseInput}
                placeholder="e.g. Bachelor of Computer Applications"
              />
            </div>

            <div className="admin-form-group">
              <label>Course Code</label>
              <input
                type="text"
                name="code"
                value={courseForm.code}
                onChange={handleCourseInput}
                placeholder="e.g. BCA"
              />
            </div>

            <div className="admin-form-group">
              <label>Duration</label>
              <select
                name="duration"
                value={courseForm.duration}
                onChange={handleCourseInput}
              >
                <option value="">Select duration</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
              </select>
            </div>
          </div>

          <div className="course-form-footer">
            <button
              type="button"
              className="admin-secondary-button"
              onClick={() => setShowCourseForm(false)}
            >
              Cancel
            </button>

            <button type="submit" className="admin-primary-button">
              Save Course
            </button>
          </div>
        </form>
      )}

      <div className="course-list-card">
        <div className="course-list-header">
          <div>
            <p className="admin-eyebrow">COURSE DIRECTORY</p>
            <h2>All Courses</h2>
          </div>

          <div className="course-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search course..."
              value={searchCourse}
              onChange={(e) => setSearchCourse(e.target.value)}
            />
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="course-table-wrapper">
            <table className="course-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Code</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.id}>
                    <td>
                      <div className="course-name-cell">
                        <div className="course-mini-icon">🎓</div>

                        <div>
                          <strong>{course.name}</strong>
                          <span>Academic Program</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="course-code">
                        {course.code}
                      </span>
                    </td>

                    <td>{course.duration}</td>

                    <td>
                      <span className="course-status">
                        {course.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="course-delete-button"
                        onClick={() =>
                          handleDeleteCourse(course.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-course-state">
            <div>📚</div>
            <h3>No courses found</h3>
            <p>Try another search or add a new course.</p>
          </div>
        )}
      </div>
    </div>
  );

  /* =========================
     SEMESTERS
  ========================= */

  const renderSemesters = () => (
    <div className="admin-management-page">
      <button
        className="admin-back-button"
        onClick={() => setActiveSection("dashboard")}
      >
        ← Back to Dashboard
      </button>

      <div className="admin-page-header">
        <div>
          <p className="admin-eyebrow">ACADEMIC MANAGEMENT</p>
          <h1>Semesters</h1>
          <p>
            Manage semesters and academic years for each course.
          </p>
        </div>

        <button
          className="admin-primary-button"
          onClick={() => setShowSemesterForm(!showSemesterForm)}
        >
          + Add Semester
        </button>
      </div>

      {showSemesterForm && (
        <form
          className="course-form-card"
          onSubmit={handleAddSemester}
        >
          <div className="course-form-header">
            <div>
              <p className="admin-eyebrow">NEW SEMESTER</p>
              <h2>Add Semester</h2>
            </div>

            <button
              type="button"
              className="course-close-button"
              onClick={() => setShowSemesterForm(false)}
            >
              ×
            </button>
          </div>

          <div className="course-form-grid">
            <div className="admin-form-group">
              <label>Course</label>

              <select
                name="course"
                value={semesterForm.course}
                onChange={handleSemesterInput}
              >
                <option value="">Select course</option>

                {courses.map((course) => (
                  <option key={course.id} value={course.code}>
                    {course.code} - {course.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="admin-form-group">
              <label>Semester</label>

              <select
                name="semester"
                value={semesterForm.semester}
                onChange={handleSemesterInput}
              >
                <option value="">Select semester</option>
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
                <option value="Semester 3">Semester 3</option>
                <option value="Semester 4">Semester 4</option>
                <option value="Semester 5">Semester 5</option>
                <option value="Semester 6">Semester 6</option>
                <option value="Semester 7">Semester 7</option>
                <option value="Semester 8">Semester 8</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label>Academic Year</label>

              <input
                type="text"
                name="academicYear"
                value={semesterForm.academicYear}
                onChange={handleSemesterInput}
                placeholder="e.g. 2026-27"
              />
            </div>
          </div>

          <div className="course-form-footer">
            <button
              type="button"
              className="admin-secondary-button"
              onClick={() => setShowSemesterForm(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="admin-primary-button"
            >
              Save Semester
            </button>
          </div>
        </form>
      )}

      <div className="course-list-card">
        <div className="course-list-header">
          <div>
            <p className="admin-eyebrow">SEMESTER DIRECTORY</p>
            <h2>All Semesters</h2>
          </div>

          <div className="course-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search semester..."
              value={searchSemester}
              onChange={(e) =>
                setSearchSemester(e.target.value)
              }
            />
          </div>
        </div>

        {filteredSemesters.length > 0 ? (
          <div className="course-table-wrapper">
            <table className="course-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Academic Year</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredSemesters.map((semester) => (
                  <tr key={semester.id}>
                    <td>
                      <div className="course-name-cell">
                        <div className="course-mini-icon">
                          🎓
                        </div>

                        <div>
                          <strong>{semester.course}</strong>
                          <span>Academic Course</span>
                        </div>
                      </div>
                    </td>

                    <td>{semester.semester}</td>

                    <td>
                      <span className="course-code">
                        {semester.academicYear}
                      </span>
                    </td>

                    <td>
                      <span className="course-status">
                        {semester.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="course-delete-button"
                        onClick={() =>
                          handleDeleteSemester(semester.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-course-state">
            <div>📅</div>
            <h3>No semesters found</h3>
            <p>
              Try another search or add a new semester.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderClasses = () => (
  <div className="admin-management-page">
    <button
      className="admin-back-button"
      onClick={() => setActiveSection("dashboard")}
    >
      ← Back to Dashboard
    </button>

    <div className="admin-page-header">
      <div>
        <p className="admin-eyebrow">ACADEMIC MANAGEMENT</p>
        <h1>Classes & Sections</h1>
        <p>
          Manage classes, sections, batches and student strength.
        </p>
      </div>

      <button
        className="admin-primary-button"
        onClick={() => setShowClassForm(!showClassForm)}
      >
        + Add Class
      </button>
    </div>

    {showClassForm && (
      <form
        className="course-form-card"
        onSubmit={handleAddClass}
      >
        <div className="course-form-header">
          <div>
            <p className="admin-eyebrow">NEW CLASS</p>
            <h2>Add Class & Section</h2>
          </div>

          <button
            type="button"
            className="course-close-button"
            onClick={() => setShowClassForm(false)}
          >
            ×
          </button>
        </div>

        <div className="course-form-grid">
          <div className="admin-form-group">
            <label>Course</label>

            <select
              name="course"
              value={classForm.course}
              onChange={handleClassInput}
            >
              <option value="">Select course</option>

              {courses.map((course) => (
                <option
                  key={course.id}
                  value={course.code}
                >
                  {course.code} - {course.name}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-form-group">
            <label>Semester</label>

            <select
              name="semester"
              value={classForm.semester}
              onChange={handleClassInput}
            >
              <option value="">Select semester</option>

              {semesters.map((semester) => (
                <option
                  key={semester.id}
                  value={semester.semester}
                >
                  {semester.course} - {semester.semester}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-form-group">
            <label>Section</label>

            <input
              type="text"
              name="section"
              value={classForm.section}
              onChange={handleClassInput}
              placeholder="e.g. A"
              maxLength="3"
            />
          </div>

          <div className="admin-form-group">
            <label>Academic Batch</label>

            <input
              type="text"
              name="batch"
              value={classForm.batch}
              onChange={handleClassInput}
              placeholder="e.g. 2025-26"
            />
          </div>

          <div className="admin-form-group">
            <label>Student Strength</label>

            <input
              type="number"
              name="strength"
              value={classForm.strength}
              onChange={handleClassInput}
              placeholder="e.g. 45"
              min="1"
            />
          </div>
        </div>

        <div className="course-form-footer">
          <button
            type="button"
            className="admin-secondary-button"
            onClick={() => setShowClassForm(false)}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="admin-primary-button"
          >
            Save Class
          </button>
        </div>
      </form>
    )}

    <div className="course-list-card">
      <div className="course-list-header">
        <div>
          <p className="admin-eyebrow">CLASS DIRECTORY</p>
          <h2>All Classes & Sections</h2>
        </div>

        <div className="course-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search class..."
            value={searchClass}
            onChange={(e) =>
              setSearchClass(e.target.value)
            }
          />
        </div>
      </div>

      {filteredClasses.length > 0 ? (
        <div className="course-table-wrapper">
          <table className="course-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Semester</th>
                <th>Section</th>
                <th>Batch</th>
                <th>Strength</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredClasses.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="course-name-cell">
                      <div className="course-mini-icon">
                        🏫
                      </div>

                      <div>
                        <strong>{item.course}</strong>
                        <span>Academic Course</span>
                      </div>
                    </div>
                  </td>

                  <td>{item.semester}</td>

                  <td>
                    <span className="course-code">
                      Section {item.section}
                    </span>
                  </td>

                  <td>{item.batch}</td>

                  <td>{item.strength} Students</td>

                  <td>
                    <span className="course-status">
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="course-delete-button"
                      onClick={() =>
                        handleDeleteClass(item.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-course-state">
          <div>🏫</div>

          <h3>No classes found</h3>

          <p>
            Try another search or add a new class.
          </p>
        </div>
      )}
    </div>
  </div>
);
// render subject

const renderSubjects = () => {
  return (
    <div className="admin-management-page">

      <div className="admin-page-header">
        <div>
          <button
            className="admin-secondary-button"
            onClick={() => setActiveSection("dashboard")}
          >
            ← Back to Dashboard
          </button>

          <h2>Subjects</h2>
          <p>Manage subjects for different courses and semesters.</p>
        </div>

        <button
          className="admin-primary-button"
          onClick={() => setShowSubjectForm(!showSubjectForm)}
        >
          + Add Subject
        </button>
      </div>

      {showSubjectForm && (
        <div className="course-form-card">

          <div className="course-form-header">
            <div>
              <h3>Add New Subject</h3>
              <p>Enter subject details below.</p>
            </div>

            <button
              className="course-close-button"
              onClick={() => setShowSubjectForm(false)}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleAddSubject}>

            <div className="course-form-grid">

              <div className="admin-form-group">
                <label>Course</label>

                <select
                  name="course"
                  value={subjectForm.course}
                  onChange={handleSubjectInput}
                >
                  <option value="">Select Course</option>

                  {courses.map((course) => (
                    <option key={course.id} value={course.code}>
                      {course.code}
                    </option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label>Semester</label>

                <select
                  name="semester"
                  value={subjectForm.semester}
                  onChange={handleSubjectInput}
                >
                  <option value="">Select Semester</option>

                  {semesters.map((semester) => (
                    <option
                      key={semester.id}
                      value={semester.semester}
                    >
                      {semester.course} - {semester.semester}
                    </option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label>Subject Name</label>

                <input
                  type="text"
                  name="subjectName"
                  value={subjectForm.subjectName}
                  onChange={handleSubjectInput}
                  placeholder="Enter subject name"
                />
              </div>

              <div className="admin-form-group">
                <label>Subject Code</label>

                <input
                  type="text"
                  name="subjectCode"
                  value={subjectForm.subjectCode}
                  onChange={handleSubjectInput}
                  placeholder="e.g. BCA101"
                />
              </div>

              <div className="admin-form-group">
                <label>Credits</label>

                <input
                  type="number"
                  name="credits"
                  value={subjectForm.credits}
                  onChange={handleSubjectInput}
                  placeholder="e.g. 4"
                  min="1"
                  max="10"
                />
              </div>

            </div>

            <div className="course-form-footer">
              <button
                type="button"
                className="admin-secondary-button"
                onClick={() => setShowSubjectForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-primary-button"
              >
                Add Subject
              </button>
            </div>

          </form>
        </div>
      )}

      <div className="course-list-card">

        <div className="course-list-header">
          <div>
            <h3>Subject List</h3>
            <p>{filteredSubjects.length} subjects found</p>
          </div>

          <input
            type="text"
            className="course-search"
            placeholder="Search subjects..."
            value={searchSubject}
            onChange={(e) => setSearchSubject(e.target.value)}
          />
        </div>

        <div className="course-table-wrapper">

          <table className="course-table">

            <thead>
              <tr>
                <th>Course</th>
                <th>Semester</th>
                <th>Subject</th>
                <th>Code</th>
                <th>Credits</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredSubjects.length > 0 ? (
                filteredSubjects.map((subject) => (
                  <tr key={subject.id}>

                    <td>
                      <div className="course-name-cell">
                        <div className="course-mini-icon">
                          {subject.course.charAt(0)}
                        </div>

                        <strong>{subject.course}</strong>
                      </div>
                    </td>

                    <td>{subject.semester}</td>

                    <td>
                      <strong>{subject.subjectName}</strong>
                    </td>

                    <td>
                      <span className="course-code">
                        {subject.subjectCode}
                      </span>
                    </td>

                    <td>{subject.credits}</td>

                    <td>
                      <span className="course-status">
                        {subject.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="course-delete-button"
                        onClick={() =>
                          handleDeleteSubject(subject.id)
                        }
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">
                    <div className="empty-course-state">
                      No subjects found.
                    </div>
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};
// render teacher

const renderTeachers = () => {
  return (
    <div className="admin-management-page">

      <div className="admin-page-header">
        <div>
          <button
            className="admin-secondary-button"
            onClick={() => setActiveSection("dashboard")}
          >
            ← Back to Dashboard
          </button>

          <h2>Teachers</h2>
          <p>Manage teachers and faculty information.</p>
        </div>

        <button
          className="admin-primary-button"
          onClick={() => setShowTeacherForm(!showTeacherForm)}
        >
          + Add Teacher
        </button>
      </div>

      {showTeacherForm && (
        <div className="course-form-card">

          <div className="course-form-header">
            <div>
              <h3>Add New Teacher</h3>
              <p>Enter teacher details below.</p>
            </div>

            <button
              className="course-close-button"
              onClick={() => setShowTeacherForm(false)}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleAddTeacher}>

            <div className="course-form-grid">

              <div className="admin-form-group">
                <label>Teacher ID</label>

                <input
                  type="text"
                  name="teacherId"
                  value={teacherForm.teacherId}
                  onChange={handleTeacherInput}
                  placeholder="e.g. TCH004"
                />
              </div>

              <div className="admin-form-group">
                <label>Teacher Name</label>

                <input
                  type="text"
                  name="name"
                  value={teacherForm.name}
                  onChange={handleTeacherInput}
                  placeholder="Enter teacher name"
                />
              </div>

              <div className="admin-form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={teacherForm.email}
                  onChange={handleTeacherInput}
                  placeholder="teacher@example.com"
                />
              </div>

              <div className="admin-form-group">
                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  value={teacherForm.phone}
                  onChange={handleTeacherInput}
                  placeholder="Enter phone number"
                  maxLength="10"
                />
              </div>

              <div className="admin-form-group">
                <label>Department</label>

                <select
                  name="department"
                  value={teacherForm.department}
                  onChange={handleTeacherInput}
                >
                  <option value="">
                    Select Department
                  </option>

                  <option value="Computer Science">
                    Computer Science
                  </option>

                  <option value="Computer Applications">
                    Computer Applications
                  </option>

                  <option value="Information Technology">
                    Information Technology
                  </option>

                  <option value="Mathematics">
                    Mathematics
                  </option>

                  <option value="Management">
                    Management
                  </option>
                </select>
              </div>

            </div>

            <div className="course-form-footer">

              <button
                type="button"
                className="admin-secondary-button"
                onClick={() => setShowTeacherForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-primary-button"
              >
                Add Teacher
              </button>

            </div>

          </form>
        </div>
      )}

      <div className="course-list-card">

        <div className="course-list-header">

          <div>
            <h3>Teacher List</h3>
            <p>
              {filteredTeachers.length} teachers found
            </p>
          </div>

          <input
            type="text"
            className="course-search"
            placeholder="Search teachers..."
            value={searchTeacher}
            onChange={(e) =>
              setSearchTeacher(e.target.value)
            }
          />

        </div>

        <div className="course-table-wrapper">

          <table className="course-table">

            <thead>
              <tr>
                <th>Teacher</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredTeachers.length > 0 ? (
                filteredTeachers.map((teacher) => (
                  <tr key={teacher.id}>

                    <td>
                      <div className="course-name-cell">

                        <div className="course-mini-icon">
                          {teacher.name.charAt(0)}
                        </div>

                        <div>
                          <strong>
                            {teacher.name}
                          </strong>

                          <div className="course-code">
                            {teacher.teacherId}
                          </div>
                        </div>

                      </div>
                    </td>

                    <td>{teacher.email}</td>

                    <td>{teacher.phone}</td>

                    <td>{teacher.department}</td>

                    <td>
                      <span className="course-status">
                        {teacher.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="course-delete-button"
                        onClick={() =>
                          handleDeleteTeacher(teacher.id)
                        }
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">
                    <div className="empty-course-state">
                      No teachers found.
                    </div>
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};
const renderStudents = () => (
  <div className="admin-management-page">

    <div className="admin-page-header">

      <div>
        <button
          className="admin-secondary-button"
          onClick={() => handleSectionChange("dashboard")}
        >
          ← Back to Dashboard
        </button>

        <p className="admin-eyebrow">STUDENT MANAGEMENT</p>

        <h1>Students</h1>

        <p>
          Manage student records and accounts.
        </p>
      </div>

      <button
        className="admin-primary-button"
        onClick={() => setShowStudentForm(!showStudentForm)}
      >
        + Add Student
      </button>

    </div>

    {showStudentForm && (
      <div className="course-form-card">

        <div className="course-form-header">
          <div>
            <p className="admin-eyebrow">
              NEW STUDENT
            </p>

            <h2>Add Student</h2>
          </div>

          <button
            className="course-close-button"
            onClick={() => setShowStudentForm(false)}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleAddStudent}>

          <div className="course-form-grid">

            <div className="admin-form-group">
              <label>Student ID</label>

              <input
                type="text"
                name="studentId"
                placeholder="STU004"
                value={studentForm.studentId}
                onChange={handleStudentInput}
              />
            </div>

            <div className="admin-form-group">
              <label>Student Name</label>

              <input
                type="text"
                name="name"
                placeholder="Student name"
                value={studentForm.name}
                onChange={handleStudentInput}
              />
            </div>

            <div className="admin-form-group">
              <label>Course</label>

              <select
                name="course"
                value={studentForm.course}
                onChange={handleStudentInput}
              >
                <option value="">
                  Select Course
                </option>

                {courses.map((course) => (
                  <option
                    key={course.id}
                    value={course.code}
                  >
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="admin-form-group">
              <label>Semester</label>

              <select
                name="semester"
                value={studentForm.semester}
                onChange={handleStudentInput}
              >
                <option value="">
                  Select Semester
                </option>

                {semesters.map((semester) => (
                  <option
                    key={semester.id}
                    value={semester.semester}
                  >
                    {semester.course} - {semester.semester}
                  </option>
                ))}
              </select>
            </div>

            <div className="admin-form-group">
              <label>Section</label>

              <input
                type="text"
                name="section"
                placeholder="A"
                value={studentForm.section}
                onChange={handleStudentInput}
              />
            </div>

            <div className="admin-form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="student@example.com"
                value={studentForm.email}
                onChange={handleStudentInput}
              />
            </div>

          </div>

          <div className="course-form-footer">

            <button
              type="button"
              className="admin-secondary-button"
              onClick={() => setShowStudentForm(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="admin-primary-button"
            >
              Add Student
            </button>

          </div>

        </form>

      </div>
    )}

    <div className="course-list-card">

      <div className="course-list-header">

        <div>
          <p className="admin-eyebrow">
            STUDENT RECORDS
          </p>

          <h2>All Students</h2>
        </div>

        <input
          type="text"
          className="course-search"
          placeholder="Search students..."
          value={searchStudent}
          onChange={(e) =>
            setSearchStudent(e.target.value)
          }
        />

      </div>

      <div className="course-table-wrapper">

        <table className="course-table">

          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Semester</th>
              <th>Section</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>

                  <td>
                    <div className="course-name-cell">

                      <div className="course-mini-icon">
                        {student.name.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {student.name}
                        </strong>

                        <div className="course-code">
                          {student.studentId}
                        </div>
                      </div>

                    </div>
                  </td>

                  <td>{student.course}</td>

                  <td>{student.semester}</td>

                  <td>{student.section}</td>

                  <td>{student.email}</td>

                  <td>
                    <span className="course-status">
                      {student.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="course-delete-button"
                      onClick={() =>
                        handleDeleteStudent(student.id)
                      }
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">

                  <div className="empty-course-state">
                    No students found.
                  </div>

                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>

  </div>
);
// render calendar
const renderCalendar = () => (
  <div className="admin-management-page">

    <div className="admin-page-header">

      <div>
        <button
          className="admin-secondary-button"
          onClick={() => handleSectionChange("dashboard")}
        >
          ← Back to Dashboard
        </button>

        <p className="admin-eyebrow">
          CALENDAR MANAGEMENT
        </p>

        <h1>Calendar & Holidays</h1>

        <p>
          Manage working days, Sundays and declared holidays.
        </p>
      </div>

      <button
        className="admin-primary-button"
        onClick={() => setShowCalendarForm(!showCalendarForm)}
      >
        + Add Holiday
      </button>

    </div>

    {showCalendarForm && (
      <div className="course-form-card">

        <div className="course-form-header">

          <div>
            <p className="admin-eyebrow">
              NEW HOLIDAY
            </p>

            <h2>Add Holiday</h2>
          </div>

          <button
            className="course-close-button"
            onClick={() => setShowCalendarForm(false)}
          >
            ×
          </button>

        </div>

        <form onSubmit={handleAddHoliday}>

          <div className="course-form-grid">

            <div className="admin-form-group">
              <label>Date</label>

              <input
                type="date"
                name="date"
                value={calendarForm.date}
                onChange={handleCalendarInput}
              />
            </div>

            <div className="admin-form-group">
              <label>Holiday Name</label>

              <input
                type="text"
                name="title"
                placeholder="e.g. Diwali Holiday"
                value={calendarForm.title}
                onChange={handleCalendarInput}
              />
            </div>

          </div>

          <div className="course-form-footer">

            <button
              type="button"
              className="admin-secondary-button"
              onClick={() => setShowCalendarForm(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="admin-primary-button"
            >
              Add Holiday
            </button>

          </div>

        </form>

      </div>
    )}

    <div className="course-list-card">

      <div className="course-list-header">

        <div>
          <p className="admin-eyebrow">
            HOLIDAY RECORDS
          </p>

          <h2>Declared Holidays</h2>
        </div>

        <input
          type="text"
          className="course-search"
          placeholder="Search holidays..."
          value={searchCalendar}
          onChange={(e) =>
            setSearchCalendar(e.target.value)
          }
        />

      </div>

      <div className="course-table-wrapper">

        <table className="course-table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Holiday</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredCalendar.length > 0 ? (
              filteredCalendar.map((item) => (
                <tr key={item.id}>

                  <td>{item.date}</td>

                  <td>
                    <div className="course-name-cell">

                      <div className="course-mini-icon">
                        H
                      </div>

                      <div>
                        <strong>
                          {item.title}
                        </strong>
                      </div>

                    </div>
                  </td>

                  <td>{item.type}</td>

                  <td>
                    <span className="course-status">
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="course-delete-button"
                      onClick={() =>
                        handleDeleteHoliday(item.id)
                      }
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <div className="empty-course-state">
                    No holidays found.
                  </div>
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>

  </div>
);
// certificate
const renderCertificates = () => (
  <div className="admin-management-page">

    <div className="admin-page-header">

      <div>
        <button
          className="admin-secondary-button"
          onClick={() => handleSectionChange("dashboard")}
        >
          ← Back to Dashboard
        </button>

        <p className="admin-eyebrow">
          CERTIFICATE MANAGEMENT
        </p>

        <h1>Certificates</h1>

        <p>
          View and manage monthly 100% attendance certificates.
        </p>
      </div>

    </div>

    <div className="course-list-card">

      <div className="course-list-header">

        <div>
          <p className="admin-eyebrow">
            CERTIFICATE RECORDS
          </p>

          <h2>Issued Certificates</h2>
        </div>

        <input
          type="text"
          className="course-search"
          placeholder="Search certificates..."
          value={searchCertificate}
          onChange={(e) =>
            setSearchCertificate(e.target.value)
          }
        />

      </div>

      <div className="course-table-wrapper">

        <table className="course-table">

          <thead>
            <tr>
              <th>Certificate</th>
              <th>Student</th>
              <th>Course</th>
              <th>Month</th>
              <th>Attendance</th>
              <th>Issue Date</th>
              <th>Status</th>
              <th>Verification</th>
            </tr>
          </thead>

          <tbody>

            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((certificate) => (
                <tr key={certificate.id}>

                  <td>
                    <div className="course-name-cell">

                      <div className="course-mini-icon">
                        C
                      </div>

                      <div>
                        <strong>
                          {certificate.certificateId}
                        </strong>

                        <div className="course-code">
                          {certificate.studentId}
                        </div>
                      </div>

                    </div>
                  </td>

                  <td>{certificate.studentName}</td>

                  <td>{certificate.course}</td>

                  <td>{certificate.month}</td>

                  <td>
                    <strong>
                      {certificate.attendance}
                    </strong>
                  </td>

                  <td>{certificate.issueDate}</td>

                  <td>
                    <span className="course-status">
                      {certificate.status}
                    </span>
                  </td>

                  <td>
                    <span className="course-status">
                      {certificate.verification}
                    </span>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">
                  <div className="empty-course-state">
                    No certificates found.
                  </div>
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>

  </div>
);
/* =========================
     PLACEHOLDER
  ========================= */

  const renderPlaceholder = () => {
    const current = managementCards.find(
      (card) => card.id === activeSection
    );

    return (
      <div className="admin-placeholder">
        <button
          className="admin-back-button"
          onClick={() => setActiveSection("dashboard")}
        >
          ← Back to Dashboard
        </button>

        <div className="admin-placeholder-card">
          <div className="admin-placeholder-icon">
            {current?.icon || "⚙️"}
          </div>

          <p className="admin-eyebrow">ADMIN MANAGEMENT</p>

          <h2>{current?.title || "Management"}</h2>

          <p>
            {current?.description ||
              "This section will be connected with the backend later."}
          </p>

          <span className="coming-soon-badge">
            Backend Integration Coming Next
          </span>
        </div>
      </div>
    );
  };

  /* =========================
     PROFILE
  ========================= */

  const renderProfile = () => (
    <div className="admin-placeholder">
      <div className="admin-profile-card">
        <div className="admin-profile-avatar">AD</div>

        <div>
          <p className="admin-eyebrow">ADMIN PROFILE</p>
          <h2>System Administrator</h2>
          <p>Attendora Administration</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <div className="admin-logo-mark">A</div>
          <h2>Attendora</h2>
        </div>

        <nav className="admin-nav">
          <button
            className={`admin-nav-item ${
              activeSection === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleSectionChange("dashboard")}
          >
            <span>⌂</span>
            Dashboard
          </button>

          <p className="admin-nav-title">MANAGEMENT</p>

          {[
            ["courses", "🎓", "Courses"],
            ["semesters", "📅", "Semesters"],
            ["classes", "🏫", "Classes"],
            ["subjects", "📚", "Subjects"],
            ["teachers", "👨‍🏫", "Teachers"],
            ["students", "👨‍🎓", "Students"],
          ].map(([id, icon, label]) => (
            <button
              key={id}
              className={`admin-nav-item ${
                activeSection === id ? "active" : ""
              }`}
              onClick={() => handleSectionChange(id)}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}

          <p className="admin-nav-title">SYSTEM</p>

          {[
            ["calendar", "🗓️", "Calendar"],
            ["certificates", "🏆", "Certificates"],
            ["profile", "👤", "Profile"],
          ].map(([id, icon, label]) => (
            <button
              key={id}
              className={`admin-nav-item ${
                activeSection === id ? "active" : ""
              }`}
              onClick={() => handleSectionChange(id)}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-tip">
            <span>💡</span>

            <p>
              Sundays and declared holidays are automatically excluded from
              attendance calculations.
            </p>
          </div>

          <button
            className="admin-nav-item admin-logout"
            onClick={() => (window.location.href = "/login")}
          >
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-right">
            <button className="admin-notification">🔔</button>

            <div className="admin-profile-mini">
              <div className="admin-avatar">AD</div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <section className="admin-content">
          {activeSection === "dashboard" && renderDashboard()}

          {activeSection === "courses" && renderCourses()}

          {activeSection === "semesters" && renderSemesters()}
          {activeSection === "classes" && renderClasses()}
          {activeSection === "subjects" && renderSubjects()}
          {activeSection === "teachers" && renderTeachers()}
          {activeSection === "students" && renderStudents()}
          {activeSection === "calendar" && renderCalendar()}
          {activeSection === "certificates" && renderCertificates()}

          {activeSection === "profile" && renderProfile()}

          {activeSection !== "dashboard" &&
            activeSection !== "courses" &&
            activeSection !== "semesters" &&
             activeSection !== "classes" &&
             activeSection !== "subjects" &&
              activeSection !== "teachers" &&
              activeSection !== "students" &&
              activeSection !== "calendar" &&
              activeSection !== "certificates" &&
            activeSection !== "profile" &&
            
            renderPlaceholder()}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;