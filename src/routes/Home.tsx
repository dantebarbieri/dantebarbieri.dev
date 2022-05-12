import React from 'react'
import Grid from '@mui/material/Grid/Grid'
import SplashText from '../components/low-level/SplashText'
import HomeInfo from '../components/top-level/HomeInfo'
import fountain from '../assets/fountain.jpg'

type Props = {}

const Home = (props: Props) => {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={6}>
        <HomeInfo />
      </Grid>
      <Grid item xs={6}>
        <img src={fountain} alt='fountain outside sbisa' style={{width: '100%', height: '100vh', objectFit: 'cover'}} />
      </Grid>
      <Grid item xs={12}>
        <SplashText />
      </Grid>
    </Grid>
  )
}

export default Home