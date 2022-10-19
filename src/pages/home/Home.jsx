import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { currentUserAtom } from '../../atom';
import FirstChart from './FirstChart';
import SecondChart from './SecondChart';
import ThirdChart from './ThirdChart';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { responsive, mainGray } from '../../styles/theme';
import styled from 'styled-components';

const Home = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  return (
    <HomeContainer>
      <div className='profile-box flex-center'>
        <p className='username flex-center'>
          <IoPersonCircleSharp size={50} className='icon' />
          {currentUser ? currentUser.userInfo.name : '유저정보 없음'}
        </p>
        <p className='email'>{currentUser && currentUser.userInfo.email}</p>
      </div>
      {currentUser ? (
        <div className='chart-container flex-center'>
          <FirstChart chartData={currentUser.chartData.data1} />
          <SecondChart chartData={currentUser.chartData.data2} />
          <ThirdChart chartData={currentUser.chartData.data3} />
        </div>
      ) : (
        <div className='login-sign flex-center'>
          로그인 후 서비스를 사용할 수 있습니다.
        </div>
      )}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding-top: 70.35px;
  margin: 3.5vw;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-sign {
    height: 50vh;
    color: ${mainGray};
    font-size: 28px;
    font-weight: 700;
  }

  .profile-box {
    align-items: flex-start;
    flex-direction: column;

    .username {
      font-size: 24px;
      font-weight: 700;
      .icon {
        margin-right: 10px;
      }
    }

    .email {
      height: 18px;
      font-size: 18px;
    }
  }

  .chart-container {
    height: 60vh;
  }

  @media ${responsive.tablet} {
    .chart-container {
      flex-direction: column;
      height: auto;
      margin-top: 50px;
    }

    .login-sign {
      font-size: 18px;
    }
  } ;
`;

export default Home;
