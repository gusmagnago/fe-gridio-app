import Chart from '../components/chart/Chart';
import Header from '../components/header/Header';
import { useChartData } from '../hooks/chart/useChartData';

export const Dashboard = () => {
  const { chartData, isLoading, error } = useChartData();

  if (isLoading) return <p>Loading data...</p>;
  if (error || !chartData)
    return <p>Error when loading data, try again later</p>;

  const {
    datesDay,
    period: { month, year },
    seriesData,
  } = chartData;

  const totalCst = seriesData.reduce((acc, value) => acc + value, 0);
  return (
    <div className='w-full h-screen flex items-center flex-col'>
      <Header />
      <div className='w-full p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12'>
        <div className=' w-full pb-10'>
          <p className='text-3xl font-normal text-gray-500 dark:text-gray-400'>
            Customers per day
          </p>
        </div>
        <Chart seriesData={seriesData} categories={datesDay} />
        <div>
          <span className='font-bold text-gray-900 dark:text-white pt-5 flex flex-col'>
            Total customer per period: {totalCst}
          </span>
          <span>
            Period: ({month} - {year})
          </span>
        </div>
      </div>
    </div>
  );
};
