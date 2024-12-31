

export const ProjectItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <div className="work__img-container">
          <img src={item.image} alt="" className="work__img"/>
        </div>
        <h3 className="work__title"> {item.title} </h3>
        <p> {item.description} </p>

        <div className="work__techs">
          {item.tech.map((tech, index) => ( <div key={index} className="work__tech" > {tech} </div> ))}
        </div>

        <div className="work__buttons">
          <a href="#" className="work__button work__button--demo">
              Demo <i className="bx bx-play-circle work__button-icon"></i>
          </a>
          <a href="#" className="work__button work__button--repo">
              Reposotorio <i className="bx bxl-github work__button-icon"></i>
          </a>
        </div>
    </div>
  )
}
