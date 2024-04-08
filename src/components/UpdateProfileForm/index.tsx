'use client';

import { Button, Container, chakra } from '@chakra-ui/react';
import { Avatar } from '../ui/Avatar';
import { useUser } from '@/hooks/user';
import { Input } from '../ui/Input';
import { AvatarFileInput } from '../ui/AvatarFileInput';

const UpdateProfileForm = () => {
  const { data: user } = useUser();

  return (
    <Container
      as={'form'}
      display={'flex'}
      alignItems={'center'}
      position={'relative'}
      top={-20}
      flexDirection={'column'}
      gap={2}
      px={8}
    >
      <AvatarFileInput avatar={user?.avatar} />
      <Input name={'name'} placeholder={'Nome'} defaultValue={user?.name} />

      <Input
        name={'email'}
        placeholder={'Email'}
        type='email'
        defaultValue={user?.email}
      />

      <chakra.label mt={2} />
      <Input name={'password'} placeholder={'Senha atual'} type={'password'} />

      <Input
        name={'confirmPassword'}
        placeholder={'Nova senha'}
        type={'password'}
      />
      <Input
        name={'confirmPassword'}
        placeholder={'Confirme sua senha'}
        type={'password'}
      />
      <Button mt={12}>Confirmar mudanças</Button>
    </Container>
  );
};

export { UpdateProfileForm };
