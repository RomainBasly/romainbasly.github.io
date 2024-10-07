import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import './index.css'

const SocialNetworks = () => {
  return (
    <div className="logo-container">
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
      <div className="line" />
    </div>
  )
}

export default SocialNetworks
