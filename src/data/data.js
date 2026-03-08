// ── Navigation ────────────────────────────────────────────────
export const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "⊞" },
  { key: "courses",   label: "Courses",   icon: "📚" },
  { key: "students",  label: "Students",  icon: "🎓" },
  { key: "faculties", label: "Faculties", icon: "👥" },
  { key: "library",   label: "Library",   icon: "📖" },
  { key: "chat",      label: "Chat Room", icon: "💬" },
  { key: "support",   label: "Support",   icon: "🛟" },
];

// ── Chart data ────────────────────────────────────────────────
export const resultData = [
  { subject: "Math",    pass: 78, fail: 22 },
  { subject: "English", pass: 85, fail: 15 },
  { subject: "Science", pass: 72, fail: 28 },
  { subject: "History", pass: 90, fail: 10 },
  { subject: "CS",      pass: 68, fail: 32 },
];

export const pieData = [
  { name: "Passed",  value: 74 },
  { name: "Failed",  value: 18 },
  { name: "Pending", value: 8  },
];

// ── Courses ───────────────────────────────────────────────────
export const courses = [
  { id: 1, name: "Advanced Mathematics", teacher: "Dr. James Okafor",   students: 42, status: "Active"   },
  { id: 2, name: "English Literature",   teacher: "Mrs. Grace Adeyemi", students: 38, status: "Active"   },
  { id: 3, name: "Computer Science",     teacher: "Mr. Samuel Nwosu",   students: 55, status: "Active"   },
  { id: 4, name: "World History",        teacher: "Ms. Fatima Bello",   students: 31, status: "Inactive" },
  { id: 5, name: "Physics",             teacher: "Dr. Michael Eze",    students: 29, status: "Active"   },
  { id: 6, name: "Chemistry",           teacher: "Mrs. Ngozi Ibrahim", students: 33, status: "Active"   },
];

// ── Students ──────────────────────────────────────────────────
export const students = [
  { id: 1, name: "Amara Obi",      email: "amara.obi@lumina.edu",      course: "Mathematics", grade: "A",  status: "Active"   },
  { id: 2, name: "Daniel Musa",    email: "daniel.musa@lumina.edu",    course: "CS",          grade: "B+", status: "Active"   },
  { id: 3, name: "Sofia Adeyemi",  email: "sofia.adeyemi@lumina.edu",  course: "English",     grade: "A-", status: "Active"   },
  { id: 4, name: "Emeka Nwosu",    email: "emeka.nwosu@lumina.edu",    course: "History",     grade: "B",  status: "Inactive" },
  { id: 5, name: "Chioma Eze",     email: "chioma.eze@lumina.edu",     course: "Physics",     grade: "A+", status: "Active"   },
  { id: 6, name: "Yusuf Garba",    email: "yusuf.garba@lumina.edu",    course: "Chemistry",   grade: "C+", status: "Active"   },
  { id: 7, name: "Blessing Okoro", email: "blessing.okoro@lumina.edu", course: "Mathematics", grade: "B-", status: "Active"   },
  { id: 8, name: "Taiwo Afolabi",  email: "taiwo.afolabi@lumina.edu",  course: "CS",          grade: "A",  status: "Active"   },
];

// ── Faculties ─────────────────────────────────────────────────
export const faculties = [
  { id: 1, name: "Dr. James Okafor",   dept: "Mathematics",     email: "j.okafor@lumina.edu", courses: 3, status: "Active"   },
  { id: 2, name: "Mrs. Grace Adeyemi", dept: "English",         email: "g.adeyemi@lumina.edu",courses: 2, status: "Active"   },
  { id: 3, name: "Mr. Samuel Nwosu",   dept: "Computer Science",email: "s.nwosu@lumina.edu",  courses: 4, status: "Active"   },
  { id: 4, name: "Mrs. Ngozi Ibrahim", dept: "Chemistry",       email: "n.ibrahim@lumina.edu",courses: 2, status: "Active"   },
  { id: 5, name: "Dr. Michael Eze",    dept: "Physics",         email: "m.eze@lumina.edu",    courses: 3, status: "Inactive" },
];

// ── Library ───────────────────────────────────────────────────
export const library = [
  { id: 1, title: "Calculus Made Easy",      author: "Silvanus Thompson",  category: "Mathematics",     available: true  },
  { id: 2, title: "Python Programming",      author: "Eric Matthes",       category: "Computer Science",available: false },
  { id: 3, title: "Things Fall Apart",       author: "Chinua Achebe",      category: "Literature",      available: true  },
  { id: 4, title: "A Brief History of Time", author: "Stephen Hawking",    category: "Physics",         available: true  },
  { id: 5, title: "The African Child",       author: "Camara Laye",        category: "Literature",      available: false },
  { id: 6, title: "Chemistry in Context",    author: "Lucy Pryde Eubanks", category: "Chemistry",       available: true  },
  { id: 7, title: "Africa: A Biography",     author: "John Reader",        category: "History",         available: true  },
];

// ── Chat ──────────────────────────────────────────────────────
export const initialMessages = [
  { id: 1, sender: "Admin",       text: "Welcome to the Lumina chat room! Ask any questions here.", time: "09:00 AM", admin: true,  av: "A"  },
  { id: 2, sender: "Amara Obi",   text: "Hello! When is the next Maths exam?",                      time: "09:05 AM", admin: false, av: "AO" },
  { id: 3, sender: "Admin",       text: "Maths exam is March 15th. Cover chapters 5–8.",            time: "09:07 AM", admin: true,  av: "A"  },
  { id: 4, sender: "Chioma Eze",  text: "Can the Physics lab deadline be extended?",                 time: "09:15 AM", admin: false, av: "CE" },
  { id: 5, sender: "Daniel Musa", text: "I second that — the experiment took much longer!",          time: "09:16 AM", admin: false, av: "DM" },
];

export const studentRepliers = [
  { name: "Amara Obi",      av: "AO" },
  { name: "Daniel Musa",    av: "DM" },
  { name: "Chioma Eze",     av: "CE" },
  { name: "Blessing Okoro", av: "BO" },
  { name: "Taiwo Afolabi",  av: "TA" },
];
