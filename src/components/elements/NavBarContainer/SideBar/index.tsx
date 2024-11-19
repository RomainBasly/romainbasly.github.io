import { FaTimes } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import './index.css'
import { useStore } from '@nanostores/react'
import { isNavBarOpen } from '../../../utils'

function Sidebar({ toggle }: Readonly<{ toggle: () => void }>) {
  const $isNavBarOpen = useStore(isNavBarOpen)
  return (
    <aside
      className={`sidebar-container ${$isNavBarOpen ? 'open' : 'closed'}`}
      onClick={toggle}
    >
      <div className="icon">
        <FaTimes className="close-icon" onClick={toggle} />
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <li>
            <a href="/" className="sidebar-link">
              Blog
            </a>
          </li>
          <li>
            <a href="/about" className="sidebar-link">
              About
            </a>
          </li>
          <li>
            <a href="/projects" onClick={toggle} className="sidebar-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggle} className="sidebar-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="side-btn-wrap"></div>
      </div>
    </aside>
  )
}

export default Sidebar
