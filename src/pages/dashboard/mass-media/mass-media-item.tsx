import { GradientLine } from './gradient-line'
import { motion } from 'framer-motion'
import { Box } from '../components/box'

const Button = ({ children }: { children: string, onClick?: () => void }) => {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        color: '#794DFD'
      }}
      whileTap={{ scale: 0.95 }}
    >{ children }</motion.button>
  )
}

export const MassMediaItem = () => {
  return (
    <Box>
      <div className='grid grid-cols-5 w-4/5 mx-auto'>
        <div className='col-span-2'>
          <h5 className='mb-2'>Название</h5>
          <div className='mb-3'>
            <h3 className='text-2xl'>Конкуренты</h3>
            <p className=' text-slate-500 text-[0.6rem]'>Данные собираются с 20.02.2020</p>
          </div>
          <div className='flex my-2 text-sm gap-x-4'>     
            <Button>редактировать</Button>
            <Button>остановить</Button>
          </div>
        </div>
        <div>
          <h5 className='mb-2'>Сегодня</h5>
          <h5 className='text-lg'>5</h5>
          <GradientLine/>
        </div>
        <div>
          <h5 className='mb-2'>Неделя</h5>
          <h5 className='text-lg'>654</h5>
          <GradientLine/>
        </div>
        <div>
          <h5 className='mb-2'>Всего</h5>
          <h5 className='text-lg'>70000</h5>
          <GradientLine/>
        </div>
      </div>
    </Box>
  )
}
