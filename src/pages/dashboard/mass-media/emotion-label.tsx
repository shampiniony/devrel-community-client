import React from 'react'
import { twMerge } from 'tailwind-merge';

export interface IEmotionLabel {
  circleColor: string;
  children: string;
}

export const EmotionLabel: React.FC<IEmotionLabel> = (props) => {
  return (
    <li className='flex items-center gap-x-2'>
      <div className={twMerge('w-4 h-4 rounded-full', props.circleColor)}/>
      <label>{ props.children }</label>
    </li>
  )
}
