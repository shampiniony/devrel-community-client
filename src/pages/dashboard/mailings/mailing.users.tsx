import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from './../../../types/MailingTypes';
import { useMailingStore } from './../../../store';

export const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selected, setSelected] = useMailingStore((state) => [
    state.selected_users,
    state.setSelectedUsers,
  ]);

  useEffect(() => {
    axios.get(`http://localhost/api/users/`).then((res) => {
      setUsers(res.data as IUser[]);
    });
  }, []);

  return (
    <div className='col-span-2 h-full w-full bg-second-primary rounded-xl p-4 flex flex-col gap-4'>
      <div className='h-12 w-full bg-primary rounded-lg'></div>
      <div className='h-full w-full bg-primary rounded-lg px-5 py-2 overflow-scroll'>
        {users.map((user) => {
          return (
            <div
              className='py-2 flex flex-row justify-between items-center'
              key={user.id}
            >
              <div className='font-bold'>{user.first_name}</div>
              <input
                onClick={(e) => {
                  const box = e.target as HTMLInputElement;
                  if (box.checked) {
                    setSelected([...selected, user]);
                  } else {
                    setSelected(selected.filter((u) => u.id !== user.id));
                  }
                }}
                className='w-4 h-4'
                type='checkbox'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
