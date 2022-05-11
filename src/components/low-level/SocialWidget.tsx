import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import IconButton from '@mui/material/IconButton/IconButton'
import React from 'react'
import { theme } from '../../utils/theme'

type Props = {
  href: string
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  ariaLabel?: string
  blank?: boolean
}

const SocialWidget = (props: Props) => {
  const { href, icon, ariaLabel, blank } = props

  return (
    <IconButton
    href={href}
    aria-label={ariaLabel}
    target={blank ? '_blank' : undefined}
    sx={{
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.secondary.main
      }
    }}
    >
      {React.createElement(icon)}
    </IconButton>
  )
}

export default SocialWidget