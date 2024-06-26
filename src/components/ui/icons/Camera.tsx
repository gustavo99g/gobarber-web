import { Icon, IconProps } from '@chakra-ui/react';

const CameraIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 20 18' fill={'none'} {...props}>
      <path
        d='M19 15.3333C19 15.7754 18.8276 16.1993 18.5207 16.5118C18.2138 16.8244 17.7976 17 17.3636 17H2.63636C2.20237 17 1.78616 16.8244 1.47928 16.5118C1.1724 16.1993 1 15.7754 1 15.3333V6.16667C1 5.72464 1.1724 5.30072 1.47928 4.98816C1.78616 4.67559 2.20237 4.5 2.63636 4.5H5.90909L7.54545 2H12.4545L14.0909 4.5H17.3636C17.7976 4.5 18.2138 4.67559 18.5207 4.98816C18.8276 5.30072 19 5.72464 19 6.16667V15.3333Z'
        stroke='#312E38'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z'
        stroke='#312E38'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export { CameraIcon };
