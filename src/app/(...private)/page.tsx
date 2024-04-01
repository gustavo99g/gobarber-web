import { fetchClient } from '@/utils/fetch';
import { Box, Text } from '@chakra-ui/react';

export default async function Home() {
  const data = await fetchClient('/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (
    <Box as='main' bg={'orange'}>
      <Text color={'white'}>Page</Text>
    </Box>
  );
}
