import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa'
import './Signup.css'

const API_URL = 'http://localhost:7000/api/v1'

const Signup = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    // Simple checks before calling the backend
    if (!form.username.trim() || !form.email.trim() || !form.password) {
      return setError('Please fill in all the fields.')
    }
    if (form.password.length < 6) {
      return setError('Password must be at least 6 characters.')
    }
    if (form.password !== form.confirmPassword) {
      return setError('Passwords do not match.')
    }

    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.username.trim(),
          email: form.email.trim(),
          password: form.password,
        }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Something went wrong. Try again.')
        return
      }

      setSuccess('Account created! Redirecting to sign in...')
      setTimeout(() => navigate('/signin'), 1500)
    } catch (error) {
      console.log(error)
      setError('Cannot reach the server. Is the backend running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>Create your account</h2>
        <p className="auth-subtitle">Sign up to start making your todo list.</p>

        {error && <div className="auth-alert auth-error">{error}</div>}
        {success && <div className="auth-alert auth-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-field">
            <span>Username</span>
            <div className="auth-input">
              <FaUser className="auth-icon" />
              <input
                type="text"
                name="username"
                placeholder="Your name"
                autoComplete="username"
                value={form.username}
                onChange={handleChange}
              />
            </div>
          </label>

          <label className="auth-field">
            <span>Email</span>
            <div className="auth-input">
              <FaEnvelope className="auth-icon" />
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

          <label className="auth-field">
            <span>Password</span>
            <div className="auth-input">
              <FaLock className="auth-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="At least 6 characters"
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="auth-eye"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Show or hide password"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          <label className="auth-field">
            <span>Confirm password</span>
            <div className="auth-input">
              <FaLock className="auth-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Repeat your password"
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </label>

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </main>
  )
}

export default Signup