import { Button } from '@/components/index'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'

const url = 'http://87.236.22.85/api/mailer/send-mailing/'

const sendMail = async (value: string) => {
  const data = {
    "emails": ["pericle04@mail.ru"],
    "mail": {
      "text": "hello",
      "subject": "Dudos",
      "message": value,
      "html_message": value
    }
  }

  try {
    const response = await axios.post(url, data);
    console.log(response.data);
  } catch (error) {
    console.error('Error sending mail:', (error as AxiosError).message);
  }
}

export const Sender = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMail = async() => {
    setLoading(true);
    await sendMail(value);
    setLoading(false);
  }

  const clearValue = () => {
    setValue('')
  } 

  return (
    <div className='bg-gray w-4/5 py-2 mx-auto min-h-[400px] rounded-lg'>
      <div className='w-4/5 mx-auto'>
        <h3 className='py-4 text-2xl'>Отправление письма</h3>
        <textarea 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='w-full p-4 h-[280px] resize-none rounded-lg bg-second-primary'
        />
        <div className='flex justify-between my-2'>
          <Button 
            onClick={clearValue}
            className='w-44' 
            bgVariant='inherit'
          >
            Удалить все
          </Button>
          <Button
            disabled={loading}
            onClick={handleSendMail} className='w-44' bgVariant='inherit'>Отправить</Button>
        </div>
      </div>
    </div>
  )
}
