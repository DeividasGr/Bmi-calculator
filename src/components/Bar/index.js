import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

function Bar({ date, bmi }) {
  const data = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(63, 81, 181, 700);
    gradient.addColorStop(0, '#929dd9');
    gradient.addColorStop(1, '#172b4d');

    return {
      labels: date,
      datasets: [
        {
          label: 'BMI',
          data: bmi,
          backgroundColor: gradient,
          borderColor: '#3F51B5',
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date',
            fontSize: 18,
            fontColor: 'white',
          },
          gridLines: {
            display: false,
            color: 'white',
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'BMI',
            fontSize: 18,
            fontColor: 'white',
          },
          gridLines: {
            display: false,
            color: 'white',
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16,
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13,
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

Bar.propTypes = {
  date: PropTypes.array,
  bmi: PropTypes.array,
};

export default Bar;
