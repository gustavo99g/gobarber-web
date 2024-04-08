import { Box, Button } from '@chakra-ui/react';
import { Avatar } from '../Avatar';
import { CameraIcon } from '../icons/Camera';

interface AvatarFileInputProps {
  avatar?: string;
}

const AvatarFileInput = ({ avatar }: AvatarFileInputProps) => {
  return (
    <Box position={'relative'}>
      <Avatar
        width={150}
        src={avatar ?? 'https://i.pravatar.cc/300'}
        height={150}
        rounded={'full'}
      />
      <Button
        position={'absolute'}
        width={'fit-content'}
        h={'fit-content'}
        rounded={'full'}
        p={4}
        bottom={0}
        right={0}
      >
        <CameraIcon fontSize={'1.5rem'} />
      </Button>
    </Box>
  );
};

export { AvatarFileInput };
