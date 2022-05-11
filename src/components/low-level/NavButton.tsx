import { Button, styled, Typography } from '@mui/material'
import { theme } from '../../utils/theme';

type Props = {
  text: string
  href: string
  active?: boolean
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
  const { text, href, active } = props

  return (
      <BoxButton
        focusRipple
        disableRipple
        href={href}
        sx={{
          color: active ? theme.palette.secondary.main : theme.palette.primary.main
        }}
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