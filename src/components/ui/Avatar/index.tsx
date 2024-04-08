import { Avatar as ChakraAvatar, AvatarProps } from '@chakra-ui/react';

const Avatar = (props: AvatarProps) => {
  return (
    <ChakraAvatar
      alt='avatar'
      width={62}
      height={62}
      rounded={'full'}
      {...props}
    />
  );
};

export { Avatar };
