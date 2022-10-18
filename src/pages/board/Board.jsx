import styled from 'styled-components';

const Board = () => {
  return (
    <BoardContainer>
      <h2 className='title'>게시판</h2>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70.35px;
  margin: 3.5vw;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 28px;
    font-weight: 700;
  }
`;

export default Board;
