import styled from "styled-components";

const SideBar = ({ openSide }) => {
  return (
    <SideBarContainer openSide={openSide}>
      <ul className="side-body">
        <li>메뉴 1</li>
      </ul>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0%;
  top: 0;
  height: 100%;
  width: 300px;
  background-color: #f6f6f6;
  transition: 0.3s;
  transform: translateX(${({ openSide }) => (openSide ? "-100%" : "0%")});

  z-index: 20;
`;

export default SideBar;
