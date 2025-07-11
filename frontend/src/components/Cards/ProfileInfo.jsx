import PropTypes from "prop-types"
import { useState, useRef, useEffect } from "react"
import { getInitials } from "../../utils/helper"
import { useNavigate } from "react-router-dom"


const ProfileInfo = ({ onLogout, userInfo }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  const handleToggle = () => setIsOpen(!isOpen)

  const handleDashboard = () => {
    navigate("/user/dashboard")
    setIsOpen(false)
  }

  const handleLogout = () => {
    onLogout()
    setIsOpen(false)
    navigate("/")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative flex items-center gap-3 " ref={dropdownRef}>
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100 cursor-pointer"
        onClick={handleToggle}
      >
        {getInitials(userInfo?.username)}
      </div>

      <div>
        <p className="text-sm font-medium">{userInfo?.username}</p>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-14 w-40 bg-white shadow-lg rounded-md border z-50">
          <button
            onClick={handleDashboard}
            className="w-full text-left px-4 py-2 hover:bg-slate-100"
          >
            Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-slate-100 text-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

// ✅ Add PropTypes validation
ProfileInfo.propTypes = {
  onLogout: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProfileInfo
