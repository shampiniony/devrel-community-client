import { useParams } from 'react-router-dom';
import { Mailing } from './mailings/mailing';
import { ErrorMobile } from './../errors/ErrorMobile';
import { Events } from './events/events';
import { Navbar } from './../../modules/index';
import { Analytics } from './analytics/analytics';

export const Dashboard = () => {
  const { section } = useParams();

  const renderContentBasedOnSection = () => {
    switch (section) {
      case 'events':
        return <Events />;
      case 'mailer':
        return <Mailing />;
      default:
        return <Analytics />;
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className='block md:hidden'>
          <ErrorMobile></ErrorMobile>
        </div>
        <div className='bg-primary mx-auto w-[90vw] hidden md:flex h-[100vh] pt-20'>
          {renderContentBasedOnSection()}
        </div>
      </div>
    </>
  );
};
