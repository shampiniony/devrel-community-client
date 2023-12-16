import React from 'react'
import { Header } from './header'
import { MassMediaItem } from './mass-media-item'

export const MassMedia = () => {
  return (
    <section className='w-4/5 mx-auto'>
      <Header/>
      <ul className='flex flex-col gap-y-5'>
        { [...Array(2)].map((el, indx) => <MassMediaItem key={indx}/>) }
      </ul>
    </section>
  )
}
