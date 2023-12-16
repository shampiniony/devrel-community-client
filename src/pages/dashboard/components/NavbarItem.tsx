import { Link } from 'react-router-dom';  

interface INavbarItemProps {
  text: string;
  path: string;
  src: string;
}

export const NavbarItem = (props: INavbarItemProps) => {
  return (
    <div className='text-white text-2xl flex items-center gap-5'>
      <img className='w-[24px] h-[24px]' src={props.src} />
      <Link to={props.path}>{props.text}</Link>
    </div>
  );
};
