import { useMailingStore } from './../../../store';

export const UserData = () => {
  const [selected] = useMailingStore((state) => [
    state.selected_users,
    state.setSelectedUsers,
  ]);

  return (
    <div className='h-full w-full bg-second-primary rounded-xl p-4 gap-4 flex flex-col'>
      {selected.map( (user) => {
        return <div className='m-5'>{user.first_name}</div>
      })}
    </div>
  );
};
