import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.webp';

export const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={logo}
        alt='Dinner plate'
        width={150}
        height={150}
        className='rounded-3xl'
      />
    </Link>
  );
};
