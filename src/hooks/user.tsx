import { getUser, updateUser } from '@/services/user';
import { useToast } from '@chakra-ui/react';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';

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

const useUpdateUser = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast({
        title: 'Conta atualizada com sucesso',
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });
    },
  });
};

export { useUser, useUpdateUser };
