import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { resultData, pieData } from "../data/data";
import { G, D2, T, MU, D4 } from "../theme";

const PIE_COLORS = [G, "#E05A5A", "#5AADDA"];

const stats = [
  { label: "Total Students", value: "284", icon: "🎓", sub: "+12 this semester" },
  { label: "Active Courses",  value: "18",  icon: "📚", sub: "5 departments"     },
  { label: "Faculties",       value: "32",  icon: "👥", sub: "8 on leave"        },
  { label: "Library Books",   value: "1,240",icon: "📖", sub: "98 checked out"  },
];

const activity = [
  { time: "2 min ago", text: "Blessing Okoro enrolled in Advanced Mathematics" },
  { time: "1 hr ago",  text: "Dr. Michael Eze submitted Physics exam results"  },
  { time: "3 hr ago",  text: "Library: 'Python Programming' returned by Taiwo Afolabi" },
  { time: "Today",     text: "Chat room: 14 new messages from students" },
];

const tooltipStyle = {
  background: D2,
  border: `1px solid ${G}55`,
  borderRadius: 8,
  color: T,
  fontSize: 12,
};

export default function PageDashboard() {
  return (
    <>
      {/* Stat Cards */}
      <div className="stat-grid">
        {stats.map(s => (
          <div className="stat-card" key={s.label}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="chart-grid">
        <div className="card">
          <div className="card-title">Results by Subject</div>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={resultData} barSize={16}>
              <CartesianGrid strokeDasharray="3 3" stroke={`${G}18`} />
              <XAxis dataKey="subject" tick={{ fill: T, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: T, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ color: T, fontSize: 12 }} />
              <Bar dataKey="pass" name="Passed" fill={G}      radius={[4, 4, 0, 0]} />
              <Bar dataKey="fail" name="Failed" fill="#E05A5A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-title">Overall Results</div>
          <ResponsiveContainer width="100%" height={210}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%" cy="50%"
                outerRadius={80} innerRadius={42}
                dataKey="value"
                paddingAngle={3}
              >
                {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ color: T, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="card-title">Recent Activity</div>
        {activity.map((item, i) => (
          <div className="activity-row" key={i} style={{ borderBottom: i < activity.length - 1 ? undefined : "none" }}>
            <div className="activity-dot" />
            <div>
              <div style={{ fontSize: 14, color: T }}>{item.text}</div>
              <div style={{ fontSize: 11, color: MU, marginTop: 3 }}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
