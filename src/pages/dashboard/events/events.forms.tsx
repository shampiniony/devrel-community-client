import { useEffect, useState } from 'react';
import { IEvent } from './../../../types/EventTypes';
import { IFormData } from './../../../types/FormTypes';
import axios from 'axios';

interface IFormsProperties {
  event: IEvent;
}

export const Forms = (props: IFormsProperties) => {
  const [forms, setForms] = useState<IFormData[]>([]);
  const [active, setActive] = useState<IFormData | null>(null);

  const getEventForms = (id: number) => {
    axios
      .get(`http://reldev.shampiniony.ru/api/events/event-form-data/${id}`)
      .then((res) => {
        setForms(res.data as IFormData[]);
      });
  };

  useEffect(() => {
    getEventForms(props.event.id);
  }, []);

  return (
    <div className='h-2/5 bg-second-primary rounded-lg p-4'>
      <div className='flex flex-row h-full gap-5'>
        <div className='w-2/6 h-full overflow-y-scroll no-scrollbar'>
          {forms.map((form, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setActive(form);
                }}
                className='w-full h-fit p-2 bg-primary rounded-lg mb-5'
              >
                {form.name}
              </div>
            );
          })}
          <div
            onClick={() => {
              setActive(null);
            }}
            className='w-full h-10 bg-primary rounded-lg flex justify-center items-center mb-5'
          >
            +
          </div>
        </div>
        {active ? (
          <div className='w-4/6 h-full rounded-lg flex flex-col gap-5 overflow-y-scroll no-scrollbar'>
            {active.fields.map((field, index) => {
              return (
                <div key={index} className='w-full px-4 py-2 h-20 bg-primary  rounded-lg'>
                  {field.name}
                </div>
              );
            })}
          </div>
        ) : (
          <div className='w-4/6 h-full rounded-lg flex flex-col gap-5 overflow-y-scroll no-scrollbar'>
            <div className='px-4 py-2 w-full h-20 bg-primary  rounded-lg'>
              Create new
            </div>
            <div className='px-4 py-2 w-full h-10 bg-primary  rounded-lg'>
              Email
            </div>
            <div className='px-4 py-2 w-full h-10 bg-primary  rounded-lg'>
              Telegram
            </div>
            <div className='px-4 py-2 w-full h-10 bg-primary  rounded-lg'>
              Phone Number
            </div>
            <div className='px-4 py-2 w-full h-10 bg-primary  rounded-lg'>
              Sex
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const createForm = (data: IFormData, event_id: number) => {
  axios.post(`http://reldev.shampiniony.ru/api/formfields/`, {
    data: data,
    event: event_id,
  });
};
