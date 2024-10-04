import { FaGithub } from 'react-icons/fa'
import { TbArrowUpRightCircle } from 'react-icons/tb'
import { ExternalLink } from 'react-external-link'
import './index.css'

export const Card = ({ data }: any) => {
  return data.projects.map((item: any) => (
    <div key={item.id} className="card-project">
      <h3 className="project-title">{item.title}</h3>
      <img className="img" src={item.urlGif} alt={item.alt}></img>
      <div className="project-description">
        <ExternalLink href={item.urlGithub}>
          {item.urlGithub !== '' && <FaGithub className="githubLink" />}
        </ExternalLink>
        <ul className="list">
          <li className="project-details">{item.StacksFront}</li>
          {item.StacksBack !== '' && (
            <li className="project-details">{item.StacksBack}</li>
          )}
          {item.OtherStacks !== '' && (
            <li className="project-details">{item.OtherStacks}</li>
          )}
        </ul>
        {item.AdditionalLink !== '' && (
          <ExternalLink href={item.AdditionalLink}>
            <TbArrowUpRightCircle className="playLink" />
          </ExternalLink>
        )}
      </div>
    </div>
  ))
}

export default Card
