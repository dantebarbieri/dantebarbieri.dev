import { theme } from '../../utils/theme'
import Typography from '@mui/material/Typography'
import BoxButton from '../atomic-level/BoxButton'
import Greetings from '../atomic-level/Greetings'
import Box from '@mui/material/Box'

type Props = {}

const SplashText = (props: Props) => {
  return (
    <Box component='article' minHeight='50vh' display='flex' flexDirection='column' alignItems='center' justifyContent='space-evenly' px={theme.spacing(50)} bgcolor={theme.palette.primary.main} color={theme.palette.background.default}>
    <Greetings />
      <Typography sx={{marginBottom: theme.spacing(10)}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <BoxButton
        focusRipple
        disableRipple
        href={'/about'}
        sx={{
          color: 'currentColor',
          marginBottom: theme.spacing(10)
        }}
        hoverColor={theme.palette.secondary.dark}
      >
        <Typography
          component="span"
          variant="button"
          color="inherit"
          sx={{
            position: 'relative',
            p: theme.spacing(7),
            pt: theme.spacing(4),
            pb: theme.spacing(4),
          }}
        >
          Learn More
        </Typography>
      </BoxButton>
    </Box>
  )
}

export default SplashText