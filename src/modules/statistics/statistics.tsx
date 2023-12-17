import { Pie } from 'recharts'
import { Box } from './box'
import { TopUsers } from './components/top-users'
import { CustomPie } from './components/pie'

export const Statistics = () => {
  return (
    <div className='pt-20 grid grid-rows-2 w-full gap-y-10 h-[90vh]'>
      <div className='grid gap-x-10 grid-cols-4 bg'>
        <Box className='col-span-2'>
          <TopUsers/>
        </Box>
        <Box className='col-span-1'>
          <CustomPie/>
        </Box>
        <Box className='col-span-1'>
          One
        </Box>
      </div>
      <div className='grid gap-x-10 grid-cols-2'>
      <Box className='col-span-1'>
          One
        </Box>
        <Box className='col-span-1'>
          One
        </Box>
      </div>
    </div>
  )
}
