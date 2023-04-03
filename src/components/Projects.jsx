import { Grid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} justifyItems="center">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  )
}

export default Projects;
