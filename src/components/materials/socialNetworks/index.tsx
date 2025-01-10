import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'

import './index.css'
import CalendlySVG from '../SVG/Calendly'

const SocialNetworks = () => {
  return (
    <div className="logo-container">
      <ExternalLink
        href="https://calendly.com/romain-basly/first-contact"
        target="_blank"
        rel="noreferrer"
      >
        <CalendlySVG className="logo-calendly" />
      </ExternalLink>
      <ExternalLink
        href="https://github.com/RomainBasly"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="logo-github" />
      </ExternalLink>
      <ExternalLink
        href="http://www.linkedin.com/in/romainbasly"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn className="logo-linkedin" />
      </ExternalLink>

      <div className="line-socials" />
    </div>
  )
}

export default SocialNetworks
