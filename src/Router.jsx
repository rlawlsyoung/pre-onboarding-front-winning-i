import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/header/Header';
import Login from './components/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';

import GlobalStyle from './styles/GlobalStyle';

function Router() {
  return (
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
  );
}
export default Router;
