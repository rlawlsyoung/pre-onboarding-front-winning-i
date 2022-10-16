import { IoPersonCircleSharp } from 'react-icons/io5';
import FirstChart from './FirstChart';
import SecondChart from './SecondChart';
import ThirdChart from './ThirdChart';
import { responsive } from '../../styles/theme';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <div className='profile-box flex-center'>
        <p className='username flex-center'>
          <IoPersonCircleSharp size={50} className='icon' /> Username1
        </p>
        <p className='email'>jinyoung01099@gmail.com</p>
      </div>
      <div className='chart-container flex-center'>
        <FirstChart />
        <SecondChart />
        <ThirdChart />
      </div>
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
  } ;
`;

export default Home;
