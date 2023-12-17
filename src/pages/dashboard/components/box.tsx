import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Box = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={twMerge('bg-[#343858] py-3 rounded-lg', className)}>{ children }</div>
  )
}
