import Typography from '@mui/material/Typography'
import BoxButton from '../atomic-level/BoxButton'
import Greetings from '../atomic-level/Greetings'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import useTheme from '@mui/material/styles/useTheme'
import EmphasizedTypography from '../atomic-level/EmphasizedTypography'

import { RustIcon } from '../atomic-level/TechnologyIcon'
import Tortellini from '../../assets/0002484207650_5_A1C1_1200.png'
import TheBeginningAfterTheEnd from '../../assets/3f10a4c3-686f-4aa1-af71-22bfc021ccd0_z.jpg'
import Quarto from '../../assets/QuartoSpiel.jpg'
import { Link } from '@mui/material'

type Props = {}

const SplashText = (props: Props) => {
  const theme = useTheme()

  return (
    <Box component='article' minHeight='50vh' display='flex' flexDirection='column' alignItems='center' justifyContent='space-evenly' px={theme.spacing(50)} bgcolor={theme.palette.primary.main} color={theme.palette.background.default} sx={{[theme.breakpoints.down('md')]: {
      px: theme.spacing(15)
    }}}>
    <Greetings />
      <Typography sx={{marginBottom: theme.spacing(10)}}>
        I'm Dante Victor Barbieri, a Texas born and raised Software Engineer. I graduated summa cum laude in May 2022 with a B.S. in Computer Science from Texas A&M University. Following this, I moved up to Washington in order to work as a Software Engineer for Microsoft. Typically, I enjoy spending my time learning <EmphasizedTypography innerText='Rust'><IconButton href='https://www.rust-lang.org/'><RustIcon /></IconButton></EmphasizedTypography>, cooking <EmphasizedTypography innerText='tortellini'><IconButton href='https://www.buitoni.com/pasta-products/mixed-cheese-tortellini-20-oz-family-size/'><img src={Tortellini} alt='Buitoni mixed cheese tortellini' style={{objectFit: 'contain', width: '100%', height: '100%'}} /></IconButton><Typography variant='caption'>Image credit: <Link variant='caption' href='https://www.meijer.com/shopping/product/buitoni-tortellini-pasta-mixed-cheese-20-oz/2484207650.html'>meijer</Link></Typography></EmphasizedTypography>, reading <EmphasizedTypography innerText='webtoons'><IconButton href='https://tapas.io/series/tbate-comic?c_id=909&c_title=The%20Beginning%20After%20the%20End'><img src={TheBeginningAfterTheEnd} alt='The Beginning After The End cover' style={{objectFit: 'contain', width: '100%', height: '100%'}} /></IconButton><Typography variant='caption'>Image credit: <Link variant='caption' href='https://tapas.io/series/tbate-comic/info'>tapas</Link></Typography></EmphasizedTypography>, and playing <EmphasizedTypography innerText='interesting board games'><IconButton href='https://en.wikipedia.org/wiki/Quarto_(board_game)'><img src={Quarto} alt='Quarto board at start of game' style={{objectFit: 'contain', width: '100%', height: '100%'}} /></IconButton><Typography variant='caption'>Image credit: <Link variant='caption' href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</Link>, <Link variant='caption' href="https://commons.wikimedia.org/w/index.php?curid=114552">Wikimedia Commons</Link></Typography></EmphasizedTypography>. If you're looking for me, I'm probably hiking or playing disc golf.
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