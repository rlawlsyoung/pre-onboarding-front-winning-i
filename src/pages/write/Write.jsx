import { mainBlack, mainGray, menuGray } from '../../styles/theme';
import styled from 'styled-components';

const Write = () => {
  return (
    <WriteContainer>
      <h2 className='title'>게시글 작성</h2>
      <div className='write-container'>
        <input
          type='text'
          className='post-title'
          placeholder='제목을 입력해주세요'
        />
        <textarea type='text' className='post-body' placeholder='내용...' />

        <div className='button-wrapper'>
          <button className='cancel'>취소</button>
          <button className='write'>작성</button>
        </div>
      </div>
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70.35px;
  margin: 2.5vw;

  .title {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 700;
  }

  .write-container {
    position: relative;
    width: 810px;

    .post-title {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: ${menuGray};
      font-family: 'Pretendard', sans-serif;
      font-size: 32px;
      font-weight: 700;

      &:focus {
        outline: none;
      }
    }

    .post-body {
      width: 100%;
      height: 40vh;
      padding: 10px;
      border: none;
      margin-top: 20px;
      background-color: ${menuGray};
      font-family: 'Pretendard', sans-serif;
      font-size: 17px;
      overflow-y: scroll;
      resize: none;

      &:focus {
        outline: none;
      }
    }

    .button-wrapper {
      position: absolute;
      bottom: -10vh;
      right: 0;

      .cancel,
      .write {
        width: 90px;
        height: 35px;
        margin-left: 10px;
        background-color: ${mainBlack};
        color: white;
        font-family: 'Pretendard', sans-serif;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
`;

export default Write;
