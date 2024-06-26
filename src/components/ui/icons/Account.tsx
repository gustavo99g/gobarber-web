import { Icon, IconProps } from '@chakra-ui/react';

const AccountIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 20 18' fill={'none'} {...props}>
      <path
        d='M18 17.1359V15.4559C18 14.5648 17.5786 13.7102 16.8284 13.0801C16.0783 12.4499 15.0609 12.0959 14 12.0959H6C4.93913 12.0959 3.92172 12.4499 3.17157 13.0801C2.42143 13.7102 2 14.5648 2 15.4559V17.1359'
        stroke='#666360'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 9.07206C12.2091 9.07206 14 7.26687 14 5.04006C14 2.81324 12.2091 1.00806 10 1.00806C7.79086 1.00806 6 2.81324 6 5.04006C6 7.26687 7.79086 9.07206 10 9.07206Z'
        stroke='#666360'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export { AccountIcon };
