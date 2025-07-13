import { useState, useRef, useEffect } from "react"
import {
  MdCreate,
  MdDelete,
  MdOutlinePushPin,
  MdMoreVert,
  MdFavoriteBorder,
  MdStarBorder,
  MdLabelImportantOutline,
  MdFavorite,
  MdStar,
} from "react-icons/md"
import moment from "moment"

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onPinNote,
  onEdit,
  onDelete,
  isFavourite,
  onImportant,
  onFavourite,
  onStar,
  isStarred,
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef()

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative rounded-2xl p-5 bg-gradient-to-br from-violet-50 via-white to-violet-100 shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer max-w-full overflow-hidden">
      
      {/* Header with title & 3-dot */}
      <div className="flex items-start justify-between">
        <div className="max-w-[85%]">
          <h2 className="text-lg font-semibold text-slate-800 truncate">{title}</h2>
          <p className="text-xs text-blue-500 mt-1">{moment(date).format("Do MMM YYYY")}</p>
        </div>

        {/* 3-dot dropdown */}
        <div className="relative" ref={menuRef}>
          <MdMoreVert
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-36 overflow-y-auto no-scrollbar">
              <button
                onClick={() => {
                  onPinNote()
                  setShowMenu(false)
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100"
              >
                <MdOutlinePushPin className={`text-base ${isPinned ? "text-blue-500" : "text-gray-500"}`} />
                {isPinned ? "Unpin Note" : "Pin Note"}
              </button>

              <button
                onClick={() => {
                  onEdit()
                  setShowMenu(false)
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100"
              >
                <MdCreate className="text-green-500" />
                Edit Note
              </button>

              <button
                onClick={() => {
                  onDelete()
                  setShowMenu(false)
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100"
              >
                <MdDelete className="text-red-500" />
                Delete Note
              </button>

              <button
                onClick={() => {
                  onFavourite?.()
                  setShowMenu(false)
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100"
              >
                {isFavourite ? (
                  <>
                    <MdFavorite className="text-red-500" />
                    <span className="text-black">Remove from Favorites</span>
                  </>
                ) : (
                  <>
                    <MdFavoriteBorder className="text-gray-500" />
                    <span className="text-gray-700">Add to Favorites</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onStar?.()
                  setShowMenu(false)
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100"
              >
                {isStarred ? (
                  <>
                    <MdStar className="text-yellow-500" />
                    <span className="text-black">Unmark Starred</span>
                  </>
                ) : (
                  <>
                    <MdStarBorder className="text-gray-500" />
                    <span className="text-gray-700">Mark as Starred</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onImportant?.()
                  setShowMenu(false)
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100"
              >
                <MdLabelImportantOutline className="text-red-600" />
                Mark as Important
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 📝 Render Rich Content */}
      <div
        className="text-sm text-slate-600 mt-3 line-clamp-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>

      {/* 🏷️ Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((item, i) => (
          <span
            key={i}
            className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default NoteCard
