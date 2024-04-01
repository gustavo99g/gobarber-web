'use client';
import {
  Box,
  useRadioGroup,
  UseRadioGroupProps,
  HStack,
  chakra,
  useRadio,
  UseRadioProps,
  BoxProps,
  forwardRef,
} from '@chakra-ui/react';
import { Children, cloneElement } from 'react';

interface ToggleItemProps extends UseRadioProps {
  children: React.ReactNode;
}

const ToggleItem = forwardRef<ToggleItemProps, 'input'>(
  ({ children, ...props }, ref) => {
    const { state, getLabelProps, getInputProps, getRadioProps, htmlProps } =
      useRadio(props);

    return (
      <chakra.label {...htmlProps} cursor={'pointer'} {...getLabelProps()}>
        <input {...getInputProps({})} hidden />
        <Box
          ref={ref}
          color={state.isChecked ? 'orange.500' : 'gray'}
          pb={2}
          fontSize={'lg'}
          position={'relative'}
          fontWeight={500}
          _after={{
            content: '""',
            borderBottom: state.isChecked ? '4px solid orange' : 'none',
            width: '100%',
            display: 'block',
            position: 'absolute',
            bottom: -2,
            rounded: 'full',
            mb: 2,
          }}
          {...getRadioProps()}
        >
          {children}
        </Box>
      </chakra.label>
    );
  }
);

type ToggleGroupProps = UseRadioGroupProps &
  BoxProps & {
    children: React.ReactElement[];
  };

const ToggleGroup = forwardRef<ToggleGroupProps, 'div'>(
  ({ children, ...props }, ref) => {
    const { value, getRootProps, getRadioProps } = useRadioGroup(props);

    return (
      <HStack ref={ref} spacing={8} {...getRootProps()} {...props}>
        {Children.map(children, (child) =>
          cloneElement(child, getRadioProps(child.props))
        )}
      </HStack>
    );
  }
);

export { ToggleGroup, ToggleItem };
