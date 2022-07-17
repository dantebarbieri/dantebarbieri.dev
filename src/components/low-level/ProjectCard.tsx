import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'
import IconButton from '@mui/material/IconButton'
import GitHub from '@mui/icons-material/GitHub'

type Props = {
  title: string
  description: string
  repository?: string
  href: string
  languages: string[]
}

const ProjectCard = (props: Props) => {
  const {title, description, repository, href, languages} = props

  const theme = useTheme()

  return (
    <Card variant='outlined' sx={{maxWidth: '30vw', minWidth: '20vw', m: 3.3}}>
      <CardHeader title={title} titleTypographyProps={{color: theme.palette.secondary.main, align: 'center', pb: 3, mt: 1.3, fontWeight: 'bold'}} subheader={description} subheaderTypographyProps={{color: theme.palette.primary.main, align: 'center'}} action={repository ? <IconButton sx={{position: 'absolute', top: theme.spacing(1), right: theme.spacing(1)}} size='small' href={repository}><GitHub htmlColor={theme.palette.primary.dark} fontSize="small" /></IconButton> : undefined} sx={{position: 'relative'}} />
      <CardActions sx={{justifyContent: 'center'}}>
        <Button variant='contained' href={href}><Typography variant='button'>Explore</Typography></Button>
      </CardActions>
      <CardContent>
        <Box display='flex' flexWrap='wrap' justifyContent='space-evenly'>
          {languages.map(language => <Typography key={language} color={theme.palette.primary.dark}>{language}</Typography>)}
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectCard