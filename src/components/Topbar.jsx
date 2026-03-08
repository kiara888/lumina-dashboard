import { navItems } from "../data/data";

export default function Topbar({ active, search, setSearch, setMobileOpen }) {
  const pageLabel = navItems.find(n => n.key === active)?.label || "";

  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Hamburger — visible only on mobile via CSS */}
        <button className="hamburger" onClick={() => setMobileOpen(o => !o)}>☰</button>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#F0E6C8" }}>{pageLabel}</div>
          <div style={{ fontSize: 11, color: "#C9A84C", marginTop: 1 }}>
            Welcome back, Admin · {new Date().toDateString()}
          </div>
        </div>
      </div>

      <div className="topbar-right">
        <input
          className="topbar-search"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="avatar-btn">A</div>
      </div>
    </div>
  );
}
