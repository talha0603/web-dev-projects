import { Link } from 'react-router-dom'
import { FaClipboardList } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <FaClipboardList className="footer-logo-icon" />
            <span>Todo</span>
          </Link>
          <p>
            A simple MERN app to create, edit and manage your daily tasks.
            Everything is saved to your account.
          </p>
        </div>

        {/* Page links */}
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>
        </div>

        {/* Account links */}
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        {/* Tech */}
        <div className="footer-col">
          <h4>Built with</h4>
          <ul>
            <li>React</li>
            <li>Express and Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Todo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer