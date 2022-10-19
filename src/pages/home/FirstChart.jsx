import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { responsive, mainGray } from '../../styles/theme';
import styled from 'styled-components';

const FirstChart = ({ chartData }) => {
  const data = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: '방문자 수',
        data: chartData,
        borderColor: mainGray,
      },
    ],
  };

  return (
    <FirstChartContainer className='flex-center'>
      <h2 className='title'>월별 내 게시글 조회수</h2>
      <Line data={data} className='chart' />
    </FirstChartContainer>
  );
};

const FirstChartContainer = styled.div`
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

export default FirstChart;
