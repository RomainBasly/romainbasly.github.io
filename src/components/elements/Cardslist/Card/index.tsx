import { FaGithub } from 'react-icons/fa'
import { TbArrowUpRightCircle } from 'react-icons/tb'
import { ExternalLink } from 'react-external-link'
import Notion from '../../../materials/SVG/Notion'
import './index.css'
import DesignIcon from '../../../materials/SVG/Design'
import WebsiteIcon from '../../../materials/SVG/Website'
import GithubIcon from '../../../materials/SVG/Github'
import TrelloIcon from '../../../materials/SVG/Trello'

export const Card = ({ data }: any) => {
  return data.projects.map((item: any) => (
    <div key={item.id} className="global-container">
      <h3 className="project-title">{item.title}</h3>
      <div className="project-container">
        <div className="project-text">
          <h3>Genesis</h3>
          <div className="project-description">{item.DescriptionTop}</div>
          <div className="project-description">{item.DescriptionBottom}</div>
          <div className="links">
            <h4 className="h4-title">Links:</h4>
            <ExternalLink href={item.urlNotion} className="link">
              {item.urlNotion !== '' && (
                <div className="svg-container">
                  {/* <img src="/Images/logos/notion.svg" className="svg-project" /> */}
                  <Notion />
                </div>
              )}
            </ExternalLink>
            <ExternalLink href={item.urlExcalidraw} className="link">
              {item.urlExcalidraw !== '' && (
                <div className="svg-container">
                  <DesignIcon />
                </div>
              )}
            </ExternalLink>
            <ExternalLink href={item.urlGithub} className="link">
              {item.urlGithub !== '' && (
                <div className="svg-container">
                  <GithubIcon />
                </div>
              )}
            </ExternalLink>
            <ExternalLink href={item.urlTrello} className="link">
              {item.urlTrello !== '' && (
                <div className="svg-container">
                  <TrelloIcon />
                </div>
              )}
            </ExternalLink>
            {item.AdditionalLink !== '' && (
              <ExternalLink href={item.AdditionalLink} className="link">
                <div className="svg-container">
                  <WebsiteIcon />
                </div>
              </ExternalLink>
            )}
          </div>
        </div>
        <div className="card-project">
          <img className="img" src={item.urlGif} alt={item.alt}></img>
          <div className="project-stack">
            <ul className="list">
              <li className="project-details">{item.StacksFront}</li>
              {item.StacksBack !== '' && (
                <li className="project-details">{item.StacksBack}</li>
              )}
              {item.OtherStacks !== '' && (
                <li className="project-details">{item.OtherStacks}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ))
}

export default Card
