import { Users } from './mailing.users';
import { TextBox } from './mailing.textbox';
import { UserData } from './maling.userdata';

export const Mailing = () => {
  return (
    <div className='flex flex-row w-full h-full gap-5 pb-10'>
      <Users />
      <div className='h-full w-4/6 rounded-lg flex flex-col gap-5'>
        <TextBox />
        <UserData/>
      </div>
    </div>
  );
};
