import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import { ExternalLink } from 'react-external-link'
import './index.css' // Import the external CSS file

function Sidebar({
  isOpen,
  toggle,
}: Readonly<{ isOpen: boolean; toggle: () => void }>) {
  return (
    <aside
      className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}
      onClick={toggle}
    >
      <div className="icon">
        <FaTimes className="close-icon" onClick={toggle} />
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <li>
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              className="sidebar-link"
            >
              About
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              className="sidebar-link"
            >
              Projects
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              className="sidebar-link"
            >
              Contact
            </LinkScroll>
          </li>
          <li>
            <ExternalLink
              href="https://adatechschool.fr/entreprise/"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-external"
            >
              Ada Tech School
            </ExternalLink>
          </li>
        </ul>
        <div className="side-btn-wrap"></div>
      </div>
    </aside>
  )
}

export default Sidebar
