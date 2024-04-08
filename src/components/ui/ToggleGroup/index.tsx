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
  variant?: 'solid' | 'dashed';
}

const ToggleItem = forwardRef<ToggleItemProps, 'input'>(
  ({ children, variant = 'dashed', ...props }, ref) => {
    const { state, getLabelProps, getInputProps, getRadioProps, htmlProps } =
      useRadio({
        ...props,
      });

    const variants = {
      solid: {
        bg: 'shape',
        p: 2,
        rounded: 'lg',
        ...(state.isChecked && { bg: 'orange', color: 'inputs' }),
      },
      dashed: {
        color: state.isChecked ? 'orange.500' : 'gray',
        _after: {
          content: '""',
          borderBottom: state.isChecked ? '4px solid orange' : 'none',
          width: '100%',
          display: 'block',
          position: 'absolute',
          bottom: -2,
          rounded: 'full',
          mb: 2,
        },
      },
    };

    return (
      <chakra.label {...htmlProps} cursor={'pointer'} {...getLabelProps()}>
        <input {...getInputProps({})} hidden />
        <Box
          ref={ref}
          pb={2}
          fontSize={'lg'}
          position={'relative'}
          fontWeight={500}
          {...variants[variant]}
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
    children: React.ReactNode;
  };

const ToggleGroup = forwardRef<ToggleGroupProps, 'div'>(
  ({ children, ...props }, ref) => {
    const { getRootProps, getRadioProps } = useRadioGroup(props);

    return (
      <HStack ref={ref} spacing={5} {...getRootProps()} {...props}>
        {Children.map(children, (child) =>
          cloneElement(
            child as React.ReactElement,
            // @ts-expect-error
            getRadioProps(child?.props as any)
          )
        )}
      </HStack>
    );
  }
);

export { ToggleGroup, ToggleItem };
