import play from '../../../assets/icons/play.png';
import { RunCode } from './analytics.plugin.env';

const plugins = [
  {
    name: 'name',
    code: "alert('hello!')",
  },
];

export const Plugins = () => {
  return (
    <div className='w-full h-full grid grid-cols-4 gap-5 grid-rows-3 items-center'>
      {plugins.map((plugin) => {
        return (
          <div className='w-full h-full bg-primary rounded-lg p-5 flex items-center justify-center'>
            <img
              height={49}
              width={49}
              onClick={() => {
                RunCode(plugin.code);
              }}
              className='cursor-pointer'
              src={play}
              alt=''
            />
          </div>
        );
      })}
      <div className='w-full h-full bg-primary rounded-lg p-5 flex items-center justify-center'>
        <h1 className='text-5xl font-thin cursor-pointer'>+</h1>
      </div>
    </div>
  );
};
