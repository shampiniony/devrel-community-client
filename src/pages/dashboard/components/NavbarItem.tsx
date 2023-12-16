import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  
import { twMerge } from 'tailwind-merge';

interface INavbarItemProps {
  text: string;
  path: string;
  src: string;
}

const variants = {
  none: {
    color: 'white'
  },
  hover: {
    color: '#f0f0f0'  
  }
}

export const NavbarItem = (props: INavbarItemProps) => {
  return (
    <motion.div
      className='text-2xl flex items-center gap-5'
    >
      <img className='w-[24px] h-[24px]' src={props.src} />
      <Link to={props.path}>
        {props.text}
      </Link>
    </motion.div>
  );
};
