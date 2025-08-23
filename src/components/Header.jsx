import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/logout`, {withCredentials : true})

      if (response.data.success) {
        navigate("/")
      } else {
        alert("Cannot Logout")
      }
    } catch (error) {
      alert("Server error", error)
    }
  }
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / App Name */}
          <NavLink to="/" className="text-2xl font-bold text-indigo-600">
            MyApp
          </NavLink>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700 hover:text-indigo-600 transition ${
                  isActive ? 'font-semibold text-indigo-600' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-gray-700 hover:text-indigo-600 transition ${
                  isActive ? 'font-semibold text-indigo-600' : ''
                }`
              }
            >
              Dashboard
            </NavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <NavLink
              to="/signin"
              className="px-4 py-2 rounded-md text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Sign Up
            </NavLink>
            <button
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
