import { useEffect, useState } from 'react';
import { IEvent } from './../../../types/EventTypes';
import { Event } from './events.event';
import { EventViewer } from './events.eventviewer';
import axios from 'axios';

export const Events = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [view, setView] = useState<IEvent | undefined>();

  const getEvents = () => {
    axios.get(`http://reldev.shampiniony.ru/api/events/`).then((res) => {
      setEvents(res.data as IEvent[]);
    })
  };

  useEffect(() => {
    getEvents();
  },[]);

  return (
    <div className='flex w-full h-full gap-5 pb-10'>
      <div className='h-full w-2/5 bg-second-primary rounded-xl p-4 overflow-y-scroll no-scrollbar'>
        {events.map((event) => {
          return (
            <Event
              key={event.id}
              onClick={() => {
                setView(event);
              }}
              event={event}
            />
          );
        })}
        <Event onClick={() => {setView(undefined)}} event={undefined} />
      </div>
      <EventViewer event={view}></EventViewer>
    </div>
  );
};
