'use client';

import { useUser } from '@/hooks/user';
import { Button, Container, chakra, Img, Text, Flex } from '@chakra-ui/react';

import { ShutDownIcon } from '../ui/icons/ShutDown';
import { Avatar } from '../ui/Avatar';
import Link from 'next/link';
import { fetchClient } from '@/utils/fetch';

const Header = () => {
  const { data } = useUser();

  return (
    <chakra.header bg={'blackMedium'}>
      <Container
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        maxW={{
          base: '100%',
          lg: '1200px',
          xl: '1600px',
        }}
        py={5}
        px={{
          base: 6,
          lg: 20,
        }}
      >
        <Img
          display={{ base: 'none', lg: 'block' }}
          alt='Logo'
          src={'/images/logo.svg'}
          width={150}
          height={150}
        />

        <Flex
          w={'100%'}
          justifyContent={{
            lg: 'flex-end',
          }}
        >
          <Button
            as={Link}
            href={'/profile'}
            variant={'ghost'}
            w={{
              base: '100%',
              lg: 'auto',
            }}
            p={0}
            gap={{
              lg: 4,
            }}
            display={'flex'}
            justifyContent={{
              base: 'space-between',
            }}
            flexDirection={{
              lg: 'row-reverse',
            }}
          >
            <Text
              fontSize={'larger'}
              fontWeight={'medium'}
              color={'gray'}
              align={'left'}
            >
              Bem vindo,
              <chakra.span display={'block'} color={'orange'}>
                {data?.name}
              </chakra.span>
            </Text>
            <Avatar
              src={data?.avatar ?? 'https://i.pravatar.cc/300'}
              justifySelf={'end'}
            />
          </Button>

          <Button
            variant={'ghost'}
            w={'fit-content'}
            h={'fit-content'}
            alignSelf={'center'}
            ml={4}
            display={{ base: 'none', lg: 'block' }}
          >
            <ShutDownIcon />
          </Button>
        </Flex>
      </Container>
    </chakra.header>
  );
};

export { Header };
