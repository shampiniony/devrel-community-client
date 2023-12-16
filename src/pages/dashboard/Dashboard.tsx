import { NavbarItem } from './components/NavbarItem';
import book from '@/assets/icons/book.png'
import mail from '@/assets/icons/mail.png'
import people from '@/assets/icons/people.png'
import mic from '@/assets/icons/mic.png'

export const Dashboard = () => {
  return <div className='w-[100vw] h-[100vh] bg-primary'>
    <div className='h-full bg-second-primary w-96 flex flex-col justify-center items-end'>
      <div className='flex gap-5 flex-col mr-5'>
        <NavbarItem src={people} text='Аудитория' path='/dashboard'/>
        <NavbarItem src={mic} text='Мероприятия' path='/dashboard'/>
        <NavbarItem src={mail} text='Рассылки' path='/dashboard'/>
        <NavbarItem src={book} text='Сми' path='/dashboard'/>
      </div>
    </div>
  </div>;
};
