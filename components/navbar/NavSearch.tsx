import { Input } from '../ui/input';

const NavSearch = () => {
  return (
    <Input
      type='search'
      placeholder='search meal...'
      className='max-w-xs dark:bg-muted'
    />
  );
};

export default NavSearch;
