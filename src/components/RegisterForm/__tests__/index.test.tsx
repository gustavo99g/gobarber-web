import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import { describe, expect, it, vi } from 'vitest';
import { RegisterForm } from '..';
import { TestProvider } from '@/tests/TestProvider';

describe('RegisterForm', () => {
  it('should render errors messages', async () => {
    TestProvider(<RegisterForm />);
    waitFor(async () => {
      await user.type(screen.getByPlaceholderText('Nome'), 'a');
      await user.type(screen.getByPlaceholderText('Email'), 'a');
      await user.type(screen.getByPlaceholderText('Senha'), 'a');
    });
    await user.click(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(3);
  });

  it('should not render errors with valid values', async () => {
    TestProvider(<RegisterForm />);
    await waitFor(async () => {
      await user.type(screen.getByPlaceholderText('Nome'), 'test');
      await user.type(screen.getByPlaceholderText('Email'), 'mail@mail.com');
      await user.type(screen.getByPlaceholderText('Senha'), '123456');
    });
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.queryAllByRole('alert')).toBeInTheDocument();
    });
  });
  it('should select provider or client', async () => {
    TestProvider(<RegisterForm />);
    await user.click(screen.getByLabelText('Sou cabeleireiro'));
  });
});
