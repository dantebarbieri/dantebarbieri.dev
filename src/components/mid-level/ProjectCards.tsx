import React from 'react'
import Box from '@mui/material/Box'
import ProjectCard from '../low-level/ProjectCard'

type Props = {}

const ProjectCards = (props: Props) => {
  return (
    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='stretch' flexWrap='wrap'>
      <ProjectCard
        title='TIAS'
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'
        href='https://www.csce-scheduler.com/'
        languages={['SQL', 'Java', 'Typescript']}
        repository='https://github.com/csce-cups/tias'
      />
      <ProjectCard
        title='League Bot'
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'
        href='https://github.com/dante-erik/lol-bot-cpp/releases'
        languages={['C++']}
        repository='https://github.com/dante-erik/lol-bot-cpp'
      />
      <ProjectCard
        title='Pixle'
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'
        href='https://pulchroxloom.github.io/pixle/'
        languages={['React', 'Typescript']}
        repository='https://github.com/csce-cups/tias'
      />
      <ProjectCard
        title='Binary Heaps'
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'
        href='https://github.com/pulchroxloom/binary-heaps/releases/download/v1.0/Binary.Heaps.-.Dante.pdf'
        languages={['TeX']}
        repository='https://github.com/pulchroxloom/binary-heaps'
      />
      <ProjectCard
        title='Visualizing Sorts'
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'
        href='https://pulchroxloom.github.io/visualizing_sorts'
        languages={['Javascript', 'p5.js']}
        repository='https://github.com/pulchroxloom/visualizing_sorts'
      />
    </Box>
  )
}

export default ProjectCards