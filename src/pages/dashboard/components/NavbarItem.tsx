import { Link } from 'react-router-dom';  
import { twMerge } from 'tailwind-merge';

interface INavbarItemProps {
  text: string;
  path: string;
  src: string;
}

export const NavbarItem = (props: INavbarItemProps) => {
  return (
    <div className={twMerge('text-black text-2xl flex items-center gap-5')}>
      <img className='w-[24px] h-[24px]' src={props.src} />
      <Link to={props.path}>{props.text}</Link>
    </div>
  );
};
