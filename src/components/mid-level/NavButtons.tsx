import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import NavButton from '../low-level/NavButton'

type Props = {
  buttons: { [key: string]: string }
  sxGroup?: SxProps
  sxButton?: SxProps
}

const NavButtons = (props: Props) => {
  const { buttons, sxGroup, sxButton } = props

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'stretch',
      alignItems: 'stretch',
      ...sxGroup
    }}>
      {
        Object.entries(buttons).map(([key, value]) => (
          <NavButton key={key} text={key} href={value} sx={{...sxButton}} />
        ))
      }
    </Box>
  )
}

export default NavButtons