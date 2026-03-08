import { useState, useRef, useEffect } from "react";
import { initialMessages, studentRepliers } from "../data/data";
import { G, MU, T } from "../theme";

// ── Anthropic API call ────────────────────────────────────────
async function getStudentReply(adminText) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system:
        "You are a student in the Lumina school dashboard chat room. Reply to the admin as a student would — casually, briefly (1-2 sentences), naturally. Sound like a real Nigerian/African student. Keep it short and conversational.",
      messages: [{ role: "user", content: adminText }],
    }),
  });
  const data = await res.json();
  return data.content?.[0]?.text || "Noted, thanks!";
}

export default function PageChat() {
  const [msgs,   setMsgs]   = useState(initialMessages);
  const [input,  setInput]  = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const sendMsg = async () => {
    if (!input.trim() || typing) return;
    const txt  = input.trim();
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setMsgs(prev => [...prev, { id: Date.now(), sender: "Admin", text: txt, time, admin: true, av: "A" }]);
    setInput("");
    setTyping(true);

    try {
      const reply = await getStudentReply(txt);
      const who   = studentRepliers[Math.floor(Math.random() * studentRepliers.length)];
      const rTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMsgs(prev => [...prev, { id: Date.now() + 1, sender: who.name, text: reply, time: rTime, admin: false, av: who.av }]);
    } catch {
      const who   = studentRepliers[Math.floor(Math.random() * studentRepliers.length)];
      const rTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMsgs(prev => [...prev, { id: Date.now() + 1, sender: who.name, text: "Thanks for the update!", time: rTime, admin: false, av: who.av }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className="chat-outer">

      {/* Header bar */}
      <div className="chat-header">
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4CAF50", boxShadow: "0 0 6px #4CAF5088" }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: T }}>Live Chat Room</span>
        <span style={{ marginLeft: "auto", fontSize: 12, color: MU }}>{msgs.length} messages</span>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {msgs.map(m => (
          <div key={m.id} className={`msg-row ${m.admin ? "admin" : ""}`}>
            <div className={`msg-avatar ${m.admin ? "admin" : "student"}`}>{m.av}</div>
            <div className="msg-body">
              <div className="msg-meta">{m.sender} · {m.time}</div>
              <div className={`msg-bubble ${m.admin ? "admin" : "student"}`}>{m.text}</div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <div className="typing-row">
            <div className="msg-avatar student">···</div>
            <div className="typing-dots">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input bar */}
      <div className="chat-input-bar">
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMsg()}
          placeholder={typing ? "Student is typing..." : "Type a message as Admin..."}
          disabled={typing}
          style={{ opacity: typing ? 0.6 : 1 }}
        />
        <button className="chat-send" onClick={sendMsg} disabled={typing}>➤</button>
      </div>
    </div>
  );
}
