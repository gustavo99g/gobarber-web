import { Icon, IconProps } from '@chakra-ui/react';

const MailIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 20 18' fill={'none'} {...props}>
      <path
        d='M3.6 2.9519H16.4C17.28 2.9519 18 3.6323 18 4.4639V13.5359C18 14.3675 17.28 15.0479 16.4 15.0479H3.6C2.72 15.0479 2 14.3675 2 13.5359V4.4639C2 3.6323 2.72 2.9519 3.6 2.9519Z'
        stroke='#666360'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18 5.04001L10 10.08L2 5.04001'
        stroke='#666360'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export { MailIcon };
