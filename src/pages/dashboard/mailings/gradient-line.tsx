import { useRandomColor } from '@/hooks/index'
import React from 'react'

export const GradientLine = ({ statistics}: { statistics: number[] }) => {
  const colors = useRandomColor(statistics.length);

  return (
    <div className='w-full my-2 mb-4 h-2 rounded bg-slate flex'>
    {
      statistics.map((el, indx) => <div key={indx} style={{ width: `${el}%` }} className={`h-2 bg-${colors[indx]}`}></div>)
    }
    </div>
  )
}
