import { Icon, IconProps } from '@chakra-ui/react';

const ShutDownIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 20 18' fill={'none'} {...props}>
      <path
        d='M15.3 5.53333C16.3487 6.58232 17.0627 7.9187 17.3519 9.37349C17.6411 10.8283 17.4924 12.3362 16.9247 13.7065C16.357 15.0768 15.3957 16.248 14.1624 17.072C12.9291 17.896 11.4791 18.3358 9.99585 18.3358C8.5126 18.3358 7.06265 17.896 5.82933 17.072C4.59602 16.248 3.63472 15.0768 3.06699 13.7065C2.49926 12.3362 2.35059 10.8283 2.63978 9.37349C2.92897 7.9187 3.64304 6.58232 4.69169 5.53333'
        stroke='#999591'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 1.66667V10'
        stroke='#999591'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export { ShutDownIcon };
