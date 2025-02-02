import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { IChartProps } from './Chart.types';

const Chart = ({ seriesData, categories }: IChartProps) => {
  const chartConfig: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: '',
        data: seriesData,
      },
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        rotate: 0,
        style: {
          colors: '#6b7280',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#323438',
          fontSize: '12px',
        },
      },
    },
    stroke: { curve: 'smooth', width: 2 },
    markers: { size: 4 },
    colors: ['#4134f0'],
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 2,
    },
    tooltip: {
      theme: 'light',
      x: {
        formatter: (value: number) => `${value} Jan`,
      },
      y: {
        formatter: (value: number) => `${value} customers per day`,
        title: {
          formatter: (seriesName: string) => `${seriesName}:`,
        },
      },
    },
  };

  return (
    <div className='w-full bg-white rounded-lg shadow-md dark:bg-gray-800 p-4 md:p-1 sm:p-1'>
      <ReactApexChart
        options={chartConfig}
        series={chartConfig.series}
        type='area'
        height={400}
      />
    </div>
  );
};

export default Chart;
