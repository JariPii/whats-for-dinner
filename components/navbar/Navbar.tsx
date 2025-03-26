import Container from '../global/Container';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import { Logo } from './Logo';
import NavSearch from './NavSearch';

const Navbar = () => {
  return (
    <nav className='border-b-2'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center'>
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
