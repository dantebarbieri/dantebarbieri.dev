import React from 'react'
import Box from '@mui/material/Box'
import { AppleIcon, AwsIcon, AzureIcon, CppIcon, JavaIcon, LatexIcon, LinuxIcon, PostgresqlIcon, ProcessingIcon, PythonIcon, ReactIcon, ShellIcon, TypescriptIcon, WindowsIcon } from '../low-level/TechnologyIcon'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'



type Props = {}

const TechnologyGrid = (props: Props) => {
  const theme = useTheme()

  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' alignItems='center' m={10}>
      <Tooltip title='Windows' placement='top'>
        <WindowsIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='Linux' placement='top'>
        <LinuxIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='macOS' placement='top'>
        <AppleIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Typography fontSize='large' margin={4}>|</Typography>
      <Tooltip title='C++' placement='top'>
        <CppIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='LaTeX' placement='top'>
        <LatexIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='React' placement='top'>
        <ReactIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='Processing' placement='top'>
        <ProcessingIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='Typescript' placement='top'>
        <TypescriptIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='Java' placement='top'>
        <JavaIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='Python' placement='top'>
        <PythonIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='PostgreSQL' placement='top'>
        <PostgresqlIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='Shell' placement='top'>
        <ShellIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Typography fontSize='large' margin={4}>|</Typography>
      <Tooltip title='Azure' placement='top'>
        <AzureIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
      <Tooltip title='AWS' placement='top'>
        <AwsIcon fontSize='large' sx={{ m: 2, '&:hover': { fill: theme.palette.secondary.main } }} />
      </Tooltip>
    </Box>
  )
}

export default TechnologyGrid