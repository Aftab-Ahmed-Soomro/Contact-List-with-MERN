import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/login`,
        data,
        { withCredentials: true }
      )
      console.log(response)
      setData(response?.data?.data)
      navigate('/dashboard')
    } catch (error) {
      console.log('Something went wrong while signing in', error)
      alert('Cannot Signin')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Sign In
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md shadow-md hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don&apos;t have an account?{' '}
          <NavLink
            to="/signup"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Signin
