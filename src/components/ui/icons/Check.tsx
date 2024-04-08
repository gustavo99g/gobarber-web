import { Icon, IconProps } from '@chakra-ui/react';

const CheckIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 80 80' fill={'none'} {...props}>
      <path
        d='M66.6667 20L30 56.6667L13.3334 40'
        stroke='#04D361'
        stroke-width='4'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Icon>
  );
};

export { CheckIcon };
