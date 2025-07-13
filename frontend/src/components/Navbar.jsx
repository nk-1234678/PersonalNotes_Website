import { useState } from "react"
import { useLocation, useNavigate, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import axios from "axios"
import { toast } from "react-toastify"

import SearchBar from "./SearchBar/SearchBar"
import ProfileInfo from "./Cards/ProfileInfo"
import {
  signInSuccess,
  signoutFailure,
  signoutStart,
} from "../redux/user/userSlice"
import WelcomeSection from "./DashboardComponents/WelcomeSection"


const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isDashboard = location.pathname === "/user/dashboard"

  const handleSearch = () => {
    if (searchQuery) onSearchNote(searchQuery)
  }

  const onClearSearch = () => {
    setSearchQuery("")
    handleClearSearch()
  }

  const onLogout = async () => {
    try {
      dispatch(signoutStart())

      const res = await axios.get("http://localhost:3000/api/auth/signout", {
        withCredentials: true,
      })

      if (res.data.success === false) {
        dispatch(signoutFailure(res.data.message))
        toast.error(res.data.message)
        return
      }

      toast.success(res.data.message)
      dispatch(signInSuccess())
      navigate("/login")
    } catch (error) {
      toast.error(error.message)
      dispatch(signoutFailure(error.message))
    }
  }

  return (
    <div
      className={`flex items-center justify-between px-4 py-1 drop-shadow transition-all duration-300 h-30 ${
        isDashboard ? "bg-transparent " : "bg-white "
      }`}
    >
      <div>
        {isDashboard ? (
         <WelcomeSection userInfo={userInfo}/>

        ) : (
          <Link to={"/"}>
            <h2 className="text-xl font-medium text-black py-2">
              <span className="text-slate-500">Good</span>
              <span className="text-slate-900">Notes</span>
            </h2>
          </Link>
        )}
      </div>

      <div
        className={`flex items-center gap-4 ${
          isDashboard ? "justify-end flex-1" : ""
        }`}
      >
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
      </div>
    </div>
  )
}

Navbar.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  onSearchNote: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired,
}

export default Navbar
