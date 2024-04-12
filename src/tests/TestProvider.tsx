import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

const createTestQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // turn off retries for testing
      },
    },
  });
  return queryClient;
};

const TestProvider = (ui: React.ReactElement) => {
  const queryClient = createTestQueryClient();

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return { ...render(ui, { wrapper }), queryClient };
};

export { TestProvider };
