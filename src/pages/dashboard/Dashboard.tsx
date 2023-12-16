import { NavbarItem } from './components/NavbarItem';
import book from '@/assets/icons/book.png';
import mail from '@/assets/icons/mail.png';
import people from '@/assets/icons/people.png';
import mic from '@/assets/icons/mic.png';
import { useParams } from 'react-router-dom';

export const Dashboard = () => {
  const { section } = useParams();

  const renderContentBasedOnSection = () => {
    switch (section) {
      case 'profile':
        return <div>Profile Section</div>;
      case 'settings':
        return <div>Settings Section</div>;
      case 'reports':
        return <div>Reports Section</div>;
      default:
        return <div>Welcome to the Dashboard! Select a section.</div>;
    }
  };

  return (
    <div className='flex w-full h-[100vh]'>
      <div className='h-full bg-second-primary w-96 flex flex-col justify-center items-end'>
        <div className='flex gap-5 flex-col mr-5'>
          <NavbarItem src={people} text='Аудитория' path='/dashboard/profile' />
          <NavbarItem src={mic} text='Мероприятия' path='/dashboard/settings' />
          <NavbarItem src={mail} text='Рассылки' path='/dashboard' />
          <NavbarItem src={book} text='Сми' path='/dashboard' />
        </div>
      </div>
      <div className='bg-primary w-full '>{renderContentBasedOnSection()}</div>
    </div>
  );
};
