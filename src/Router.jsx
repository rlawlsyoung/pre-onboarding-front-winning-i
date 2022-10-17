import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/header/Header';
import Login from './components/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { createTheme, ThemeProvider } from '@mui/material';
import GlobalStyle from './styles/GlobalStyle';

const theme = createTheme({
  palette: {
    success: {
      main: '#000000',
    },
  },
});

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <RecoilRoot>
          <Header />
          <Login />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default Router;
