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

  return (
    <AppBar position='sticky' component='nav' sx={{
      padding: theme.spacing(3),
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    }}>
      <LogoButton height={48} />
      <NavButtons buttons={buttons} sxProps={{
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          width: '50%'
        },
        [theme.breakpoints.down(500)]: {
          flexDirection: 'column',
          width: '75%'
        }
      }} />
    </AppBar>
  )
}

export default Navbar