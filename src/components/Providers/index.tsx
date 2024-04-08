import { getProviders } from '@/services/provider';
import { Box, Img, List, ListItem, Text } from '@chakra-ui/react';
import { CalendarIcon } from '../ui/icons/Calendar';
import { ClockIcon } from '../ui/icons/Clock';
import Link from 'next/link';

const Providers = async () => {
  const providers = await getProviders();

  return (
    <>
      <Text fontSize={'2xl'} fontWeight={'medium'}>
        Cabeleireiros
      </Text>

      <List
        mt={6}
        spacing={{
          base: 6,
          lg: 0,
        }}
        display={{
          lg: 'grid',
        }}
        gridTemplateColumns={'1fr 1fr'}
        gap={10}
      >
        {providers.map((provider) => (
          <ListItem
            as={Link}
            key={provider.id}
            href={`/appointments/${provider.id}`}
            display={'flex'}
            gap={4}
          >
            <Img
              src={provider.avatar ?? 'https://i.pravatar.cc/300'}
              rounded={'full'}
              w={70}
              h={70}
            />

            <Box>
              <Text fontSize={'2xl'} fontWeight={'medium'}>
                {provider.name}
              </Text>
              <Text color={'gray'} fontSize={'small'}>
                <CalendarIcon />
                Segunda à sexta
              </Text>
              <Text color={'gray'} fontSize={'small'}>
                <ClockIcon />
                8h às 18h
              </Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export { Providers };
