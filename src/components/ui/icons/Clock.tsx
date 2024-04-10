import { Icon, IconProps } from '@chakra-ui/react';

const ClockIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 15 15' fill={'none'} {...props}>
      <g clipPath='url(#clip0_92218_166)'>
        <path
          d='M7.00001 12.8334C10.2217 12.8334 12.8333 10.2217 12.8333 7.00008C12.8333 3.77842 10.2217 1.16675 7.00001 1.16675C3.77834 1.16675 1.16667 3.77842 1.16667 7.00008C1.16667 10.2217 3.77834 12.8334 7.00001 12.8334Z'
          stroke='#FF9000'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7 3.5V7L9.33333 8.16667'
          stroke='#FF9000'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_92218_166'>
          <rect width='14' height='14' fill='white' />
        </clipPath>
      </defs>
    </Icon>
  );
};

export { ClockIcon };
