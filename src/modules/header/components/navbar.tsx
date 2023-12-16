import { INavItem, NavItem } from './nav-item'
import logo from '../../../assets/logo.svg'
import { Search } from '../../../components/search'

const navItems: INavItem[] = [
  {
    children: 'Возможности',
    to: '#',
  },
  {
    children: 'Цены',
    to: '#',
  },
  {
    children: 'Поддержка',
    to: '#',
  },
  {
    children: 'Блог',
    to: '#',
  },
]

export const Navbar = () => {
  return (
    <nav className='absolute w-full py-4 shadow-[inset_-12px_-8px_40px_#A5A6B5] bg-[#4A4D6A]'>
      <div className='mx-auto flex items-center justify-between max-w-[1280px]'>
        <div className='flex w-[70%] lg:w-3/5 xl:w-1/2 justify-between items-center'>
          <a
          href='#' 
          className='flex items-center gap-x-2'>
            <img src={logo}/>
            <h3 className='text-xl lg:text-2xl'>DevMate</h3>
          </a>
          <ul className='flex text-base lg:text-lg gap-x-5'>
            { navItems.map((el, indx) => <NavItem to={el.to} key={indx}>{ el.children }</NavItem>) }
          </ul>
        </div>
        <Search className=''/>
      </div>
    </nav>
  )
}
