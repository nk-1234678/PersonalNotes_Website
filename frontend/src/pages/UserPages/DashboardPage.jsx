// src/pages/DashboardPage.jsx
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Navbar from "../../components/Navbar"
import DashboardGrid from "../../components/DashboardComponents/DashboardInsights"

const DashboardPage = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [userInfo, setUserInfo] = useState(null)
  const [stats, setStats] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate("/login")
    } else {
      setUserInfo(currentUser?.rest)
      fetchStats()
    }
  }, [currentUser, navigate])

  const fetchStats = async () => {
    try {
      const res = await axios.get("/api/note/stats", {
        headers: { Authorization: `Bearer ${currentUser.token}` },
      })

      const { notesPerDay, topTags, averageNoteLength, recentNotes } = res.data

      console.log("✅ recentNotes:", recentNotes)

      setStats({ notesPerDay, topTags, averageNoteLength, recentNotes }) // ✅ structured clean object
    } catch (error) {
      console.error("❌ Failed to fetch stats:", error)
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Navbar
        userInfo={userInfo}
        onSearchNote={() => {}}
        handleClearSearch={() => {}}
      />

      <div className="p-6 max-w-7xl w-full mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-gray-700">📊 Dashboard Insights</h1>

        {!stats ? (
          <p>Loading stats...</p>
        ) : (
          <DashboardGrid stats={stats} />
        )}
      </div>
    </div>
  )
}

export default DashboardPage
