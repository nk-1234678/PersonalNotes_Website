import React, { useState } from "react"
import { MdSort } from "react-icons/md"
import { FaTimes } from "react-icons/fa"

const NoteFilters = ({ onFilter }) => {
  const [sortBy, setSortBy] = useState("latest")
  const [tag, setTag] = useState("")
  const [showSortMenu, setShowSortMenu] = useState(false)

  const handleSortChange = (value) => {
    setSortBy(value)
    setShowSortMenu(false)
    onFilter({ sortBy: value, tag })
  }

  const handleTagChange = (e) => {
    const newTag = e.target.value
    setTag(newTag)
    onFilter({ sortBy, tag: newTag })
  }

  return (
    <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 mb-6 gap-3">
      
      {/* Filter by Tag */}
      <input
        type="text"
        placeholder="Filter by tag"
        value={tag}
        onChange={handleTagChange}
        className="px-3 py-1.5 border rounded-md w-full sm:w-[180px] text-sm"
      />

      {/* Sort Button */}
      <div className="relative">
        <button
          onClick={() => setShowSortMenu(!showSortMenu)}
          className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition text-sm"
        >
          <MdSort className="text-xl" />
          <span className="hidden sm:inline">Sort</span>
        </button>

        {/* Sort Dropdown */}
        {showSortMenu && (
          <div className="absolute top-[110%] right-0 mt-2 w-52 bg-white border rounded shadow-md z-50">
            <button
              onClick={() => handleSortChange("latest")}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                sortBy === "latest" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              🕒 Latest
            </button>
            <button
              onClick={() => handleSortChange("oldest")}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                sortBy === "oldest" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              🗓️ Oldest
            </button>
            <button
              onClick={() => handleSortChange("az")}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                sortBy === "az" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              🔤 Title A-Z
            </button>
            <button
              onClick={() => handleSortChange("za")}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                sortBy === "za" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              🔡 Title Z-A
            </button>
            <button
              onClick={() => setShowSortMenu(false)}
              className="text-sm text-gray-500 px-4 py-2 w-full text-right"
            >
              <FaTimes className="inline-block mr-1" />
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NoteFilters
