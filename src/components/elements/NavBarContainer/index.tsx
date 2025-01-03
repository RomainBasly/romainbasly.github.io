import { useStore } from '@nanostores/react'
import Navbar from './NavBar/index.tsx'
import Sidebar from './SideBar/index.tsx'
import { isNavBarOpen } from '../../utils/index.tsx'

const NavBarContainer = ({ imageUrl }: { imageUrl: string }) => {
  const $isNavBarOpen = useStore(isNavBarOpen)

  const toggle = () => {
    isNavBarOpen.set(!$isNavBarOpen)
  }

  return (
    <div>
      <Sidebar toggle={toggle} />
      <Navbar toggle={toggle} imageUrl={imageUrl} />
    </div>
  )
}

export default NavBarContainer
