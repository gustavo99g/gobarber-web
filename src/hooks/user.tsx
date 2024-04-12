import { setCookie } from '@/app/actions';
import { createUser, getUser, login, updateUser } from '@/services/user';
import { useToast } from '@chakra-ui/react';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

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

const useLogin = () => {
  const toast = useToast();
  const { push } = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      toast({
        title: 'Login realizado com sucesso',
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });
      await setCookie('token', data.token);

      push('/');
    },
  });
};

const useCreateUser = () => {
  const { push } = useRouter();

  const toast = useToast();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast({
        title: 'Conta criada com sucesso',
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });
      push('/login');
    },
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

export { useUser, useUpdateUser, useLogin, useCreateUser };
