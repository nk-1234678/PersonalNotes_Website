// src/components/DashboardComponents/DashboardGrid.jsx
import NotesBarChart from "./charts/NotesBarChart"
import TopTagsPieChart from "./charts/TopTagsPieChart"
import TimeSpentPieChart from "./charts/TimeSpentPieChart"

const DashboardGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
      {/* 🔹 Left side (9/12) - 2 rows: recent notes + chart */}
      <div className="col-span-12 lg:col-span-9 grid grid-rows-2 gap-6">
        
        {/* 🟣 Recent Notes */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-700">📝 Recent Notes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats?.recentNotes?.length > 0 ? (
            stats.recentNotes.map((note) => (
                <div key={note._id} className="bg-gray-100 p-3 rounded shadow">
                <h3 className="text-sm font-semibold text-gray-700">{note.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{note.content}</p>
                <span className="text-[10px] text-gray-400">
                    {new Date(note.createdAt).toLocaleDateString()}
                </span>
                </div>
            ))
            ) : (
            <p>No recent notes</p>
            )}

          </div>
        </div>

        {/* 🔵 Notes Per Day Chart */}
        <div className="bg-white rounded-lg shadow p-4 h-[260px]">
          <NotesBarChart data={stats.notesPerDay} />
        </div>
      </div>

      {/* 🔸 Right side (3/12) - 2 stacked charts */}
      <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow p-4 h-[200px]">
          <TopTagsPieChart data={stats.topTags} />
        </div>
        <div className="bg-white rounded-lg shadow p-4 h-[200px]">
          <TimeSpentPieChart data={stats.timeSpent} />
        </div>
      </div>
    </div>
  )
}

export default DashboardGrid
