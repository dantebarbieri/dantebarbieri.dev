import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'

type Props = {
    innerText: string,
    children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal
}

const EmphasizedTypography = (props: Props) => {

    const theme = useTheme()

    return (
        <Tooltip title={props.children} arrow placement='top'>
            <Typography component='span' sx={{
                fontWeight: 900,
                '&:hover': {
                    color: theme.palette.secondary.dark
                }
            }}>
                {props.innerText}
            </Typography>
        </Tooltip>
    )
}

export default EmphasizedTypography