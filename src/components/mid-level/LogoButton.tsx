import { Button, Typography } from '@mui/material'
import logo from '../../assets/logo-white.svg'
import { theme } from '../../utils/theme'

type Props = {
    height: number
    label?: string
}

const LogoButton = (props: Props) => {
    const { height, label } = props

    return (
        <a
            href='/'
            style={{
                textDecoration: 'none',
                color: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <Button disableRipple disableElevation style={{ backgroundColor: 'transparent' }}>
                <img src={logo} alt="logo" height={height} />
            </Button>
            {
                label && (
                    <Typography sx={{ whiteSpace: 'nowrap' }}>
                        {label}
                    </Typography>
                )
            }
        </a>
    )
}

export default LogoButton