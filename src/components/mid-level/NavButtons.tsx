import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import NavButton from '../low-level/NavButton'

type Props = {
  buttons: { [key: string]: string },
  sxProps?: SxProps
}

const NavButtons = (props: Props) => {
  const { buttons, sxProps } = props

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'stretch',
      alignItems: 'stretch',
      ...sxProps
    }}>
      {
        Object.entries(buttons).map(([key, value]) => (
          <NavButton key={key} text={key} href={value} />
        ))
      }
    </Box>
  )
}

export default NavButtons