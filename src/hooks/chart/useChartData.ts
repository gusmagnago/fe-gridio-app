import { getDateFnsLocale } from '../../utils/variables';
import { useCustomers } from '../customers/useCustomers';
import { IChartData } from './useChartData.types';
import { format, parseISO } from 'date-fns';

export const useChartData = (): {
  isLoading: boolean;
  error: unknown;
  chartData: IChartData | null;
} => {
  const { data, isLoading, error } = useCustomers();

  if (isLoading || error || !data || !data.data?.daily_joins) {
    return { isLoading, error, chartData: null };
  }

  const userLocale = navigator.language || 'en-US';
  const locale = getDateFnsLocale(userLocale);

  const datesFull = data.data.daily_joins.map((entry) => parseISO(entry.date));

  const datesDay = datesFull.map((date) => format(date, 'd', { locale }));

  const month = format(datesFull[0], 'MMMM', { locale }); // Nome do mês (ex: "January")
  const year = format(datesFull[0], 'yyyy', { locale }); // Ano (ex: "2024")

  const seriesData: number[] =
    data.data.daily_joins.map((entry) => entry.count) || [];

  const chartData = {
    datesDay,
    seriesData,
    period: {
      month,
      year,
    },
  };

  return { isLoading, error, chartData };
};
