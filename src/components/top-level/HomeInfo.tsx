import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import logo from '../../assets/logo-white.svg'
import { theme } from '../../utils/theme'
import NavButtons from '../mid-level/NavButtons'
import SocialWidgets from '../mid-level/SocialWidgets'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const widgets = {
  github: {
    url: 'https://github.com/pulchroxloom',
    icon: GitHubIcon,
    blank: true
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/dantebarbieri',
    icon: LinkedInIcon,
    blank: true
  },
  email: {
    url: 'contact',
    icon: EmailIcon
  }
}

type Props = {}

const buttons = {
  'About': '/about',
  'My Work': '/work',
  'Contact': '/contact',
}

const HomeInfo = (props: Props) => {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
      height: '97.5vh',
      paddingLeft: theme.spacing(14),
      paddingRight: theme.spacing(14)
    }}>
      <img src={logo} alt="logo" height={theme.spacing(250)} style={{marginTop: theme.spacing(10)}} />
      <Typography variant='h1' sx={{fontSize: theme.spacing(16), fontWeight: 'bold', marginTop: theme.spacing(12), marginBottom: theme.spacing(8) }}>
        Dante Barbieri
      </Typography>
      <Typography variant='h2' sx={{fontSize: theme.spacing(6), textAlign: 'center', marginBottom: theme.spacing(12)}}>
        Software engineer &amp; pasta fanatic. Lover of systems programming, reading, and playing board games. 
      </Typography>
      <Box style={{marginBottom: theme.spacing(48)}}>
        <NavButtons buttons={buttons} />
      </Box>
      <Box style={{marginBottom: theme.spacing(10)}}>
        <SocialWidgets widgets={widgets} />
      </Box>
    </Box>
  )
}

export default HomeInfo