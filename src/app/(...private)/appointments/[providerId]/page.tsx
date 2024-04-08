import { AppointmentForm } from '@/components/AppointmentForm';
import { Avatar } from '@/components/ui/Avatar';
import { ArrowIcon } from '@/components/ui/icons/Arrow';
import { useUser } from '@/hooks/user';
import { getProviders } from '@/services/provider';
import { getUser } from '@/services/user';
import { Button, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function AppointmentsPage({
  params,
}: {
  params: { providerId: string };
}) {
  const user = await getUser();

  return (
    <>
      <HStack as={'header'} px={4} py={2} bg={'blackMedium'}>
        <Button as={Link} href={'/'} variant={'ghost'}>
          <ArrowIcon color={'gray'} fontSize={'3xl'} />
        </Button>
        <Text ml={'auto'} fontSize={'2xl'}>
          Agendamento
        </Text>
        <Avatar ml={'auto'} src={user.avatar ?? 'https://i.pravatar.cc/300'} />
      </HStack>
      <Suspense fallback={<Text>Carregando...</Text>}>
        <AppointmentForm providerId={params.providerId} />
      </Suspense>
    </>
  );
}
