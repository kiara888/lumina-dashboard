import { useState } from "react";
import Logo from "./Logo";

export default function Login({ onLogin }) {
  const [email,   setEmail]   = useState("");
  const [pass,    setPass]    = useState("");
  const [err,     setErr]     = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw,  setShowPw]  = useState(false);

  const handle = () => {
    if (!email || !pass) { setErr("Please fill in all fields."); return; }
    if (!email.toLowerCase().endsWith("@gmail.com")) {
      setErr("Please use a valid @gmail.com address.");
      return;
    }
    setLoading(true);
    setErr("");
    setTimeout(() => onLogin(), 900);
  };

  const onKey = (e) => { if (e.key === "Enter") handle(); };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-glow" />

        {/* Logo */}
        <div className="login-logo-wrap">
          <Logo size={60} />
          <div className="login-brand">Lumina</div>
          <div className="login-sub">DASHBOARD</div>
        </div>

        {/* Email */}
        <label className="login-label">Email Address</label>
        <input
          className="login-input"
          value={email}
          onChange={e => { setEmail(e.target.value); setErr(""); }}
          onKeyDown={onKey}
          placeholder="yourname@gmail.com"
        />

        {/* Password */}
        <label className="login-label">Password</label>
        <div className="pw-wrap">
          <input
            className="login-input"
            type={showPw ? "text" : "password"}
            value={pass}
            onChange={e => { setPass(e.target.value); setErr(""); }}
            onKeyDown={onKey}
            placeholder="Enter any password"
            style={{ paddingRight: 44, marginBottom: 0 }}
          />
          <span className="pw-toggle" onClick={() => setShowPw(v => !v)}>
            {showPw ? "🙈" : "👁️"}
          </span>
        </div>

        {err && <div className="login-error">{err}</div>}

        <div className="forgot-link">Forgot password?</div>

        <button className="login-btn" onClick={handle} disabled={loading}>
          {loading ? "Signing in..." : "SIGN IN"}
        </button>

        <div className="login-hint">
          Use any <span style={{ color: "#C9A84C" }}>@gmail.com</span> email with any password
        </div>
      </div>
    </div>
  );
}
