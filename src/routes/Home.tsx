import React from 'react'
import Grid from '@mui/material/Grid/Grid'
import SplashText from '../components/low-level/SplashText'
import HomeInfo from '../components/top-level/HomeInfo'
import DanteItaly from '../assets/20220525_091608.jpg'

type Props = {}

const Home = (props: Props) => {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} sm={6}>
        <HomeInfo />
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={DanteItaly} alt='Dante atop Florence' style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '67% 100%'}} />
      </Grid>
      <Grid item xs={12}>
        <SplashText />
      </Grid>
    </Grid>
  )
}

export default Home