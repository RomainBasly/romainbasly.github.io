import logo from '../../../../Assets/Images/Logo-blanc.png'
import './index.css' // Import the CSS file
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="nav-logo" onClick={() => scroll.scrollToTop()}>
          <a href="/">
            <img src={logo.src} alt="logo" />
          </a>
        </div>
        <div className="mobile-icon">
          <FaBars className="burger" onClick={toggle} />
        </div>
        <div className="nav-menu">
          <div className="nav-items">
            <a href="/about" className="nav-links">
              <span className="number">1. </span> About
            </a>
            <a href="/about#projects" onClick={toggle} className="nav-links">
              <span className="number">2. </span> Projects
            </a>
            <a href="/about#contact" onClick={toggle} className="nav-links">
              <span className="number">3. </span> Contact
            </a>
            <ExternalLink
              href="https://adatechschool.fr/entreprise/"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="number">4. </span> Ada Tech School
            </ExternalLink>
          </div>
        </div>
        <div className="resume-container">
          <a href="/CV/CV_Romain_Basly_septembre2024.pdf" download>
            <button className="download-resume">Resume</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
