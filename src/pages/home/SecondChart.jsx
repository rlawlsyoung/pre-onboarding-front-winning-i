import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { responsive, mainGray } from '../../styles/theme';
import styled from 'styled-components';

const SecondChart = ({ chartData }) => {
  const data = {
    labels: ['10대', '20대', '30대', '40대', '50대 이상'],
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          '#e5e5e5',
          '#d5d5d5',
          '#c5c5c5',
          '#b5b5b5',
          '#a5a5a5',
        ],
        borderColor: '#858585',
      },
    ],
  };

  return (
    <SecondChartContainer className='flex-center'>
      <div className='chart-container flex-center'>
        <h2 className='title'>조회자 연령층 (%)</h2>
        <Pie data={data} className='chart' />
      </div>
    </SecondChartContainer>
  );
};

const SecondChartContainer = styled.div`
  flex-direction: column;
  width: calc(93vw / 3);
  font-size: 24px;
  font-weight: 700;

  .chart-container {
    flex-direction: column;
    width: 20vw;
    .title {
      margin-bottom: 15px;
    }
  }

  @media ${responsive.tablet} {
    width: 80vw;
    .chart-container {
      width: 60vw;
      margin-bottom: 50px;
    }
  }
`;

export default SecondChart;
