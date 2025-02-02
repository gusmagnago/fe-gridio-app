import { useQuery } from '@tanstack/react-query';
import { BASEURL } from '../../utils/variables';
import { ICustomerData } from './useCustomers.type';

const fetchCustomers = async (): Promise<ICustomerData> => {
  const res = await fetch(`${BASEURL}c/9371-4923-495b-9217`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
};

export const useCustomers = () => {
  return useQuery<ICustomerData>({
    queryKey: ['customers'],
    queryFn: fetchCustomers,
    staleTime: 1000 * 60 * 5,
  });
};
