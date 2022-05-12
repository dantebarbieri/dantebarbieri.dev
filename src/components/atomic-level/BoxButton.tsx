import { Button, styled } from '@mui/material'
import { theme } from '../../utils/theme';

type Props = {
  hoverColor: string
}

const BoxButton = styled(Button)((props: Props) => ({
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '& .MuiTypography-root': {
    border: '2px solid currentColor',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiTypography-root': {
      color: props.hoverColor,
    },
  },
}));

export default BoxButton