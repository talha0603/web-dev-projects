import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { request, AUTH_URL } from '../api'
import './Signin.css'

const Signin = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!form.email.trim() || !form.password) {
      return setError('Please enter your email and password.')
    }

    try {
      setLoading(true)

      // POST /api/v1/signin  { email, password }
      const data = await request(`${AUTH_URL}/signin`, {
        method: 'POST',
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password,
        }),
      })

      // The backend replies { others: { _id, username, email, ... } }
      const user = data.others

      // Remember who is signed in (Navbar and Todo read these)
      localStorage.setItem('userId', user._id)
      localStorage.setItem('username', user.username || 'User')
      localStorage.setItem('email', user.email)

      // Tell the Navbar to re-read the user right now
      window.dispatchEvent(new Event('auth-change'))

      setSuccess('Signed in! Redirecting...')
      setTimeout(() => navigate('/todo'), 1000)
    } catch (err) {
      // Shows backend messages like "Please Sign Up First ..."
      // or "Password Is Incorrect :)"
      setError(err.message || 'Cannot reach the server. Is the backend running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="signin-page">
      <div className="signin-card">
        <h2>Welcome back</h2>
        <p className="signin-subtitle">Sign in to see your todo list.</p>

        {error && <div className="signin-alert signin-error">{error}</div>}
        {success && <div className="signin-alert signin-success">{success}</div>}

        <form onSubmit={handleSubmit} className="signin-form">
          <label className="signin-field">
            <span>Email</span>
            <div className="signin-input">
              <FaEnvelope className="signin-icon" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </label>

          <label className="signin-field">
            <span>Password</span>
            <div className="signin-input">
              <FaLock className="signin-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="signin-eye"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Show or hide password"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          <button type="submit" className="signin-submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="signin-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </main>
  )
}

export default Signin