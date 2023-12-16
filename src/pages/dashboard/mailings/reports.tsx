import React from 'react'
import { Report } from './report'

export const Reports = () => {
  return (
    <div className='flex flex-col'>
      <Report status='accept'/>
      <Report status='reject'/>
    </div>
  )
}
