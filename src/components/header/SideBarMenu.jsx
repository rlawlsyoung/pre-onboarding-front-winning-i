import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { openSideAtom } from '../../atom';
import { mainBlack } from '../../styles/theme';
import styled from 'styled-components';

const SideBarMenu = ({ icon, title, link }) => {
  const setOpenSide = useSetRecoilState(openSideAtom);
  const handleClick = () => setOpenSide(false);
  return (
    <Link to={link}>
      <SideBarMenuContainer className='flex-center hover' onClick={handleClick}>
        {icon} <h2>{title}</h2>
      </SideBarMenuContainer>
    </Link>
  );
};

const SideBarMenuContainer = styled.li`
  height: 80px;
  margin: 10px 0;
  color: ${mainBlack};
  cursor: pointer;

  h2 {
    margin-left: 10px;
    font-weight: 700;
    font-size: 22px;
  }
`;

export default SideBarMenu;
