import Card from './Card/index.tsx'
import data from '../../../Assets/Projects/projects.json'
import './index.css'

export const CardsList = () => {
  return (
    <div id="projects" className="container-card-list">
      <h2 className="title">
        <span className="highlighted">2. </span>Projects
      </h2>
      <section className="section">
        <div className="cards-container">
          <Card data={data} />
        </div>
      </section>
    </div>
  )
}

export default CardsList
