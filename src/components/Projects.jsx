/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import '../styles/Projects.css'

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getGithubProjects();
  }, [])

  const getGithubProjects = () => {
    fetch(`https://api.github.com/users/hennyfeliz/repos`)
      .then(response => response.json())
      .then(projects => {
        setProjects(projects);
      })
      .catch(error => console.error('Error al obtener los datos del perfil:', error));
  }

  return (
    <div className='projects'>
      {
        projects.map((project, index) => (
          <div className='project' key={index}>
            <div className='project-content'>
              <span>{project.name}</span>
              {/* <span>{project.description}</span> */}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Projects