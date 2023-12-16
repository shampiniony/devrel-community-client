import { NavbarItem } from './components/NavbarItem';
import book from '@/assets/icons/book.png';
import mail from '@/assets/icons/mail.png';
import people from '@/assets/icons/people.png';
import mic from '@/assets/icons/mic.png';
import { Box } from './components/Box';
import PieChart from './components/PieChart';

export const Dashboard = () => {
  return (
    <div className='flex w-full h-[100vh]'>
      <div className='h-full bg-second-primary w-96 flex flex-col justify-center items-end'>
        <div className='flex gap-5 flex-col mr-5'>
          <NavbarItem src={people} text='Аудитория' path='/dashboard' />
          <NavbarItem src={mic} text='Мероприятия' path='/dashboard' />
          <NavbarItem src={mail} text='Рассылки' path='/dashboard' />
          <NavbarItem src={book} text='Сми' path='/dashboard' />
        </div>
      </div>
      <div className='bg-primary w-full '>
        <div className='flex gap-10'>
          <Box>
            <PieChart></PieChart>
          </Box>
        </div>
      </div>
    </div>
  );
};
