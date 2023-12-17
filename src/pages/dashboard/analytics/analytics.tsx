import { SmartUrl } from '../components/smarturl';
import { Cities } from './analytics.cities';
import { GptModel } from './analytics.gpt';
import { Plugins } from './analytics.plugins';
import { HotUrls } from './anayltics.hoturls';

export const Analytics = () => {
  return (
    <div className='flex w-full h-full gap-5 pb-10'>
      <div className='flex flex-col h-full w-5/12 gap-5'>
        <Cities />
        <div className='h-1/2 w-full bg-second-primary rounded-xl p-5'>
          <h1 className='font-bold text-3xl'>plugins</h1>
          <Plugins/>
        </div>
      </div>
      <div className='flex flex-col h-full w-7/12 gap-5'>
        <div className='flex flex-row h-3/5 w-full gap-5'>
          <div className='w-1/2 bg-second-primary rounded-xl p-5'>
            <h1 className='font-bold text-3xl'>last event</h1>
          </div>
          <GptModel />
        </div>
        <div className='h-2/5 w-full bg-second-primary rounded-xl flex flex-row'>
          <div className='w-2/6 p-5'>
            <h1 className='font-bold text-3xl'>hot urls</h1>
            <HotUrls />
          </div>
          <div className='w-4/6'>
            <SmartUrl />
          </div>
        </div>
      </div>
    </div>
  );
};
