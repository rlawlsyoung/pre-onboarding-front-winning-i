import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './components/login/Login';
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
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
export default Router;
