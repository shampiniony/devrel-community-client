import React from 'react'
import accept from '@/assets/icons/accept.svg'
import reject from '@/assets/icons/reject.svg'
import { Box } from '../components/box'
import { Statistic } from './statistic'
import { Button } from '@/components/button'
import { GradientLine } from './gradient-line'

const statistics = [33.333, 66.333, 33.333]

export const Report = ({ status }: { status: 'accept' | 'reject' }) => {
  return (
    <Box className='my-3'>
      <div className='flex items-center gap-x-5 w-4/5 mx-auto'>
        { 
          status === 'accept'
          ?
          <div className='text-green text-[0.7em]'>
            <img className='w-5 pb-2' src={accept}/>
            <p>Выполнено</p>
            <p>21.11.2023</p>
          </div>
          :
          <div className='text-red text-[0.7em]'>
            <img className='w-8' src={reject}/>
            <p>Выполнено</p>
            <p>21.11.2023</p>
          </div>
        }
        <div className='w-full'>
          <div className='flex mb-4 justify-between items-center'>
            <Statistic
              header='Приглашение на конфуренцию'
              text='База контактов Новые (1450)'
              color='white'
            />
            <div className='flex items-center gap-x-3'>
              <Statistic
                header='1444'
                text='отправлено'
                color='white'
              />
              <Statistic
                header='590'
                text='открытий'
                color='white'
              />
              <Statistic
                header='349'
                text='переходов'
                color='white'
              />
            </div>

            <div></div>
          </div>
          <GradientLine statistics={statistics}/>
          <Button bgVariant='inherit'>Подробнее</Button>
        </div>
      </div>
    </Box>
  )
}
