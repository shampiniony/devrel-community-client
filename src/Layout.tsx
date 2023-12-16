import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  return (
    <main className='max-w-[1280px] mx-auto text-center'>
      { children }
    </main>
  )
}
