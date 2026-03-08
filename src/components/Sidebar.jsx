import Logo from "./Logo";
import { navItems } from "../data/data";
import { GL, G, MU } from "../theme";

export default function Sidebar({ active, setActive, sideOpen, setSideOpen, mobileOpen, setMobileOpen, onLogout }) {

  const navigate = (key) => {
    setActive(key);
    setMobileOpen(false);
  };

  return (
    <div className={`sidebar ${sideOpen ? "open" : "closed"} ${mobileOpen ? "mobile-open" : ""}`}>

      {/* Logo */}
      <div className="sidebar-logo">
        <div style={{ flexShrink: 0 }}>
          <Logo size={34} />
        </div>
        <div className="sidebar-logotext">
          <div className="logo-name">Lumina</div>
          <div className="logo-sub">DASHBOARD</div>
        </div>
      </div>

      {/* Nav links */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "10px 0" }}>
        {navItems.map(item => (
          <div
            key={item.key}
            className={`nav-item ${active === item.key ? "active" : ""}`}
            onClick={() => navigate(item.key)}
          >
            <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Collapse button */}
      <div className="sidebar-footer-btn" onClick={() => setSideOpen(o => !o)}>
        <span style={{
          fontSize: 17, flexShrink: 0,
          transition: "transform 0.3s",
          transform: sideOpen ? "rotate(0deg)" : "rotate(180deg)",
          display: "inline-block",
        }}>◀</span>
        <span className="sidebar-footer-label">Collapse</span>
      </div>

      {/* Logout */}
      <div className="sidebar-footer-btn" onClick={onLogout}>
        <span style={{ fontSize: 17, flexShrink: 0 }}>🚪</span>
        <span className="sidebar-footer-label">Logout</span>
      </div>
    </div>
  );
}
