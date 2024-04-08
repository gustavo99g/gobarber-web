'use client';
import {
  Box,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ptBR } from 'date-fns/locale';
import { DatePicker } from '../ui/DatePicker';
import { createAppointment } from '@/services/provider';
import { ToggleGroup, ToggleItem } from '../ui/ToggleGroup';
import { useDayAvailability, useMonthAvailability } from '@/hooks/providers';
import { Controller, useForm } from 'react-hook-form';
import { format, formatISO, getDay, subDays } from 'date-fns';
import { useState } from 'react';
import { getDate } from 'date-fns/getDate';
import { useMutation } from '@tanstack/react-query';
import { CheckIcon } from '../ui/icons/Check';
import { useRouter } from 'next/navigation';

interface FormData {
  date: Date;
  hour: string;
}

const AppointmentForm = ({ providerId }: { providerId: string }) => {
  const [month, setMonth] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const { handleSubmit, watch, control } = useForm<FormData>({
    defaultValues: {
      hour: '',
      date: new Date(),
    },
  });

  const { data: dayAvailability } = useDayAvailability(
    formatISO(watch('date')),
    providerId
  );
  const { data: monthAvailability } = useMonthAvailability(
    formatISO(month),
    providerId
  );

  const { mutate: createAppointmentMutation } = useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      onOpen();
    },
  });

  const onSubmit = async (data: FormData) => {
    const { date, hour } = data;
    const payload = {
      provider_id: providerId,
      date: formatISO(date.setHours(Number(hour.split(':')[0]))),
    };
    createAppointmentMutation(payload);
  };

  return (
    <>
      <Container
        onSubmit={handleSubmit(onSubmit)}
        maxW={{
          base: '100%',
          lg: '1200px',
          xl: '1600px',
        }}
        display={{
          base: 'block',
          lg: 'flex',
        }}
        flexDirection={'row-reverse'}
        justifyContent={'space-between'}
        gap={10}
        py={5}
        px={{
          base: 6,
          lg: 20,
        }}
        as={'form'}
      >
        <Controller
          name={'date'}
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onDayClick={(date) => field.onChange(date)}
              onMonthChange={(date) => setMonth(date)}
              disabled={[
                (date) => date < subDays(new Date(), 1),
                (date) => getDay(date) === 0,
                (date) =>
                  monthAvailability
                    ?.map(({ day, available }) => available && getDate(day))
                    .includes(getDate(date)) === false,
              ]}
            />
          )}
        />

        <Box mt={6} px={2} w={'100%'}>
          <Text mt={4} fontSize={'xl'}>
            Escolha o horário
          </Text>

          <Text
            fontSize={'sm'}
            mt={{
              base: 4,
              lg: 20,
            }}
            color={'gray'}
          >
            Manhã
          </Text>
          <Controller
            name={'hour'}
            control={control}
            render={({ field }) => (
              <ToggleGroup
                {...field}
                mt={2}
                onChange={(value) => {
                  field.onChange(value);
                }}
                value={field.value}
              >
                {dayAvailability?.morning?.map(({ hour, available }) => (
                  <ToggleItem
                    variant='solid'
                    key={hour}
                    value={hour.toString()}
                  >
                    {hour}
                  </ToggleItem>
                ))}
              </ToggleGroup>
            )}
          />

          <Text
            fontSize={'sm'}
            mt={{
              base: 4,
              lg: 20,
            }}
            color={'gray'}
          >
            Tarde
          </Text>

          <Controller
            name={'hour'}
            control={control}
            render={({ field }) => (
              <ToggleGroup
                {...field}
                mt={2}
                onChange={(value) => {
                  field.onChange(value);
                }}
                value={field.value}
              >
                {dayAvailability?.afternoon?.map(({ hour }) => (
                  <ToggleItem
                    variant='solid'
                    key={hour}
                    value={hour.toString()}
                  >
                    {hour}
                  </ToggleItem>
                ))}
              </ToggleGroup>
            )}
          />
          <Button type='submit' mt={6}>
            Agendar
          </Button>
        </Box>
      </Container>

      <Modal
        onClose={onClose}
        size={{
          base: 'full',
          lg: 'lg',
        }}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg={'background'}>
          <ModalCloseButton />
          <ModalBody
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <CheckIcon fontSize={'180px'} />
            <Text fontWeight={'medium'} textAlign={'center'} fontSize={'4xl'}>
              Agendamento concluído
            </Text>
            <Text px={10} color={'gray'} textAlign={'center'}>
              {format(watch('date'), "eeee ', dia' dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}{' '}
              às {watch('hour')}h
            </Text>
            <Button
              mt={4}
              w={'fit-content'}
              px={10}
              onClick={() => {
                router.push('/');
                onClose();
              }}
            >
              Ok
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { AppointmentForm };
