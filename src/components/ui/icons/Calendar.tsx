import { Icon, IconProps } from '@chakra-ui/react';

const CalendarIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 20 18' fill={'none'} {...props}>
      <path
        d='M11.0833 2.33325H2.91667C2.27233 2.33325 1.75 2.85559 1.75 3.49992V11.6666C1.75 12.3109 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.3109 12.25 11.6666V3.49992C12.25 2.85559 11.7277 2.33325 11.0833 2.33325Z'
        stroke='#FF9000'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.33334 1.16675V3.50008'
        stroke='#FF9000'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.66667 1.16675V3.50008'
        stroke='#FF9000'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.75 5.83325H12.25'
        stroke='#FF9000'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export { CalendarIcon };
