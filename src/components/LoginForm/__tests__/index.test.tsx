import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LoginForm } from '..';
import { TestProvider } from '@/tests/TestProvider';

describe('LoginForm', () => {
  it('should render errors messages', async () => {
    TestProvider(<LoginForm />);
    await user.click(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
  });

  it('should not render errors with valid values', async () => {
    TestProvider(<LoginForm />);

    await waitFor(async () => {
      await user.type(screen.getByPlaceholderText('Email'), 'email@mail.com');

      await user.type(screen.getByPlaceholderText('Senha'), '123456');
    });

    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.queryAllByRole('alert')).toHaveLength(0);
    });
  });
});
