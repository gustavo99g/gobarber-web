import { Appointments } from '@/components/Appointments';
import { Header } from '@/components/Header';
import { Providers } from '@/components/Providers';
import { getUser } from '@/services/user';
import { Container } from '@chakra-ui/react';

export default async function Home() {
  const user = await getUser();

  return (
    <>
      <Header />

      <Container
        as='main'
        py={5}
        maxW={{
          base: '100%',
          lg: '1200px',
          xl: '1600px',
        }}
        px={{
          base: 6,
          lg: 20,
        }}
      >
        {user.isProvider ? <Appointments /> : <Providers />}
      </Container>
    </>
  );
}
