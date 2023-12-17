import { IEvent } from './../../../types/EventTypes';

interface IEventProps {
  event: IEvent | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Event = (props: IEventProps) => {
  const { event, onClick } = props;

  return event ? (
    <div onClick={onClick} className='cursor-pointer w-full bg-primary h-52 rounded-lg mb-5 flex justify-center items-center text-5xl font-thin'>
      <img src={event?.banner as string}></img>
    </div>
  ) : (
    <div onClick={onClick} className='cursor-pointer w-full bg-primary h-52 rounded-lg mb-5 flex justify-center items-center text-5xl font-thin'>
      +
    </div>
  );
};
