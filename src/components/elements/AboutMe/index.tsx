import Image from '../../../Assets/Images/RB-photo.png'
import './index.css'

const AboutMeComponent = () => {
  return (
    <div id="about">
      <div className="title">
        <span style={{ color: '#FF5C39', fontWeight: '400' }}>1. </span> About
        Me
      </div>
      <div className="section-about">
        <div className="presentation-text">
          <div className="paragraph">
            After completing a 9-month program at{' '}
            <a
              href="https://adatechschool.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Ada Tech School
            </a>
            , I worked for a year as an apprentice in a company creating Web3
            products with:
            <div className="skills-container">
              <li className="skill">
                <span>React 16</span>
              </li>
              <li className="skill">
                <span>TypeScript</span>
              </li>
              <li className="skill">
                <span>NodeJS</span>
              </li>
              <li className="skill">
                <span>SASS</span>
              </li>
              <li className="skill">
                <span>Cypress</span>
              </li>
            </div>
          </div>
          <div className="paragraph">
            I worked on several
            <span style={{ color: '#FF5C39', marginLeft: '3px' }}>
              web solutions
            </span>{' '}
            that simplify users' day-to-day activities:
            <li className="project-details">
              Never forget your grocery lists at home! With
              <a
                href="https://www.simplists.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Simplists
              </a>
              , this situation is over. This{' '}
              <a
                href="https://web.dev/explore/progressive-web-apps"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                PWA
              </a>{' '}
              simplifies the creation and{' '}
              <span style={{ color: '#FF5C39', margin: '0px 3px' }}>
                sharing
              </span>{' '}
              of lists with your relatives (groceries, books, movies, etc.). And
              good news, it's available on your{' '}
              <span style={{ color: '#FF5C39', margin: '0px 3px' }}>
                mobile phone
              </span>{' '}
              through{' '}
              <a
                href="https://www.simplists.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Simplists
              </a>
              .
            </li>
            <li className="project-details">
              A remedy against boredom! Create memes about a cute little
              <a
                href="https://jotchua-maker.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Jotchua
              </a>{' '}
              and share them with your friends!
            </li>
          </div>
          <div className="paragraph">
            I’m driven by curiosity, a love for problem-solving, and a constant
            desire to learn.
          </div>
          <div className="paragraph">
            Currently, I’m open to new opportunities (missions, CDD, CDI), so
            don’t hesitate to reach out if you have a project in mind.
          </div>
        </div>
        <div className="images-container">
          <div className="cadre"></div>
          <img src={Image.src} className="photo" alt="picture of a gentleman" />
        </div>
      </div>
    </div>
  )
}

export default AboutMeComponent
