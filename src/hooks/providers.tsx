import {
  createAppointment,
  CreateAppointmentPayload,
  getDayAvailability,
  getMonthAvailability,
  getProviders,
} from '@/services/provider';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';

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

interface UseCreateAppointmentProps {
  onSuccess: () => void;
}
const useCreateAppointment = ({ onSuccess }: UseCreateAppointmentProps) => {
  return useMutation({
    mutationFn: async (payload: CreateAppointmentPayload) =>
      await createAppointment(payload),
    onSuccess,
  });
};

export {
  useProviders,
  useDayAvailability,
  useMonthAvailability,
  useCreateAppointment,
};
