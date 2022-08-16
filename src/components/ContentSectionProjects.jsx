import projects from '../data/projects'
import ProjectCard from './ProjectCard'

const ContentSectionProjects = ({ technologie }) => {

  const projectsFiltered = technologie !== '' 
    ? projects.filter(e => e.technologies.includes(technologie))
    : projects

  return (
    <div className='w-full flex flex-wrap justify-center p-10 h-fit max-h-screen overflow-y-auto'>
      {
        projectsFiltered.map(e => <ProjectCard key={e.name} {...e}/> )
      }
    </div>
  )
}

export default ContentSectionProjects;