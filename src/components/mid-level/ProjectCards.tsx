import React from 'react'
import Box from '@mui/material/Box'
import ProjectCard from '../low-level/ProjectCard'
import useTheme from '@mui/material/styles/useTheme'

type Props = {}

const ProjectCards = (props: Props) => {
  const theme = useTheme()

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='stretch' flexWrap='wrap' sx={{[theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }}}>
      <ProjectCard
        title='TIAS'
        description='Computer Science student employee scheduler for Peer Teachers at Texas A&M University. Web application.'
        href='https://www.csce-scheduler.com/'
        languages={['PostgreSQL', 'Java', 'Typescript', 'React', 'AWS']}
        repository='https://github.com/csce-cups/tias'
      />
      <ProjectCard
        title='League Bot'
        description='Autonomous League of Legends leveling bot. Windows Only.'
        href='https://github.com/dante-erik/lol-bot-cpp/releases'
        languages={['C++', 'Windows']}
        repository='https://github.com/dante-erik/lol-bot-cpp'
      />
      <ProjectCard
        title='Pixle'
        description='Wordle clone where one guesses a notable pixelated image.'
        href='https://pulchroxloom.github.io/pixle/'
        languages={['React', 'Typescript', 'Firebase']}
        repository='https://github.com/csce-cups/tias'
      />
      <ProjectCard
        title='Binary Heaps'
        description="Slide deck explaining Binary Heaps as a Data Structure. Uses A&M's colors."
        href='https://github.com/pulchroxloom/binary-heaps/releases/download/v1.0/Binary.Heaps.-.Dante.pdf'
        languages={['LaTeX']}
        repository='https://github.com/pulchroxloom/binary-heaps'
      />
      <ProjectCard
        title='Visualizing Sorts'
        description='Interactive web page to visualize (and hear) a variety of different non-recursive comparison based sorting algorithms. Early work.'
        href='https://pulchroxloom.github.io/visualizing_sorts'
        languages={['Javascript', 'p5.js']}
        repository='https://github.com/pulchroxloom/visualizing_sorts'
      />
    </Box>
  )
}

export default ProjectCards