import { ArrowIcon } from '@/components/ui/icons/Arrow';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Profile() {
  return (
    <div>
      <Button variant={'ghost'} as={Link} href={'/'}>
        <ArrowIcon />
      </Button>
      Profile
    </div>
  );
}
