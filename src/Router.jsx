import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './components/login/Login';
import GlobalStyle from './styles/GlobalStyle';

function Router() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header setIsLogin={setIsLogin} />
      <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
