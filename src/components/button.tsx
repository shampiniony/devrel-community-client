import { motion } from 'framer-motion';
import React from 'react'

interface IButton {
  children: string;
  bgVariant: 'inherit' | 'gradient' | 'primary' | 'gradient-fill';
  onClick?: () => void;
}

export const Button: React.FC<IButton> = (props) => {
  let bgVariant = '';

  switch (props.bgVariant) {
    case 'inherit':
      bgVariant = 'bg-inherit border-white border-2';
      break;
    case 'gradient-fill':
      bgVariant = 'bg-gradient-to-b from-[#6262D9] to-[#9D62D9]';
      break;
    case 'gradient':
      bgVariant = 'bg-gradient-to-b from-[#6262D9] to-[#9D62D9]';
      break;
    case 'primary':
      bgVariant = 'bg-primary';
      break;
    default:
      bgVariant = 'bg-inherit';
  }

  return props.bgVariant === 'gradient' ? (
    <motion.button
      className={`min-w-32 p-[1px] my-1 rounded-lg ${bgVariant}`}
      onClick={props.onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='bg-second-primary py-2 px-4 rounded-lg text-[#9D62D9]'>
        { props.children }
      </div>
    </motion.button>
  ) : (
    <motion.button
      className={`min-w-32 px-4 py-[9px] my-1 rounded-lg ${bgVariant}`}
      onClick={props.onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      { props.children }
    </motion.button>
  );
}
