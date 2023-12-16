import { motion } from 'framer-motion';
import React from 'react'

interface IButton {
  children: string;
  bgVariant: 'inherit' | 'gradient' | 'primary';
  onClick?: () => void;
}

export const Button: React.FC<IButton> = (props) => {
  let bgVariant = '';

  switch (props.bgVariant) {
    case 'inherit':
      bgVariant = 'bg-inherit border-white border-2';
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

  return (
    <motion.button
      className={`w-32 py-1 my-1 rounded-lg ${bgVariant}`}
      onClick={props.onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {props.children}
    </motion.button>
  );
}
