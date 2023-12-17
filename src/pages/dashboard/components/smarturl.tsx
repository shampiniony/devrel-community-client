import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface ISmartUrl {
  id: string;
  link: string;
  name: string;
  cout: number;
}

export const SmartUrl = () => {
  const [urls, setUrls] = useState<ISmartUrl[]>([]);
  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  const updateUrls = () => {
    axios.get(`http://localhost/api/ref/manage/`).then((res) => {
      const data = res.data as ISmartUrl[];
      setUrls(data);
    });
  };

  useEffect( () => {
    updateUrls();
  },[])

  return (
    <div className='h-fit w-full bg-second-primary rounded-xl p-4 flex flex-col gap-4'>
      <div className='w-full flex flex-row justify-between gap-10'>
        <input
          placeholder='name'
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className='rounded-lg bg-primary w-1/4 p-2 px-5'
        />
        <input
          placeholder='https://wwww.example.com'
          type='text'
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          className='rounded-lg bg-primary w-3/4 p-2 px-5'
        />
        <div
          onClick={() => {
            addUrl(name, link);
            updateUrls();
            setLink('');
            setName('');
          }}
          className='cursor-pointer w-10 rounded-lg bg-primary px-5 flex justify-center items-center'
        >
          +
        </div>
      </div>
      {urls.length > 0 ? (
        <div className='flex flex-col gap-4 overflow-scroll max-h-30'>
          {urls.map((url) => {
            return (
              <div key={url.id} className='flex flex-row gap-1 justify-between'>
                <div className='px-5 py-2 rounded-l-lg w-full bg-primary'>
                  {url.name}
                </div>
                <div className='p-2 w-fit bg-primary'>{url.id}</div>
                <div className='p-2 w-full bg-primary'>{url.id}</div>
                <div
                  onClick={() => {
                    delUrl(url.id);
                    updateUrls();
                  }}
                  className='cursor-pointer w-10 rounded-r-lg bg-primary px-5 flex justify-center items-center'
                >
                  -
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const addUrl = (name: string, url: string) => {
  axios
    .post(`http://localhost/api/ref/manage/`, {
      name: name,
      link: url,
    })
    .then((res) => {
      toast.success(`Added new hotlink!`);
    })
    .catch(() => {
      toast.error(`Oh no! Something went wrong!`);
    });
};

const delUrl = (id: string) => {
  axios
    .delete(`http://localhost/api/ref/manage/${id}`)
    .then((res) => {
      toast.success(`Removed hotlink!`);
    })
    .catch(() => {
      toast.error(`Oh no! Something went wrong!`);
    });
};
