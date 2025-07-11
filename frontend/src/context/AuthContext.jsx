// 📁 context/AuthContext.jsx
import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get("/api/user/me", { withCredentials: true })
        setUser(res.data)
      } catch (err) {
        setUser(null)
      }
    }

    checkLogin()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
