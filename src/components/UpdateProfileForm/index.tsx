'use client';

import { Button, Container, Text, chakra } from '@chakra-ui/react';
import { useUpdateUser, useUser } from '@/hooks/user';
import { Input } from '../ui/Input';
import { AvatarFileInput } from '../ui/AvatarFileInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const updateProfileFormSchema = z
  .object({
    name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: z.string().email({ message: 'Email inválido' }),
    currentPassword: z
      .string()
      .min(6, 'Senha deve ter pelo menos 6 caracteres')
      .optional()
      .or(z.literal('')),
    newPassword: z
      .string()
      .min(6, 'Senha deve ter pelo menos 6 caracteres')
      .optional()
      .or(z.literal('')),
    confirmPassword: z
      .string()
      .min(6, 'Senha deve ter pelo menos 6 caracteres')
      .optional()
      .or(z.literal('')),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword'],
  });

const UpdateProfileForm = () => {
  const { data: user } = useUser();
  const { mutate: updateUserMutation } = useUpdateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof updateProfileFormSchema>>({
    resolver: zodResolver(updateProfileFormSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
  });

  const onSubmit = (data: z.infer<typeof updateProfileFormSchema>) => {
    updateUserMutation(data);
  };

  return (
    <Container
      as={'form'}
      onSubmit={handleSubmit(onSubmit)}
      display={'flex'}
      alignItems={'center'}
      position={'relative'}
      top={-20}
      flexDirection={'column'}
      gap={2}
      px={8}
    >
      <AvatarFileInput avatar={user?.avatar} />
      <Input
        {...register('name')}
        placeholder={'Nome'}
        isInvalid={!!errors.name}
      />
      {errors.email && <Text variant={'error'}>{errors?.name?.message}</Text>}

      <Input
        placeholder={'Email'}
        {...register('email')}
        type='email'
        isInvalid={!!errors.email}
      />
      {errors.email && <Text variant={'error'}>{errors.email.message}</Text>}

      <chakra.label mt={2} />
      <Input
        {...register('currentPassword')}
        placeholder={'Senha atual'}
        type={'password'}
        isInvalid={!!errors.currentPassword}
      />

      {errors.currentPassword && (
        <Text variant={'error'}>{errors.currentPassword.message}</Text>
      )}

      <Input
        {...register('newPassword')}
        placeholder={'Nova senha'}
        type={'password'}
        isInvalid={!!errors.newPassword}
      />

      {errors.newPassword && (
        <Text variant={'error'}>{errors.newPassword.message}</Text>
      )}

      <Input
        {...register('confirmPassword')}
        placeholder={'Confirme sua senha'}
        type={'password'}
        isInvalid={!!errors.confirmPassword}
      />

      {errors.confirmPassword && (
        <Text variant={'error'}>{errors.confirmPassword.message}</Text>
      )}
      <Button mt={12} type='submit'>
        Confirmar mudanças
      </Button>
    </Container>
  );
};

export { UpdateProfileForm };
