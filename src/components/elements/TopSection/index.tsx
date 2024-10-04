import { Link as LinkScroll } from 'react-scroll'
import './index.css'

export function TopSection() {
  return (
    <div className="container">
      <p className="greetings">Hi there! My name is</p>
      <h4 className="name">Romain BASLY.</h4>
      <p className="description">Fullstack Developer based in Paris.</p>
      <p className="goal">Specialized in ReactJS / NextJS and NodeJS.</p>
      <LinkScroll
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={1500}
      >
        <button className="showMe">Show me some projects</button>
      </LinkScroll>
      <a
        className="resumeContainer"
        href="/CV/CV_Romain_Basly_septembre2024.pdf"
        download
      >
        <button className="resumé">Download my resume</button>
      </a>
    </div>
  )
}

export default TopSection
