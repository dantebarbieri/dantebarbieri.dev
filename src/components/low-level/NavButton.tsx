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
          color: theme.palette.primary.main
        }}
      >
        <Typography
          component="span"
          variant="button"
          color="inherit"
          sx={{
            position: 'relative',
            p: theme.spacing(7),
            pt: theme.spacing(4),
            pb: theme.spacing(4)
          }}
        >
          {text}
        </Typography>
      </BoxButton>
  );
}

export default NavButton