import { Typography } from '@mui/material'
import { theme } from '../../utils/theme'
import BoxButton from '../atomic-level/BoxButton'

const greetings = {
  'cycle': 'Howdy!',
  'cycle2': 'Hej!',
  'cycle3': 'Buongiorno!',
  'cycle4': 'Dia dhuit!',
  'cycle5': 'こんにちは！'
}

type Props = {}

const SplashText = (props: Props) => {
  return (
    <article style={{minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: theme.spacing(50), paddingRight: theme.spacing(50)}}>
      <div className='slider' style={{height: theme.spacing(20), width: '100%', margin: '0 auto 0', overflow: 'visible', position: 'relative', marginTop: theme.spacing(8), marginBottom: theme.spacing(12)}}>
        <div style={{height: '100%', overflow: 'hidden'}}>
          <ul style={{height: '100%', margin: 0, padding: 0, position: 'relative'}}>
            {Object.entries(greetings).map(([animationName, greeting]) => (
              <li
              key={animationName}
              style={{
                width: 'auto',
                height: '100%',
                position: 'absolute',
                right: '50%',
                listStyle: 'none',
                animation: `${animationName} 15s linear infinite`,
                transform: 'translateX(50%)'
                }}>
                <Typography variant='h2' sx={{width: 'auto', fontSize: theme.spacing(16), fontWeight: 'bold', color: theme.palette.primary.light, textAlign: 'center'}}>
                  {greeting}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
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