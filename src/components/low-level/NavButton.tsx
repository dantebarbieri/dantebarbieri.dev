import { SxProps, Typography, useTheme } from '@mui/material'
import BoxButton from '../atomic-level/BoxButton';

type Props = {
  text: string
  href: string
  sx: SxProps
}

const NavButton = (props: Props) => {
  const theme = useTheme()

  const { text, href, sx } = props

  return (
      <BoxButton
        focusRipple
        disableRipple
        href={href}
        sx={{
          color: theme.palette.primary.main,
          px: theme.spacing(7),
          py: theme.spacing(4),
          m: theme.spacing(2),
          ...sx
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