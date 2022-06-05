import { theme } from '../../utils/theme'
import Typography from '@mui/material/Typography'
import BoxButton from '../atomic-level/BoxButton'
import Greetings from '../atomic-level/Greetings'

type Props = {}

const SplashText = (props: Props) => {
  return (
    <article style={{minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: theme.spacing(50), paddingRight: theme.spacing(50)}}>
      <Greetings color={theme.palette.primary.light} fontSize={theme.spacing(16)} />
      <Typography sx={{fontSize: theme.spacing(6), marginBottom: theme.spacing(10)}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <BoxButton
        focusRipple
        disableRipple
        href={'/about'}
        sx={{
          color: theme.palette.primary.light,
          marginBottom: theme.spacing(10)
        }}
        hoverColor={theme.palette.secondary.light}
      >
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: 'relative',
            p: theme.spacing(7),
            pt: theme.spacing(4),
            pb: theme.spacing(4),
            fontSize: theme.spacing(3.5)
          }}
        >
          Learn More
        </Typography>
      </BoxButton>
    </article>
  )
}

export default SplashText