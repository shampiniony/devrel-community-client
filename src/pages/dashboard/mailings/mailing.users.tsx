import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from './../../../types/MailingTypes';
import { useMailingStore } from './../../../store';
import Select from 'react-select';

const grades = [
  { value: '', label: 'None' },
  { value: 'chief_architect', label: 'Cheif Architect' },
];

const skills = [
  { value: 'css', label: 'css' },
  { value: 'html', label: 'html' },
];

const telegrams = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' },
];

const customStyles = {
  // @ts-ignore
  option: (provided) => ({
    ...provided,
    color: 'white',
  }),
  // @ts-ignore
  valueContainer: (provided) => ({
    ...provided,
    color: 'white',
    backgroundColor: '#1D2145',
    borderColor: '#161936',
  }),
  // @ts-ignore
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#161936',
    borderColor: '#161936',
  }),
  // @ts-ignore
  control: (provided) => ({
    ...provided,
    backgroundColor: '#1D2145',
    borderColor: '#161936',
  }),
  // @ts-ignore
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#161936',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1D2145',
      color: 'white',
    },
  }),
  // You can add more custom styles for other parts of the component as needed
};

export const Users = () => {
  const [grade, setGrade] = useState(null);
  const [skill, setSkill] = useState(null);
  const [telegram, setTelegram] = useState(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selected, setSelected] = useMailingStore((state) => [
    state.selected_users,
    state.setSelectedUsers,
  ]);

  useEffect(() => {
    axios.get(`http://reldev.shampiniony.ru/api/users/`).then((res) => {
      setUsers(res.data as IUser[]);
    });
  }, []);

  return (
    <div className='h-full w-2/6 bg-second-primary rounded-xl p-4 flex flex-col gap-4'>
      <div className='h-1/3 w-full bg-primary rounded-lg p-5'>
        <div className='flex flex-col gap-4 justify-between'>
          <div className='flex flex-row items-center justify-between w-full'>
            <h1>Grade</h1>
            <Select
              // @ts-ignore
              onChange={setGrade}
              styles={customStyles}
              options={grades}
            />
          </div>
          <div className='flex flex-row items-center justify-between w-full'>
            <h1>Skill</h1>
            <Select
              // @ts-ignore
              onChange={setSkill}
              styles={customStyles}
              options={skills}
            />
          </div>
          <div className='flex flex-row items-center justify-between w-full'>
            <h1>Telegram</h1>
            <Select
              // @ts-ignore
              onChange={setTelegram}
              styles={customStyles}
              options={telegrams}
            />
          </div>
        </div>
      </div>
      <div className='h-full w-full bg-primary rounded-lg px-5 py-2 overflow-y-scroll no-scollbar'>
        {users
          .filter((user) => {
            if (grade != null) {
              // @ts-ignore
              if (user.grade != grade.value) return false;
            }
            if (skill != null) {
              // @ts-ignore
              if (user.skills.indexOf(skill.value) < 0) return false;
            }
            if (telegram != null) {
              // @ts-ignore
              if ((user.telegram_id == "") == telegram.value) return false;
              // @ts-ignore
              if ((user.telegram_url == "") == telegram.value) return false;
            }
            return true;
          })
          .map((user) => {
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
