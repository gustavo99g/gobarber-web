import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from '..';
import { TestProvider } from '@/tests/TestProvider';

describe('Header', () => {
  it('should render correctly', async () => {
    TestProvider(<Header />);

    expect(await screen.findByText('test')).toBeInTheDocument();
  });
});
