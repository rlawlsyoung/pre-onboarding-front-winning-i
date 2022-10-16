import { useSetRecoilState, useRecoilValue } from 'recoil';
import { isDialogOnAtom, openSideAtom } from '../../atom';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { FaRegClipboard, FaHome } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import SideBarMenu from './SideBarMenu';
import { mainGray } from '../../styles/theme';
import styled from 'styled-components';

const menuData = [
  {
    id: 1,
    icon: <FaHome size={35} />,
    title: '메인',
    link: '/',
  },
  {
    id: 2,
    icon: <FaRegClipboard size={35} />,
    title: '게시판',
    link: '/board',
  },
  {
    id: 3,
    icon: <MdSettings size={40} />,
    title: '설정',
    link: '/settings',
  },
];

const SideBar = () => {
  const setIsDialogOn = useSetRecoilState(isDialogOnAtom);
  const openSide = useRecoilValue(openSideAtom);

  const handleLogin = () => {
    setIsDialogOn(true);
  };

  return (
    <SideBarContainer openSide={openSide}>
      <div className='profile-box'>
        <div className='user-info flex-center'>
          <IoPersonCircleSharp size={35} />
          <p className='user-name'>Username 1</p> 님, 환영합니다!
        </div>
      </div>
      <ul className='side-body'>
        {menuData.map(el => (
          <SideBarMenu
            key={el.id}
            icon={el.icon}
            title={el.title}
            link={el.link}
          />
        ))}
      </ul>
      <button className='logout flex-center hover' onClick={handleLogin}>
        로그아웃
      </button>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0%;
  top: 0;
  height: 100%;
  width: 300px;
  box-shadow: 6px 0 5px -5px gray;
  background-color: ${mainGray};
  transition: 0.3s;
  transform: translateX(${({ openSide }) => (openSide ? '0%' : '-102%')});
  z-index: 20;

  .hover {
    cursor: pointer;
    &:hover {
      background-color: #e9e9e9;
    }
  }

  .profile-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 135px;
    box-shadow: -1px 1px 2px 1px gray;
    font-size: 18px;
    .user-info {
      margin-bottom: 20px;
      .user-name {
        margin: 0 5px;
        font-weight: 700;
      }
    }
  }

  .logout {
    position: absolute;
    bottom: 0;
    height: 75px;
    width: 100%;
    border: none;
    background-color: transparent;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 18px;
  }
`;

export default SideBar;
