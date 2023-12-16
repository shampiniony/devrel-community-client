import { NavbarItem } from './components/NavbarItem';
import book from '@/assets/icons/book.png';
import mail from '@/assets/icons/mail.png';
import people from '@/assets/icons/people.png';
import mic from '@/assets/icons/mic.png';
import { useParams } from 'react-router-dom';
import { MassMedia } from './mass-media/mass-media';
import { Mailings } from './mailings/mailings';
import { ErrorMobile } from './../errors/ErrorMobile';

export const Dashboard = () => {
  const { section } = useParams();

  const renderContentBasedOnSection = () => {
    switch (section) {
      case 'profile':
        return <div>Profile Section</div>;
      case 'settings':
        return <div>Settings Section</div>;
      case 'reports':
        return <Mailings />;
      case 'mass-media':
        return <MassMedia />;
      default:
        return <div>Welcome to the Dashboard! Select a section.</div>;
    }
  };

  return (
    <div>
      <div className='block md:hidden'>
        <ErrorMobile></ErrorMobile>
      </div>
      <div className='hidden md:flex w-full h-[100vh]'>
        <div className='h-full bg-dark w-96 flex flex-col justify-center items-center'>
          <div className='flex text-white gap-5 flex-col mr-5'>
            <NavbarItem
              src={people}
              text='Аудитория'
              path='/dashboard/profile'
            />
            <NavbarItem
              src={mic}
              text='Мероприятия'
              path='/dashboard/settings'
            />
            <NavbarItem src={mail} text='Рассылки' path='/dashboard/reports' />
            <NavbarItem src={book} text='Сми' path='/dashboard/mass-media' />
          </div>
        </div>
        <div className='bg-second-primary w-full'>
          {renderContentBasedOnSection()}
        </div>
      </div>
    </div>
  );
};
