'use client';
import { VStack, Button, Text, useToast } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../ui/Input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToggleGroup, ToggleItem } from '../ui/ToggleGroup';

import { useCreateUser } from '@/hooks/user';

const registerSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  isProvider: z.string().transform((value) => value === 'provider'),
});

type RegisterFormData = z.input<typeof registerSchema>;

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<RegisterFormData>({
    defaultValues: {
      isProvider: 'client',
    },
    resolver: zodResolver(registerSchema),
  });

  const { mutate: createUserMutation, isPending } = useCreateUser();

  const onSubmit = async (data: RegisterFormData) => {
    createUserMutation(data);
  };

  return (
    <VStack
      as='form'
      onSubmit={handleSubmit(onSubmit)}
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
      <Controller
        name='isProvider'
        control={control}
        render={({ field }) => (
          <ToggleGroup
            {...field}
            defaultValue={'client'}
            onChange={(value) => field.onChange(value)}
            mb={4}
          >
            <ToggleItem value='client'>Sou cliente</ToggleItem>
            <ToggleItem value='provider'>Sou cabeleireiro</ToggleItem>
          </ToggleGroup>
        )}
      />
      <Input
        isInvalid={!!errors.name}
        placeholder='Nome'
        {...register('name')}
      />

      {errors.name && (
        <Text role='alert' variant={'error'}>
          {errors.name?.message}
        </Text>
      )}

      <Input
        placeholder='Email'
        autoComplete='username'
        isInvalid={!!errors.email}
        type='email'
        {...register('email')}
      />

      {errors.email && (
        <Text role='alert' variant={'error'}>
          {errors.email?.message}
        </Text>
      )}

      <Input
        placeholder='Senha'
        isInvalid={!!errors.password}
        autoComplete='current-password'
        type='password'
        {...register('password')}
      />

      {errors.password && (
        <Text role='alert' variant={'error'}>
          {errors.password?.message}
        </Text>
      )}

      <Button mt={2} type='submit' isLoading={isPending}>
        Cadastrar
      </Button>
    </VStack>
  );
};

export { RegisterForm };
