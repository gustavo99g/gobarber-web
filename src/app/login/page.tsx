import { LoginForm } from '@/components/LoginForm';
import { LogoutIcon } from '@/components/ui/icons/Logout';
import { Input } from '@/components/ui/Input';
import { Box, Button, Image, Img, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Login() {
  return (
    <Box
      as='main'
      height={'100vh'}
      display={'grid'}
      gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
    >
      <VStack
        as={'section'}
        h={'100%'}
        py={{
          base: 10,
          lg: 20,
          xl: 40,
        }}
      >
        <Image alt='Logo' src={'/images/logo.svg'} width={300} height={300} />

        <Text
          textAlign={'center'}
          fontSize={{
            base: 'xl',
            lg: '2xl',
          }}
          fontWeight={'medium'}
        >
          Faça seu login
        </Text>
        <LoginForm />

        <Text
          as={Link}
          color={'orange'}
          mt={{
            base: 'auto',
            xl: 40,
          }}
          href={'/register'}
          display={'flex'}
          gap={2}
        >
          <LogoutIcon fontSize={'1.5rem'} />
          Cria uma conta
        </Text>
      </VStack>

      <Box
        as={'section'}
        overflow={'hidden'}
        display={{
          base: 'none',
          xl: 'block',
        }}
      >
        <Img
          objectFit={'fill'}
          alt='login background'
          w={'100%'}
          h={'100%'}
          src={'/images/bg-login.png'}
          blendMode={'hard-light'}
        />
      </Box>
    </Box>
  );
}
