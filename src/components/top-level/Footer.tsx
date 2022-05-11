import { AppBar } from '@mui/material'
import React from 'react'
import { theme } from '../../utils/theme'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <AppBar position='static' sx={{
        paddingBottom: theme.spacing(2),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none',
        top: 'auto',
        bottom: 0
      }}>
        Footer
      </AppBar>
    </footer>
  )
}

export default Footer