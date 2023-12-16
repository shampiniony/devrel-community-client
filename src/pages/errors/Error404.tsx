import error from './../../assets/elements/404.png'
import { Button } from '../../components';

export const Error404 = () => {
  return (
    <div className='flex w-full h-[90vh] items-center justify-center flex-col'>
      <img className='h-2/3' src={error} alt=''/>
      <h1 className='text-center text-5xl m-10 font-bold'>Страница не найдена</h1>
      <Button bgVariant={'primary'}>Перейти на главную</Button>
    </div>
  );
};
