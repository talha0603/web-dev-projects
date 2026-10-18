import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  FaClipboardList,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaChevronDown,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from 'react-icons/fa'
import './Navbar.css'

// Read the signed-in user from localStorage (saved by Signin)
const readUser = () => {
  const id = localStorage.getItem('userId')
  const name = localStorage.getItem('username')
  return id ? { id, name: name || 'User' } : null
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  const [user, setUser] = useState(readUser)

  // Signin fires "auth-change" after saving the user, so re-read it here
  useEffect(() => {
    const sync = () => setUser(readUser())
    window.addEventListener('auth-change', sync)
    return () => window.removeEventListener('auth-change', sync)
  }, [])

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    setUser(null)
    closeAll()
    navigate('/')
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        {/* LEFT: logo */}
        <Link to="/" className="nav-logo" onClick={closeAll}>
          <FaClipboardList className="nav-logo-icon" />
          <span>Todo</span>
        </Link>

        {/* MIDDLE: page links */}
        <nav className={`nav-center ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={closeAll}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeAll}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/todo" onClick={closeAll}>Todo</NavLink>
            </li>
          </ul>
        </nav>

        {/* RIGHT: account dropdown + mobile menu button */}
        <div className="nav-right">
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <FaUserCircle className="dropdown-user-icon" />
              {user && <span className="dropdown-name">{user.name}</span>}
              <FaChevronDown
                className={`dropdown-arrow ${dropdownOpen ? 'rotate' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <ul className="dropdown-menu">
                {user ? (
                  <>
                    <li className="dropdown-header">
                      Signed in as <b>{user.name}</b>
                    </li>
                    <li>
                      <button
                        className="dropdown-item danger"
                        onClick={handleLogout}
                      >
                        <FaSignOutAlt /> Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/signin" className="dropdown-item" onClick={closeAll}>
                        <FaSignInAlt /> Sign In
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown-item" onClick={closeAll}>
                        <FaUserPlus /> Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>

          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar