import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import Typography from '@mui/material/Typography'
import React from 'react'
import tree from '../assets/tree.jpg'
import dante from '../assets/dante.jpg'
import Greetings from '../components/atomic-level/Greetings'
import Grid from '@mui/material/Grid'

type Props = {}

const About = (props: Props) => {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <img src={tree} alt='century tree' style={{ width: '100%', height: '85vh', objectFit: 'cover' }} />
      <Typography variant='h2' sx={{ color: theme.palette.primary.main, position: 'absolute', top: theme.spacing(8), left: theme.spacing(12) }}>
        About Me
      </Typography>
      <Box sx={{ width: '100%', p: theme.spacing(10), boxSizing: 'border-box' }}>
        <Greetings />
        <Grid container justifyContent='center' alignContent='stretch'>
          <Grid item md={12} lg={6}>
            <Typography sx={{ color: theme.palette.primary.main, fontSize: theme.spacing(6), paddingBottom: theme.spacing(7), mx: theme.spacing(10) }}>
              I was born in Houston, TX on Monday, September 27<sup>th</sup>, 1999. My family and I lived in The Woodlands, TX for most of my childhood. From a very young age, I took to computers. As I got older, I began to learn programming. I started with BASIC and moved into Java and Javascript before taking a Python course. When I discovered C++, I realized just how much I loved writing very efficient code and having full control of the CPU. I took my love for C++ and programming and shared it by working as a student employee for Texas A&M University during my enrollment. I assisted with computer science courses from freshman to junior levels.
            </Typography>

            <Typography sx={{ color: theme.palette.primary.main, fontSize: theme.spacing(6), paddingBottom: theme.spacing(7), mx: theme.spacing(10) }}>
              During my university years, I was fortunate enough to earn two internships with Microsoft. I thoroughly enjoyed working with different teams under Azure. Thanks to my work during these internships, Microsoft hired me to work full-time as a Software Engineer under the same Azure umbrella. It was this opportunity that took me out of Texas and caused me to move to Redmond, WA.
            </Typography>

            <Typography sx={{ color: theme.palette.primary.main, fontSize: theme.spacing(6), mx: theme.spacing(10), [theme.breakpoints.down('lg')]: {
              paddingBottom: theme.spacing(7)
            } }}>
              When I'm not keeping myself busy programming for Microsoft, I like to cook and to try new foods. In my free time, I read webtoons on my tablet. I have a great love of languages, and I've recently started studying Telugu. Even in the sweltering Texas heat, I could often be found outside, and taking advantage of hiking around Seattle and playing disc golf are some of my favorite outdoor experiences. And finally I like to play games with my friends. Thanks for reading about me, please get in touch if you'd like to get together for lunch sometime.
            </Typography>
          </Grid>
          <Grid item md={12} lg={6} justifyContent='stretch' alignContent='stretch' sx={{paddingRight: theme.spacing(10)}}>
            <img src={dante} alt='dante profile' style={{width: '100%', height: '100%', objectFit: 'cover', paddingLeft: theme.spacing(3), boxSizing: 'border-box'}} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default About