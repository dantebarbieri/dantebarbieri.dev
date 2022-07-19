import { Typography, useTheme } from '@mui/material'
import BoxButton from '../atomic-level/BoxButton';

type Props = {
  text: string
  href: string
}

const NavButton = (props: Props) => {
  const theme = useTheme()

  const { text, href } = props

  return (
      <BoxButton
        focusRipple
        disableRipple
        href={href}
        sx={{
          color: theme.palette.primary.main,
          px: theme.spacing(7),
          py: theme.spacing(4),
          m: theme.spacing(2)
        }}
      >
        <Typography
          component="span"
          variant="button"
          color="inherit"
          sx={{
            position: 'relative'
          }}
        >
          {text}
        </Typography>
      </BoxButton>
  );
}

export default NavButton