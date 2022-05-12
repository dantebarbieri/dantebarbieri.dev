import { Typography } from '@mui/material'
import { theme } from '../../utils/theme';
import BoxButton from '../atomic-level/BoxButton';

type Props = {
  text: string
  href: string
}

const NavButton = (props: Props) => {
  const { text, href } = props

  return (
      <BoxButton
        focusRipple
        disableRipple
        href={href}
        sx={{
          color: theme.palette.primary.main
        }}
        hoverColor={theme.palette.secondary.main}
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
          {text}
        </Typography>
      </BoxButton>
  );
}

export default NavButton