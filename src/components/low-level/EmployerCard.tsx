import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'

type Props = {
  position: string
  employer: string
  start: string
  end: string
  points: string[]
}

const EmployerCard = (props: Props) => {
  const {position, employer, start, end, points} = props

  const theme = useTheme()

  return (
    <Card variant='outlined' sx={{w: '100%', m: 1.5, px: 15}}>
      <CardContent>
      <Typography variant='h5'>{position} <Typography variant='inherit' component='span' color='secondary'>@ {employer}</Typography></Typography>
      <Typography variant='caption' color={theme.palette.primary.dark} fontFamily='Consolas, Inconsolata, monospaced'>{start} &ndash; {end}</Typography>
      <Box component='ul' mb={0} sx={{listStyleType: 'none', '& li::before': {
        content: '"\u25B9"',
        color: theme.palette.secondary.main,
        fontSize: '1.25em',
        display: 'inline-block',
        width: '1em',
        ml: '-1em'
      }}}>
        {points.map(point => <Box key={point} component='li'><Typography component='span'>{point}</Typography></Box>)}
      </Box>
      </CardContent>
    </Card>
  )
}

export default EmployerCard