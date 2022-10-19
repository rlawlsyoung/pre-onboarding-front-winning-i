import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { responsive, mainGray } from '../../styles/theme';
import styled from 'styled-components';

const ThirdChart = ({ chartData }) => {
  const data = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: '게시글 수',
        data: chartData,
        backgroundColor: '#c5c5c5',
      },
    ],
  };

  return (
    <ThirdChartContainer className='flex-center'>
      <h2 className='title'>월별 게시글 등록 수</h2>
      <Bar data={data} className='chart' />
    </ThirdChartContainer>
  );
};

const ThirdChartContainer = styled.div`
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
