import { useParams } from 'react-router-dom';
import { Mailing } from './mailings/mailing';
import { ErrorMobile } from '../errors/ErrorMobile';
import { Events } from './events/events';
import { Navbar } from '../../modules/index';
import { Analytics } from './analytics/analytics';

export const WelcomePage = () => {
  const imageNumbers = Array.from({ length: 12 }, (_, i) => i + 1);
    return (
      <>
        <Navbar />
        <div>
          <div className='block md:hidden'>
            <ErrorMobile></ErrorMobile>
          </div>
          <div className="mx-auto w-full max-w-[1280px]">
              {imageNumbers.map((num) => (
                <img 
                  key={num}
                  src={`src/pages/index/img/frame${num}.jpg`} 
                  alt={`Изображение ${num}`} 
                  className="w-full h-auto"
                />
              ))}
           </div>
        </div>
      </>
    );
  };