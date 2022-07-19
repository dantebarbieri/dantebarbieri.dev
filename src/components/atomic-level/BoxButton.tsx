import { Button, styled, useTheme } from '@mui/material'

type Props = {
  hoverColor?: string
}

const BoxButton = styled(Button, { shouldForwardProp: (propName) => propName !== 'hoverColor' })((props: Props) => {
  const theme = useTheme()

  const { hoverColor } = props

  const trueHoverColor = hoverColor ?? theme.palette.secondary.main

  return {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
    },
    border: '2px solid currentColor',
    borderRadius: 0,
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      color: trueHoverColor,
      '& .MuiTypography-root': {
        color: trueHoverColor
      },
    },
  }
});

export default BoxButton