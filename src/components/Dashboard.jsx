import { useState, useEffect } from "react";
import Sidebar      from "./Sidebar";
import Topbar       from "./Topbar";
import DataTable    from "./DataTable";
import PageDashboard from "./PageDashboard";
import PageChat     from "./PageChat";
import PageSupport  from "./PageSupport";
import { courses, students, faculties, library } from "../data/data";

const SectionTitle = ({ text }) => (
  <div className="section-title">{text}</div>
);

export default function Dashboard({ onLogout }) {
  const [active,     setActive]     = useState("dashboard");
  const [sideOpen,   setSideOpen]   = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search,     setSearch]     = useState("");

  // Close mobile sidebar on window resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isChat = active === "chat";

  const renderPage = () => {
    switch (active) {
      case "dashboard":
        return <PageDashboard />;

      case "courses":
        return (
          <>
            <SectionTitle text="Courses" />
            <DataTable
              data={courses} search={search}
              cols={[
                { k: "id",       l: "#"          },
                { k: "name",     l: "Course Name" },
                { k: "teacher",  l: "Teacher"     },
                { k: "students", l: "Students"    },
                { k: "status",   l: "Status", badge: true },
              ]}
            />
          </>
        );

      case "students":
        return (
          <>
            <SectionTitle text="Students" />
            <DataTable
              data={students} search={search}
              cols={[
                { k: "id",     l: "#"      },
                { k: "name",   l: "Name"   },
                { k: "email",  l: "Email"  },
                { k: "course", l: "Course" },
                { k: "grade",  l: "Grade"  },
                { k: "status", l: "Status", badge: true },
              ]}
            />
          </>
        );

      case "faculties":
        return (
          <>
            <SectionTitle text="Faculties" />
            <DataTable
              data={faculties} search={search}
              cols={[
                { k: "id",      l: "#"          },
                { k: "name",    l: "Name"        },
                { k: "dept",    l: "Department"  },
                { k: "email",   l: "Email"       },
                { k: "courses", l: "Courses"     },
                { k: "status",  l: "Status", badge: true },
              ]}
            />
          </>
        );

      case "library":
        return (
          <>
            <SectionTitle text="Library" />
            <DataTable
              data={library} search={search}
              cols={[
                { k: "id",        l: "#"        },
                { k: "title",     l: "Title"    },
                { k: "author",    l: "Author"   },
                { k: "category",  l: "Category" },
                { k: "available", l: "Status", badge: true },
              ]}
            />
          </>
        );

      case "chat":
        return (
          <>
            <SectionTitle text="💬 Student Chat Room" />
            <PageChat />
          </>
        );

      case "support":
        return (
          <>
            <SectionTitle text="Support" />
            <PageSupport />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">

      {/* Mobile dark overlay */}
      <div
        className={`overlay ${mobileOpen ? "show" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={setActive}
        sideOpen={sideOpen}
        setSideOpen={setSideOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onLogout={onLogout}
      />

      {/* Main area */}
      <div className="main">
        <Topbar
          active={active}
          search={search}
          setSearch={setSearch}
          setMobileOpen={setMobileOpen}
        />

        <div
          className="content-area"
          style={{ overflowY: isChat ? "hidden" : "auto" }}
        >
          <div
            className="content-inner"
            style={{ minHeight: isChat ? "100%" : "auto" }}
          >
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
}
