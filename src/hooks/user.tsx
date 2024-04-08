import { getUser } from '@/services/user';
import { useQuery } from '@tanstack/react-query';

// const useCreateUser =<T,>(props?: UseMutationOptions) => {
//   return useMutation<T>({
//     mutationFn:(payload)=> createUser(payload),
//     ...props,
//   });
// };

// export { useCreateUser };

const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });
};

export { useUser };
