import { useMailingStore } from './../../../store';

export const UserData = () => {
  const [selected, setSelected] = useMailingStore((state) => [
    state.selected_users,
    state.setSelectedUsers,
  ]);

  return (
    <div className='h-full w-full bg-second-primary rounded-xl p-4 gap-4 flex flex-col'>
      {selected.map( (user) => {
        return <>{user.first_name}</>
      })}
    </div>
  );
};
