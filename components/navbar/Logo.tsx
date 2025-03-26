import Link from 'next/link';
import { Button } from '../ui/button';
import { VscArchive } from 'react-icons/vsc';

export const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <VscArchive className='w-6 h-6' />
      </Link>
    </Button>
  );
};
