# 🌟 Lumina Dashboard

A responsive school management dashboard built with React + Vite.

---

## 📁 Project Structure

```
lumina/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          ← Entry point
    ├── App.jsx           ← Root (Login / Dashboard toggle)
    ├── index.css         ← All global styles
    ├── theme.js          ← Colour constants
    ├── data/
    │   └── data.js       ← All static data (courses, students, etc.)
    └── components/
        ├── Logo.jsx          ← Heart SVG logo
        ├── Login.jsx         ← Login screen
        ├── Sidebar.jsx       ← Left navigation sidebar
        ├── Topbar.jsx        ← Top header bar
        ├── Dashboard.jsx     ← Main layout + page routing
        ├── DataTable.jsx     ← Reusable table component
        ├── PageDashboard.jsx ← Home page (charts + stats)
        ├── PageChat.jsx      ← Live AI chat room
        └── PageSupport.jsx   ← Support & FAQ page
```

---

## 🚀 How to Run

### 1. Install Node.js
Download from https://nodejs.org (LTS version recommended)

### 2. Open the project in VS Code
```
File → Open Folder → select the `lumina` folder
```

### 3. Open the terminal in VS Code
```
Terminal → New Terminal
```

### 4. Install dependencies
```bash
npm install
```

### 5. Start the dev server
```bash
npm run dev
```

### 6. Open in browser
Visit: **http://localhost:5173**

---

## 🔐 Login
- Email: any `@gmail.com` address (e.g. `john@gmail.com`)
- Password: anything (not empty)

---

## ✨ Features
- 📊 Dashboard with Bar Chart & Pie Chart (exam results)
- 📚 Courses, Students, Faculties, Library tables (searchable)
- 💬 Live Chat Room with AI student replies (powered by Claude)
- 📱 Fully responsive — works on mobile, tablet, desktop
- 🔽 Collapsible sidebar
- 🌙 Dark grey & gold theme
