import { List, ListItem, Text } from '@chakra-ui/react';
import { Avatar } from '../ui/Avatar';
import { ClockIcon } from '../ui/icons/Clock';

const Appointments = () => {
  return (
    <>
      <Text fontSize={'xx-large'} fontWeight={'medium'}>
        Horários agendados
      </Text>
      <Text color={'orange'} mt={2} fontWeight={'medium'}>
        Hoje | Dia 06 | Segunda-feira
      </Text>
      <Text mt={10} fontSize={'lg'} color={'gray'}>
        Atendimento a seguir
      </Text>
      <List mt={4}>
        <ListItem
          display={'flex'}
          gap={4}
          alignItems={'center'}
          position={'relative'}
          _before={{
            content: "''",
            position: 'absolute',
            left: 0,
            width: '3px',
            rounded: 'full',
            height: '60%',
            bg: 'orange',
          }}
        >
          <Avatar
            src={'https://i.pravatar.cc/300'}
            w={{
              base: 42,
              sm: 82,
            }}
            h={{
              base: 42,
              sm: 82,
            }}
          />
          <Text>Nome sobrenome</Text>
          <Text display={'flex'} gap={2} ml={'auto'} alignItems={'center'}>
            <ClockIcon w={7} h={7} />
            Horário
          </Text>
        </ListItem>

        <Text
          mt={6}
          color={'gray'}
          borderBottom={'1px solid'}
          borderColor={'shape'}
          pb={2}
        >
          Manha
        </Text>

        <ListItem
          mt={4}
          display={'flex'}
          position={'relative'}
          ml={'120px'}
          gap={4}
          alignItems={'center'}
        >
          <Text
            display={'flex'}
            gap={2}
            position={'absolute'}
            left={'-120px'}
            alignItems={'center'}
          >
            <ClockIcon w={7} h={7} />
            Horário
          </Text>
          <Avatar
            src={'https://i.pravatar.cc/300'}
            w={{
              base: 42,
              sm: 82,
            }}
            h={{
              base: 42,
              sm: 82,
            }}
          />
          <Text>Nome sobrenome</Text>
        </ListItem>
      </List>
    </>
  );
};

export { Appointments };
