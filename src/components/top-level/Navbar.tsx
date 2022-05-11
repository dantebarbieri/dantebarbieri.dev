import { AppBar, Button } from '@mui/material'
import { theme } from '../../utils/theme'
import LogoButton from '../mid-level/LogoButton'
import NavButtons from '../mid-level/NavButtons'

type Props = {}

const buttons = {
  'About': '/about',
  'My Work': '/work',
  'Contact': '/contact',
}

const Navbar = (props: Props) => {
  return (
    <AppBar position='sticky' sx={{
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none'
    }}>
      <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
        <LogoButton />
        <NavButtons buttons={buttons} />
      </nav>
    </AppBar>
  )
}

export default Navbar