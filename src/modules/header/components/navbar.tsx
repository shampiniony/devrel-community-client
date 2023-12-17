import { INavItem, NavItem } from './nav-item';
import logo from '../../../assets/logo.svg';

const navItems: INavItem[] = [
  {
    children: 'home',
    to: '/dashboard',
  },
  {
    children: 'mailer',
    to: '/dashboard/mailer',
  },
  {
    children: 'events',
    to: '/dashboard/events',
  },
];

export const Navbar = () => {
  return (
    <nav className='fixed w-full py-4'>
      <div className='px-5 mx-auto flex items-center justify-between max-w-[1280px]'>
        <div className='flex w-[70%] lg:w-3/5 xl:w-1/2 justify-between items-center'>
          <a href='/' className='flex items-center gap-x-2'>
            <img src={logo} />
            <h3 className='text-xl lg:text-2xl'>DevMate</h3>
          </a>
          <ul className='flex text-base lg:text-lg gap-x-5'>
            {navItems.map((el, indx) => (
              <NavItem to={el.to} key={indx}>
                {el.children}
              </NavItem>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
