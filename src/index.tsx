import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/top-level/Footer'
import Navbar from './components/top-level/Navbar'
import About from './routes/About'
import Home from './routes/Home'
import Work from './routes/Work'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { theme } from './utils/theme';
import Paper from '@mui/material/Paper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {window.location.pathname !== '/' && (<Navbar />)}
      <Paper square sx={{flexGrow: 1}}>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </Router>
      </Paper>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
