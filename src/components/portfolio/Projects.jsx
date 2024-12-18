import { useState } from "react"
import { projectsData, projectsNav } from "./data"
import { ProjectItems } from "./ProjectItems"
import { useEffect } from "react";


export const Projects = () => {

    const [category, setCategory] = useState({name: "all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    const handleClick = (e, index) => {
        setCategory({name: e.target.textContent.toLowerCase()});
        setActive(index);
    }

    useEffect(() => {
        if(category.name === "all"){
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === category.name;
            })
            setProjects(newProjects);
            console.log(projects)
        }
    }, [category])


  return (
    <div>

        <div className="work__filters">

            {projectsNav.map((item, index) => {
                return(
                    <span
                        onClick={(e) => {handleClick(e, index)}} 
                        className={`${active === index ? 'active-work' : '' } work__item`} key={index}
                    >
                        {item.name}
                    </span>
                )
            })}

        </div>

        <div className="work__container grid">
            {projects.map((item) => {
                return <ProjectItems item={item} key={item.id} />
            })}
        </div>

    </div>
  )
}
