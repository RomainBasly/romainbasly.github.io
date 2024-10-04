import { useState } from 'react'
import Navbar from './NavBar/index.tsx'
import Sidebar from './SideBar/index.tsx'

const NavBarContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
  )
}

export default NavBarContainer
