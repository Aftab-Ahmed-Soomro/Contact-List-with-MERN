import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">MyApp</h2>
            <p className="mt-3 text-sm text-gray-400">
              A modern Auth + CRUD application with a beautiful UI built using
              React & Tailwind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-indigo-400 transition"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="hover:text-indigo-400 transition"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signin"
                  className="hover:text-indigo-400 transition"
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="hover:text-indigo-400 transition"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-indigo-400 transition text-xl"
              >
                🌐
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition text-xl"
              >
                📧
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition text-xl"
              >
                📱
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
