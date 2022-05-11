import React from 'react'
import { AppBar } from '@mui/material'
import { theme } from '../../utils/theme'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LogoButton from '../mid-level/LogoButton'
import SocialWidgets from '../mid-level/SocialWidgets';

const buttons = {
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

const Footer = (props: Props) => {
  return (
    <footer>
      <AppBar position='static' sx={{
        padding: theme.spacing(2),
        paddingRight: theme.spacing(5),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        top: 'auto',
        bottom: 0
      }}>
        <LogoButton height={32} label='Dante Barbieri' />
        <SocialWidgets buttons={buttons} />
      </AppBar>
    </footer>
  )
}

export default Footer