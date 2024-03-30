import {
  InputGroup,
  InputLeftElement,
  Input as ChakraInput,
  InputProps,
} from '@chakra-ui/react';
import { MailIcon } from '../icons/Main';
import { PasswordIcon } from '../icons/Password';
import { cloneElement, forwardRef } from 'react';
import { AccountIcon } from '../icons/Account';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    const LeftElement = {
      text: AccountIcon,
      password: PasswordIcon,
      email: MailIcon,
    };

    return (
      <InputGroup bg={'inputs'} rounded={'lg'}>
        <InputLeftElement top={3} left={2} pointerEvents={'none'}>
          {!type ? (
            <AccountIcon fontSize={'2rem'} />
          ) : (
            cloneElement(
              LeftElement[type as keyof typeof LeftElement]({
                fontSize: '2rem',
              })
            )
          )}
        </InputLeftElement>
        <ChakraInput pl={14} border={'none'} type={type} ref={ref} {...props} />
      </InputGroup>
    );
  }
);

Input.displayName = 'Input';

export { Input };
