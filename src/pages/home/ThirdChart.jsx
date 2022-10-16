import { useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { responsive, mainGreen } from '../../styles/theme';
import styled from 'styled-components';

const ThirdChart = () => {
  const [data, setData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: '게시글 수',
        data: [5, 11, 12, 8, 4, 2],
        backgroundColor: mainGreen,
      },
    ],
  });

  return (
    <StyledThirdChart className='flex-center'>
      <h2 className='title'>월별 게시글 등록 수</h2>
      <Bar data={data} className='chart' />
    </StyledThirdChart>
  );
};

const StyledThirdChart = styled.div`
  flex-direction: column;
  width: calc(93vw / 3);
  font-size: 24px;
  font-weight: 700;

  .title {
    margin-bottom: 75px;
  }

  @media ${responsive.tablet} {
    width: 80vw;

    .title {
      margin-bottom: 25px;
    }
  }
`;

export default ThirdChart;
