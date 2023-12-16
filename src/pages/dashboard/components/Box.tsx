import { PropsWithChildren } from 'react'

export const Box = (props : PropsWithChildren) => {
  return (
    <div className='bg-detail rounded-lg p-5'>
      { props.children }
    </div>
  )
}