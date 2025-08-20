import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-3xl text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-indigo-600">MyApp</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A modern authentication + CRUD application built with React and
          Tailwind CSS.  
          Manage your tasks, update your profile, and enjoy a smooth experience.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/signup"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
          >
            Get Started
          </NavLink>
          <NavLink
            to="/signin"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
