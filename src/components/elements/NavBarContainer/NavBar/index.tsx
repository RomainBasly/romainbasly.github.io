import './index.css'
import { FaBars } from 'react-icons/fa'

const Navbar = ({
  toggle,
  imageUrl,
}: {
  toggle: () => void
  imageUrl: string
}) => {
  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="nav-logo">
          <a href="/">
            <img src={imageUrl} alt="logo" />
          </a>
        </div>
        <div className="mobile-icon">
          <FaBars className="burger" onClick={toggle} />
        </div>
        <div className="nav-menu">
          <div className="nav-items">
            <a href="/" className="nav-links">
              <span className="number">1. </span> Blog
            </a>
            <a href="/about" className="nav-links">
              <span className="number">2. </span> About
            </a>
            <a href="/projects" className="nav-links">
              <span className="number">3. </span> Projects
            </a>
            <a href="/contact" className="nav-links">
              <span className="number">4. </span> Contact
            </a>
          </div>
        </div>
        <div className="resume-container">
          <a href="/CV/CV_Romain_Basly_feb2025_Chef_projet_PO.pdf" download>
            <button className="download-resume">Resume</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
