import { AppointmentForm } from '@/components/AppointmentForm';
import { Header } from '@/components/Header';
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
      <Header />
      <Suspense fallback={<Text>Carregando...</Text>}>
        <AppointmentForm providerId={params.providerId} />
      </Suspense>
    </>
  );
}
