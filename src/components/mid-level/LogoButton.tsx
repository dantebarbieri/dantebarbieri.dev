import { Button, Typography } from '@mui/material'
import logo from '../../assets/logo-white.svg'
import { theme } from '../../utils/theme'

type Props = {
    label?: string
}

const LogoButton = (props: Props) => {
    const { label } = props

    return (
        <a href='/' style={{textDecoration: 'none', color: theme.palette.primary.main, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Button disableRipple disableElevation style={{ backgroundColor: 'transparent' }}><img src={logo} alt="logo" height={48} /></Button>
            {
                label && (
                    <Typography sx={{paddingLeft: theme.spacing(2), whiteSpace: 'nowrap'}}>
                        {label}
                    </Typography>
                )
            }
        </a>
    )
}

export default LogoButton