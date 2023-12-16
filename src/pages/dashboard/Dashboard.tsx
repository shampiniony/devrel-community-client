import { NavbarItem } from './components/NavbarItem';
import book from '@/assets/icons/book.png';
import mail from '@/assets/icons/mail.png';
import people from '@/assets/icons/people.png';
import mic from '@/assets/icons/mic.png';
import { useParams } from 'react-router-dom';
import { MassMedia } from './mass-media/mass-media';
import { Mailings } from './mailings/mailings';

export const Dashboard = () => {
  const { section } = useParams();

  const renderContentBasedOnSection = () => {
    switch (section) {
      case 'profile':
        return <div>Profile Section</div>;
      case 'settings':
        return <div>Settings Section</div>;
      case 'reports':
        return <Mailings/>;
      case 'mass-media':
        return <MassMedia/>
      default:
        return <div>Welcome to the Dashboard! Select a section.</div>;
    }
  };

  return (
    <div className='flex w-full h-[100vh]'>
      <div className='bg-second-primary w-full'>{renderContentBasedOnSection()}</div>
    </div>
  );
};
