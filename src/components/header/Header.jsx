import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './MenuIcon';
import SideBar from './SideBar';
import wi from '../../assets/wi.svg';
import styled from 'styled-components';

const Header = () => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <HeaderContainer>
      <MenuIcon openSide={openSide} setOpenSide={setOpenSide} />
      <Link>
        <img src={wi} alt='위닝아이 로고' className='logo' />
      </Link>
      <SideBar openSide={openSide} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 15px;
  background-color: black;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 225px;
  }

  @media screen and (max-width: 480px) {
    .logo {
      width: 175px;
    }
  }
`;

export default Header;
