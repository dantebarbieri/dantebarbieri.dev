import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'
import React from 'react'
import Box from '@mui/material/Box'

const greetings = {
    'cycle': 'Howdy!',
    'cycle2': 'Hej!',
    'cycle3': 'Buongiorno!',
    'cycle4': 'Dia dhuit!',
    'cycle5': 'こんにちは！'
}

type Props = {}

const Greetings = (props: Props) => {
    const theme = useTheme()

    return (
        <>
        <Box className='slider' height={theme.spacing(20)} width='100%' mx='auto' overflow='visible' position='relative' mt={theme.spacing(8)} mb={theme.spacing(12)}>
            <Box height='100%' overflow='hidden'>
                <Box component='ul' height='100%' m={0} p={0} position='relative'>
                {Object.entries(greetings).map(([animationName, greeting]) => (
                        <Box component='li'
                            key={animationName}
                            width='auto'
                            height='100%'
                            position='absolute'
                            right='50%'
                            sx={{
                                listStyle: 'none',
                                animation: `${animationName} 15s linear infinite`,
                                transform: 'translateX(50%)'
                            }}>
                            <Typography variant='h3' sx={{ width: 'auto', textAlign: 'center' }}>
                                {greeting}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Greetings