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
import Tooltip from '@mui/material/Tooltip'

import { AndroidIcon, AppleIcon, AwsIcon, AzureIcon, CppIcon, CssIcon, FirebaseIcon, GitIcon, HtmlIcon, JavaIcon, JavascriptIcon, JupyterIcon, KotlinIcon, LatexIcon, LinuxIcon, LuaIcon, MatlabIcon, PostgresqlIcon, ProcessingIcon, PythonIcon, ReactIcon, RubyIcon, RustIcon, ShellIcon, TypescriptIcon, WindowsIcon } from '../atomic-level/TechnologyIcon'

type Props = {
  title: string
  description: string
  repository?: string
  href: string
  languages: string[]
}

const ProjectCard = (props: Props) => {
  const { title, description, repository, href, languages } = props

  const theme = useTheme()

  const tryReplaceTechnology = (technology: string) => {
    let children: React.ReactElement<any, any> | undefined
    switch (technology) {
      case 'C++': children = <CppIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Kotlin': children = <KotlinIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Java': children = <JavaIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Javascript': children = <JavascriptIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Typescript': children = <TypescriptIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'PostgreSQL': children = <PostgresqlIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'LaTeX': children = <LatexIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Ruby': children = <RubyIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Rust': children = <RustIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'HTML': children = <HtmlIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'CSS': children = <CssIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Shell': children = <ShellIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'React': children = <ReactIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Processing': children = <ProcessingIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Azure': children = <AzureIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'AWS': children = <AwsIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Firebase': children = <FirebaseIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Git': children = <GitIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Python': children = <PythonIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'MATLAB': children = <MatlabIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Lua': children = <LuaIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Jupyter': children = <JupyterIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Apple': children = <AppleIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Android': children = <AndroidIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Windows': children = <WindowsIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
        case 'Linux': children = <LinuxIcon htmlColor={theme.palette.primary.dark} sx={{'&:hover': { fill: theme.palette.secondary.dark }}} />
        break
    }
    if (children) {
      return <Tooltip key={technology} title={technology} placement='top'>
        {children}
      </Tooltip>
    }
    return <Typography key={technology} color={theme.palette.primary.dark}>{technology}</Typography>
  }

  return (
    <Card variant='outlined' sx={{ maxWidth: '30vw', minWidth: '20vw', m: 3.3 }}>
      <CardHeader title={title} titleTypographyProps={{ color: theme.palette.secondary.main, align: 'center', pb: 3, mt: 1.3, fontWeight: 'bold' }} subheader={description} subheaderTypographyProps={{ color: theme.palette.primary.main, align: 'center' }} action={repository ? <IconButton sx={{ position: 'absolute', top: theme.spacing(1), right: theme.spacing(1) }} size='small' href={repository}><GitHub htmlColor={theme.palette.primary.dark} fontSize="small" /></IconButton> : undefined} sx={{ position: 'relative' }} />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant='contained' href={href}><Typography variant='button'>Explore</Typography></Button>
      </CardActions>
      <CardContent>
        <Box display='flex' flexWrap='wrap' justifyContent='space-evenly'>
          {languages.map(language => tryReplaceTechnology(language))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectCard