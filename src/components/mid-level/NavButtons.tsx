import { Box } from '@mui/material'
import NavButton from '../low-level/NavButton'

type Props = {
  buttons: {[key: string]: string}
}

const NavButtons = (props: Props) => {
  const { buttons } = props

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    {
      Object.entries(buttons).map(([key, value]) => (
        <NavButton key={key} text={key} href={value} />
      ))
    }
    </Box>
  )
}

export default NavButtons