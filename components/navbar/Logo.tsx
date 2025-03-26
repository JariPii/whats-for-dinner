import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { VscArchive } from 'react-icons/vsc';
import logo from '@/public/images/logo.webp';

export const Logo = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='Dinner plate' width={100} height={100} />
    </Link>
  );
};
