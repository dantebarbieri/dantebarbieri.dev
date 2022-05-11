import { Button, styled, Typography } from '@mui/material'
import { theme } from '../../utils/theme';

type Props = {
  text: string
  href: string
}

const BoxButton = styled(Button)(() => ({
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '& .MuiTypography-root': {
    border: '2px solid transparent',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiTypography-root': {
      border: '2px solid currentColor',
    },
  },
}));

const NavButton = (props: Props) => {
  const { text, href } = props

  return (
      <BoxButton
        focusRipple
        disableRipple
        href={href}
      >
        <Typography
          component="span"
          variant="subtitle1"
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