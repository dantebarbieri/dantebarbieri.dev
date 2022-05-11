import { Box } from '@mui/material'
import React from 'react'
import NavButton from '../low-level/NavButton'

type Props = {
  buttons: {[key: string]: string}
  activeButton: string
}

const NavButtons = (props: Props) => {
  const { buttons, activeButton } = props

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    {
      Object.entries(buttons).map(([key, value]) => (
        <NavButton key={key} text={key} href={value} active={value === activeButton} />
      ))
    }
    </Box>
  )
}

export default NavButtons