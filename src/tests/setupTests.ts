import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { worker } from '@/services/mocks';

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
    usePathname: vi.fn(),
    
  };
});

vi.mock("next/headers", async () => {
  const actual = await vi.importActual("next/headers");
  return {
    ...actual,
    cookies:() => {
      return {
        get: vi.fn(),
        set: vi.fn(),
        delete: vi.fn(),
      }
    }
  };
});

beforeAll(() => {
  worker.listen({
    onUnhandledRequest: 'warn',
  })
})

afterEach(() => {
  cleanup();
  worker.resetHandlers()
})

afterAll(() => {
  worker.close()
})