import { Icon, IconProps } from '@chakra-ui/react';

const LogoutIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 20 18' fill={'none'} {...props}>
      <path
        d='M12.5 2.5L15.8333 2.5C16.2754 2.5 16.6993 2.6756 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667L17.5 15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5L12.5 17.5'
        stroke='#FF9000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.33334 14.1667L12.5 10L8.33334 5.83335'
        stroke='#FF9000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 10L2.5 10'
        stroke='#FF9000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export { LogoutIcon };
