import { Link, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  const isActive = (path) =>
    location.pathname === path ? 'nav-link active' : 'nav-link'

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo-text">Ujjwal Karki</span>
      </div>

      <div className="nav-center">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/about" className={isActive('/about')}>About Me</Link>
        <Link to="/projects" className={isActive('/projects')}>Projects</Link>
      </div>

      <div className="nav-right">
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <BsSun /> : <BsMoon />}
        </button>

        <a href="https://github.com/UjjwalKarkeyy" target="_blank" rel="noreferrer" className="icon-link">
          <FaGithub />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
