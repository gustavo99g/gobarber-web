import {
  getDayAvailability,
  getMonthAvailability,
  getProviders,
} from '@/services/provider';
import { useQuery } from '@tanstack/react-query';

const useProviders = () => {
  return useQuery({
    queryKey: ['providers'],
    queryFn: getProviders,
  });
};

const useDayAvailability = (date: string, providerId: string) => {
  return useQuery({
    queryKey: ['day-availability', date, providerId],
    queryFn: () => getDayAvailability(date, providerId),
  });
};

const useMonthAvailability = (date: string, providerId: string) => {
  return useQuery({
    queryKey: ['month-availability', date, providerId],
    queryFn: () => getMonthAvailability(date, providerId),
  });
};

export { useProviders, useDayAvailability, useMonthAvailability };
