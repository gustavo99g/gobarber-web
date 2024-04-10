import {
  Box,
  Button,
  chakra,
  ChakraComponent,
  InputProps,
} from '@chakra-ui/react';
import { Avatar } from '../Avatar';
import { CameraIcon } from '../icons/Camera';
import {
  ComponentProps,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

interface AvatarFileInputProps extends InputProps {
  avatar?: string;
}

const AvatarFileInput = forwardRef<HTMLInputElement, AvatarFileInputProps>(
  ({ avatar, ...props }, ref) => {
    const [file, setFile] = useState<File | null>();

    const avatarFileInputRef = useRef<HTMLInputElement>(ref as any);
    useImperativeHandle(ref, () => avatarFileInputRef.current, []);
    const currentImage = file ? URL.createObjectURL(file) : avatar;

    return (
      <Box position={'relative'}>
        <Avatar width={150} src={currentImage} height={150} rounded={'full'} />
        <chakra.input
          type='file'
          ref={avatarFileInputRef}
          hidden
          accept='image/*'
          onChange={(e) => setFile(e.target.files?.[0])}
          {...props}
        />
        <Button
          position={'absolute'}
          width={'fit-content'}
          onClick={() => avatarFileInputRef?.current?.click()}
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
  }
);

AvatarFileInput.displayName = 'AvatarFileInput';

export { AvatarFileInput };
