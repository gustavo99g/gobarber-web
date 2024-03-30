import { RegisterForm } from '@/components/RegisterForm';
import { ArrowIcon } from '@/components/ui/icons/Arrow';
import { VStack, Img, Box, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

export default function Register() {
  return (
    <Box
      as='main'
      height={'100vh'}
      display={'grid'}
      gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
    >
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
          alt='Register background'
          w={'100%'}
          h={'100%'}
          src={'/images/bg-register.png'}
          blendMode={'hard-light'}
        />
      </Box>
      <VStack
        as={'section'}
        h={'100%'}
        py={{
          base: 10,
          lg: 20,
        }}
      >
        <Image alt='Logo' src={'/images/logo.svg'} width={300} height={300} />

        <RegisterForm />

        <Text
          as={Link}
          mt={{
            base: 'auto',
            xl: 40,
          }}
          href={'/login'}
          display={'flex'}
          gap={2}
        >
          <ArrowIcon fontSize={'1.5rem'} />
          Voltar para o login
        </Text>
      </VStack>
    </Box>
  );
}
