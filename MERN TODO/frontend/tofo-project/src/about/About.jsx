import { Link } from 'react-router-dom'
import {
  FaUserPlus,
  FaListUl,
  FaEdit,
  FaTrashAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaArrowRight,
} from 'react-icons/fa'
import { SiRedux, SiExpress } from 'react-icons/si'
import './About.css'

const steps = [
  {
    icon: <FaUserPlus />,
    title: 'Create an account',
    text: 'Sign up once and your tasks stay linked to you.',
  },
  {
    icon: <FaListUl />,
    title: 'Add your tasks',
    text: 'Write a title and details for everything you need to do.',
  },
  {
    icon: <FaEdit />,
    title: 'Edit anytime',
    text: 'Change a task whenever your plan changes.',
  },
  {
    icon: <FaTrashAlt />,
    title: 'Delete when done',
    text: 'Remove finished tasks to keep your list clean.',
  },
]

const tech = [
  { icon: <FaReact />, name: 'React', text: 'Builds the user interface' },
  { icon: <SiRedux />, name: 'RTK Query', text: 'Fetches and caches data' },
  { icon: <SiExpress />, name: 'Express', text: 'Handles the API routes' },
  { icon: <FaNodeJs />, name: 'Node.js', text: 'Runs the server' },
  { icon: <FaDatabase />, name: 'MongoDB', text: 'Stores users and tasks' },
]

const About = () => {
  return (
    <main className="about">
      {/* HERO */}
      <section className="about-hero">
        <span className="about-badge">About Us</span>
        <h1>
          A simple way to <span>stay on top of your tasks</span>
        </h1>
        <p>
          Todo is a full-stack MERN app built to make task management easy.
          You can create, view, update and delete your tasks, and everything is
          saved safely in the database.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="about-section">
        <h2>How it works</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step.title}>
              <span className="step-number">{index + 1}</span>
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="about-section">
        <h2>Built with</h2>
        <div className="tech">
          {tech.map((item) => (
            <div className="tech-card" key={item.name}>
              <div className="tech-icon">{item.icon}</div>
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <h2>Ready to get organized?</h2>
        <p>Start your own todo list in less than a minute.</p>
        <Link to="/todo" className="about-btn">
          Make Your Todo List <FaArrowRight />
        </Link>
      </section>
    </main>
  )
}

export default About