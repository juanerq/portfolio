import projects from '../data/projects'

export const searchNumOfProjects = (nameTechnology) => {
  let numOfProjects = 0
  projects.forEach(project => {
    if (project.technologies.includes(nameTechnology)) {
      numOfProjects++
    }
  }
  )
  return numOfProjects
}