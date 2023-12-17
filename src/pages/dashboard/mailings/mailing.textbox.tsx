import axios from 'axios';
import { useMailingStore } from './../../../store';
import toast from 'react-hot-toast';
import { IMail, IUser } from './../../../types/MailingTypes';
import { useState } from 'react';

export const TextBox = () => {
  const [selected, setSelected] = useMailingStore((state) => [
    state.selected_users,
    state.setSelectedUsers,
  ]);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'Mail' | 'Telegram'>('Mail');

  return (
    <div className='h-3/5 w-full bg-second-primary rounded-xl p-4 gap-4 flex flex-col'>
      <div className='h-12 rounded-lg flex justify-end gap-5 cursor-pointer'>
        <div
          onClick={() => {
            if (type == 'Mail') setType('Telegram');
            else setType('Mail');
          }}
          className='w-fit p-2 px-4 bg-primary rounded-lg'
        >
          {type}
        </div>
        <div
          onClick={() => {
            if (type == 'Mail') {
              sendMail(selected, {
                text: 'string',
                subject: 'string',
                message: message,
                html_message: message,
              });
            } else {
              sendTelegram(selected, message)
            }
            setSelected([]);
          }}
          className='w-fit p-2 px-4 bg-primary rounded-lg'
        >
          Send
        </div>
      </div>
      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className='p-5 text-2xl h-full w-full bg-primary rounded-lg resize-none'
      ></textarea>
    </div>
  );
};

const sendMail = (users: IUser[], mail: IMail) => {
  axios
    .post(`http://reldev.shampiniony.ru/api/mailer/send-mailing/`, {
      emails: users.flatMap((user) => {
        return user.email;
      }),
      mail: mail,
    })
    .then(() => {
      toast.success(`Mail sent!`);
    })
    .catch(() => {
      toast.error(`Oh no! Something went wrong!`);
    });
};

const sendTelegram = (users: IUser[], message: string) => {
  axios
    .post(`http://reldev.shampiniony.ru/api/mailer/send-tg-message/`, {
      tg_ids: users.flatMap((user) => {
        return user.telegram_id;
      }),
      message: message,
    })
    .then(() => {
      toast.success(`Telegram message sent!`);
    })
    .catch(() => {
      toast.error(`Oh no! Something went wrong!`);
    });
};
