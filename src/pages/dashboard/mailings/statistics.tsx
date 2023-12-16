import React from 'react'
import { Box } from '../components/box'
import { Statistic } from './statistic'

export const Statistics = () => {
  return (
    <Box>
    <div className='grid grid-cols-6 mx-auto w-4/5'>
      <Statistic
        header='10 000'
        text='отпрвлено'
        color='violet'
      />
      <Statistic
        header='10 000'
        text='отпрвлено'
        color='green'
      />
      <Statistic
        header='10 000'
        text='отпрвлено'
        color='blue'
      />
      <Statistic
        header='10 000'
        text='отпрвлено'
        color='yellow'
      />
      <Statistic
        header='10 000'
        text='отпрвлено'
        color='orange'
      />
      <Statistic
        header='10 000'
        text='отпрвлено'
        color='red'
      />
    </div>
  </Box>
  )
}
