import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './about/About'
import Todo from './components/todo/Todo'
import Signup from './signup/Signup'
import Signin from './signup/Signin'
import Footer from './footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}