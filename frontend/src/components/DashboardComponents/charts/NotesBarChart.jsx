// src/components/Charts/NotesBarChart.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const NotesBarChart = ({ data }) => (
  <div className="bg-white p-4 rounded shadow h-[200px]">
    <h2 className="text-sm font-semibold mb-1 text-gray-700">Notes per Day</h2>
    <ResponsiveContainer width="100%" height={120}>
      <BarChart data={data}>
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Bar dataKey="count" fill="#4F46E5" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default NotesBarChart
