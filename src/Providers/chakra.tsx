'use client';

import { theme } from '@/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as Chakra } from '@chakra-ui/react';

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <Chakra theme={theme}>{children}</Chakra>
    </CacheProvider>
  );
}
