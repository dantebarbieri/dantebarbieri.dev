import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EmployerCards from '../components/mid-level/EmployerCards'
import ProjectCards from '../components/mid-level/ProjectCards'
import TechnologyGrid from '../components/mid-level/TechnologyGrid'

type Props = {}

const Work = (props: Props) => {
  return (
    <Box>
      <Typography variant='h2' align='center' my={12}>Explore My Work</Typography>
      <Box component='section'>
        <Typography variant='h3' align='center' mt={12}>Featured Work</Typography>
        <ProjectCards />
      </Box>
      <Box component='section'>
        <Typography variant='h3' align='center' mt={12}>Where I've Worked</Typography>
        <EmployerCards />
      </Box>
      <Box component='section'>
        <Typography variant='h3' align='center' mt={12}>Technologies</Typography>
        <TechnologyGrid />
      </Box>
    </Box>
  )
}

export default Work