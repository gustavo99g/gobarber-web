'use client';
import { useToast } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = useToast();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onError: (error) => {
              if (error.message) {
                toast({
                  title: 'Falha ao realizar a operação',
                  position: 'top-right',
                  description: error.message.split(':')[1],
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: 'Falha ao realizar a operação',
                  position: 'top-right',
                  description: 'Por favor, tente novamente mais tarde',
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
                });
              }
            },
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export { ReactQueryProvider };
