import AppBar from '@mui/material/AppBar'
import useTheme from '@mui/material/styles/useTheme'
import LogoButton from '../mid-level/LogoButton'
import NavButtons from '../mid-level/NavButtons'

type Props = {}

const buttons = {
  'About': '/about',
  'My Work': '/work',
  'Contact': 'mailto:contact@dantebarbieri.dev',
}

const Navbar = (props: Props) => {
  const theme = useTheme()

  const mediaQuery = theme.breakpoints.down('sm')

  return (
    <AppBar position='sticky' component='nav' sx={{
      padding: theme.spacing(3),
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      
    }}>
      <LogoButton height={48} />
      <NavButtons buttons={buttons} sxButton={{[mediaQuery]: {
        px: theme.spacing(3),
        py: theme.spacing(2),
        m: theme.spacing(0.5)
      }}} />
    </AppBar>
  )
}

export default Navbar