import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AppointmentForm } from '..';
import user from '@testing-library/user-event';
import { TestProvider } from '@/tests/TestProvider';

describe('AppointmentForm', () => {
  it('should create a appointment', async () => {
    TestProvider(<AppointmentForm providerId='1' />);

    await user.click(screen.getByText('26'));
    await user.click(screen.getByLabelText('16'));
    await user.click(screen.getByLabelText('11'));

    await user.click(screen.getByText('Agendar'));
  });
});
