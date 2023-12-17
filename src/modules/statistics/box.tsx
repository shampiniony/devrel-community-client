import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Box = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={twMerge('col-span-2 rounded-xl bg-second-primary', className)}>
      <div className='p-5'>
        { children }
      </div>
    </div>
  )
}
