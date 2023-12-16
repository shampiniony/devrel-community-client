import React from 'react'

export const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#343858] h-36 py-3 rounded-lg'>{ children }</div>
  )
}
