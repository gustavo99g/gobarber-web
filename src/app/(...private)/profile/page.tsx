import { ArrowIcon } from '@/components/ui/icons/Arrow';
import { UpdateProfileForm } from '@/components/UpdateProfileForm';
import { Box, Button, Container, chakra } from '@chakra-ui/react';
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <Box as='header' bg={'blackMedium'}>
        <Container
          maxW={{
            base: '100%',
            lg: '1200px',
            xl: '1600px',
          }}
          py={8}
        >
          <Button variant={'ghost'} as={Link} href={'/'}>
            <ArrowIcon fontSize={'4rem'} color={'gray'} />
          </Button>
        </Container>
      </Box>

      <UpdateProfileForm />
    </>
  );
}
