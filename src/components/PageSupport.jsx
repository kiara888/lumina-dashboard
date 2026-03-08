import { G, T, MU } from "../theme";

const faqs = [
  ["How do I reset my password?",    "Click 'Forgot password' on the login screen."],
  ["How do I enrol in a course?",    "Visit the Courses section and contact your faculty."],
  ["Where can I find exam results?", "Results are shown on the Dashboard charts."],
];

export default function PageSupport() {
  return (
    <>
      <div className="card">
        <div className="card-title">Contact IT Support</div>
        <p style={{ color: "#bbb", fontSize: 14, lineHeight: 1.8 }}>
          Reach out via the chat room or email{" "}
          <span style={{ color: G }}>support@lumina.edu</span>.
          <br />
          Response within 2 hours during business hours.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Frequently Asked Questions</div>
        {faqs.map(([q, a], i) => (
          <div className="faq-item" key={i}>
            <div style={{ color: T, fontWeight: 600, fontSize: 14 }}>Q: {q}</div>
            <div style={{ color: MU, fontSize: 13, marginTop: 4 }}>A: {a}</div>
          </div>
        ))}
      </div>
    </>
  );
}
