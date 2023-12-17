import { useParams } from 'react-router-dom';
import { Mailing } from './mailings/mailing';
import { ErrorMobile } from './../errors/ErrorMobile';

export const Dashboard = () => {
  const { section } = useParams();

  const renderContentBasedOnSection = () => {
    switch (section) {
      case 'profile':
        return <div>Profile Section</div>;
      case 'settings':
        return <div>Settings Section</div>;
      case 'mailer':
        return <Mailing />;
      default:
        return <div>Welcome to the Dashboard! Select a section.</div>;
    }
  };

  return (
    <div>
      <div className='block md:hidden'>
        <ErrorMobile></ErrorMobile>
      </div>
      <div className='bg-primary mx-auto w-[90vw] hidden md:flex h-[100vh] pt-20'>
        {renderContentBasedOnSection()}
      </div>
    </div>
  );
};
