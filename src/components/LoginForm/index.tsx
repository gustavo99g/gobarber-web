'use client';
import { VStack, Button, Text } from '@chakra-ui/react';
import { Input } from '../ui/Input';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useLogin } from '@/hooks/user';

const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginMutation, isPending } = useLogin();

  const onSubmit = (data: any) => {
    loginMutation(data);
  };

  return (
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      as='form'
      mt={10}
      w={'100%'}
      maxW={{
        base: '300px',
        md: '400px',
        lg: '500px',
        '2xl': '600px',
      }}
      spacing={2}
    >
      <Input
        {...register('email')}
        isInvalid={!!errors.email}
        placeholder='Email'
        type='email'
        autoComplete='username'
      />
      {errors.email && (
        <Text role='alert' variant={'error'}>
          {errors.email.message}
        </Text>
      )}
      <Input
        {...register('password')}
        isInvalid={!!errors.password}
        placeholder='Senha'
        type='password'
        autoComplete='current-password'
      />

      {errors.password && (
        <Text role='alert' variant={'error'}>
          {errors.password.message}
        </Text>
      )}

      <Button mt={2} type='submit' isLoading={isPending}>
        {' '}
        Entrar
      </Button>
    </VStack>
  );
};

export { LoginForm };
