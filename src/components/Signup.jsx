import { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
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
        `${import.meta.env.VITE_API_BASE_URL}/api/register`,
        data
      )
      console.log(response?.data?.data)
      navigate('/signin')
    } catch (error) {
      console.log('Something went wrong while signing up', error)
      alert('Cannot Signup')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Sign Up
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={data.name}
            name="name"
            onChange={handleOnChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={handleOnChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={handleOnChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md shadow-md hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{' '}
          <NavLink
            to="/signin"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Signup
