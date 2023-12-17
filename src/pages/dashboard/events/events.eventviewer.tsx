import { IEvent } from './../../../types/EventTypes';
import { Forms } from './events.forms';

interface IEventViewerProps {
  event: IEvent | undefined;
}

export const EventViewer = (props: IEventViewerProps) => {
  const { event } = props;

  console.log(event);

  return event ? (
    <div className='h-full w-full rounded-lg flex flex-col gap-10'>
      <div className='flex flex-row gap-4 h-full'>
        <div className='flex flex-col gap-4 w-3/5'>
          <div className='h-3/5 bg-second-primary rounded-lg p-4'>
            <h1 className='text-3xl font-semibold'>analytics</h1>
          </div>
          <Forms event={event}/>
        </div>
        <div className='h-full bg-second-primary w-2/5 rounded-lg p-4'>
        <h1 className='font-bold text-3xl'>registered</h1>
          {event.participants.map((user) => {
            return <div key={user.id}>{user.first_name}</div>;
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className='h-full w-full rounded-lg flex flex-col gap-10 bg-second-primary'>
      <div className='flex flex-row gap-4 h-full'></div>
    </div>
  );
};
