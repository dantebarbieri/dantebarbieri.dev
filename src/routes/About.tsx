import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import Typography from '@mui/material/Typography'
import React from 'react'
import tree from '../assets/tree.jpg'
import dante from '../assets/dante.jpg'
import Greetings from '../components/atomic-level/Greetings'
import Grid from '@mui/material/Grid'

type Props = {}

const About = (props: Props) => {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <img src={tree} alt='century tree' style={{ width: '100%', height: '85vh', objectFit: 'cover' }} />
      <Typography variant='h1' sx={{ color: theme.palette.primary.main, position: 'absolute', fontSize: theme.spacing(16), fontWeight: 'bold', top: theme.spacing(8), left: theme.spacing(12) }}>
        About Me
      </Typography>
      <Box sx={{ width: '100%', backgroundColor: theme.palette.background.default, p: theme.spacing(10), boxSizing: 'border-box' }}>
        <Greetings color={theme.palette.primary.dark} fontSize={theme.spacing(12)} />
        <Grid container justifyContent='center' alignContent='stretch'>
          <Grid item md={6}>
            <Typography sx={{ color: theme.palette.primary.main, fontSize: theme.spacing(6), paddingBottom: theme.spacing(7), m: `0 ${theme.spacing(10)}` }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Typography sx={{ color: theme.palette.primary.main, fontSize: theme.spacing(6), m: `0 ${theme.spacing(10)}` }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item md={6} justifyContent='stretch' alignContent='stretch' sx={{paddingRight: theme.spacing(10)}}>
            <img src={dante} alt='dante profile' style={{width: '100%', height: theme.spacing(100), objectFit: 'cover', paddingLeft: theme.spacing(3), boxSizing: 'border-box'}} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default About