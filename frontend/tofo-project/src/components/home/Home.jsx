import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaPlus,
  FaBolt,
  FaCloud,
  FaMobileAlt,
  FaTasks,
  FaCheckCircle,
  FaArrowRight,
  FaUserPlus,
  FaSignInAlt,
} from 'react-icons/fa'
import { request, LIST_URL } from '../../api'
import './Home.css'

const steps = [
  { title: 'Create an account', text: 'Sign up once with your email.' },
  { title: 'Add your tasks', text: 'Write a title and details for each task.' },
  { title: 'Edit or delete', text: 'Keep your list up to date anytime.' },
]

const Home = () => {
  // Saved by Signin
  const userId = localStorage.getItem('userId')
  const username = localStorage.getItem('username')

  const [stats, setStats] = useState({ total: 0, done: 0 })

  // If signed in, ask the backend for this user's tasks and count them
  useEffect(() => {
    if (!userId) return

    const loadStats = async () => {
      try {
        const data = await request(`${LIST_URL}/getTasks/${userId}`)
        const list = data.list || []

        // Done ticks are saved in the browser by the Todo page
        let doneIds = []
        try {
          doneIds = JSON.parse(localStorage.getItem(`todo-done-${userId}`)) || []
        } catch {
          doneIds = []
        }

        setStats({
          total: list.length,
          done: list.filter((t) => doneIds.includes(t._id)).length,
        })
      } catch {
        // If the server is off, just keep showing zeros
      }
    }

    loadStats()
  }, [userId])

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <span className="hero-badge">Stay organized</span>
          <h1>
            Plan your day, <span>one task at a time</span>
          </h1>
          <p>
            Create your own todo list, add tasks, edit them and tick them off.
            Everything is saved to your account, so it is always there when you
            come back.
          </p>

          <div className="hero-buttons">
            <Link to="/todo" className="hero-btn hero-btn-primary">
              <FaPlus /> Make Your Todo List
            </Link>
            <Link to="/about" className="hero-btn hero-btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL: changes depending on sign in */}
        <div className="hero-panel">
          {userId ? (
            <>
              <span className="panel-tag">Your workspace</span>
              <h3>Welcome back, {username || 'User'}</h3>
              <p className="panel-text">Here is a quick look at your tasks.</p>

              <div className="panel-stats">
                <div className="stat">
                  <FaTasks className="stat-icon" />
                  <strong>{stats.total}</strong>
                  <span>Total tasks</span>
                </div>
                <div className="stat">
                  <FaCheckCircle className="stat-icon" />
                  <strong>{stats.done}</strong>
                  <span>Completed</span>
                </div>
              </div>

              <Link to="/todo" className="panel-btn">
                Go to my tasks <FaArrowRight />
              </Link>
            </>
          ) : (
            <>
              <span className="panel-tag">Get started</span>
              <h3>Start in 3 simple steps</h3>

              <ol className="panel-steps">
                {steps.map((step, index) => (
                  <li key={step.title}>
                    <span className="panel-step-number">{index + 1}</span>
                    <div>
                      <b>{step.title}</b>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="panel-actions">
                <Link to="/signup" className="panel-btn">
                  <FaUserPlus /> Sign Up
                </Link>
                <Link to="/signin" className="panel-btn panel-btn-outline">
                  <FaSignInAlt /> Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <FaBolt className="feature-icon" />
          <h4>Fast and simple</h4>
          <p>Add a task in seconds with a clean and easy form.</p>
        </div>
        <div className="feature">
          <FaCloud className="feature-icon" />
          <h4>Saved online</h4>
          <p>Your tasks are stored in the database, not lost on refresh.</p>
        </div>
        <div className="feature">
          <FaMobileAlt className="feature-icon" />
          <h4>Works everywhere</h4>
          <p>The layout adjusts to phones, tablets and computers.</p>
        </div>
      </section>
    </main>
  )
}

export default Home