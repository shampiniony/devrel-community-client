import { Users } from './mailing.users';
import { SmartUrl } from '../components/smarturl';
import { TextBox } from './mailing.textbox';

export const Mailing = () => {
  return (
    <div className='grid grid-cols-5 w-full h-full gap-10 pb-10'>
      <Users />
      <div className='col-span-3 h-full w-full rounded-lg flex flex-col gap-10'>
        <TextBox />
        <SmartUrl />
      </div>
    </div>
  );
};
