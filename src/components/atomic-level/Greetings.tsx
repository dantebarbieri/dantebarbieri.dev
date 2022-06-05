import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'
import React from 'react'

const greetings = {
    'cycle': 'Howdy!',
    'cycle2': 'Hej!',
    'cycle3': 'Buongiorno!',
    'cycle4': 'Dia dhuit!',
    'cycle5': 'こんにちは！'
}

type Props = {
    color: string
    fontSize: string
}

const Greetings = (props: Props) => {
    const { color, fontSize } = props

    const theme = useTheme()

    return (
        <div className='slider' style={{ height: theme.spacing(20), width: '100%', margin: '0 auto 0', overflow: 'visible', position: 'relative', marginTop: theme.spacing(8), marginBottom: theme.spacing(12) }}>
            <div style={{ height: '100%', overflow: 'hidden' }}>
                <ul style={{ height: '100%', margin: 0, padding: 0, position: 'relative' }}>
                    {Object.entries(greetings).map(([animationName, greeting]) => (
                        <li
                            key={animationName}
                            style={{
                                width: 'auto',
                                height: '100%',
                                position: 'absolute',
                                right: '50%',
                                listStyle: 'none',
                                animation: `${animationName} 15s linear infinite`,
                                transform: 'translateX(50%)'
                            }}>
                            <Typography variant='h2' sx={{ width: 'auto', fontSize: fontSize, fontWeight: 'bold', color: color, textAlign: 'center' }}>
                                {greeting}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Greetings