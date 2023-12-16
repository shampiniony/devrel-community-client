import sort from '@/assets/icons/sort.svg';
import filter from '@/assets/icons/filter.svg';
import fileExport from '@/assets/icons/export.svg';
import { Button } from '@/components/index';

const Icon = ({ src }: { src: string }) => {
  return <li className='w-6'><img src={ src }/></li>
}

export const Mailings = () => {
  return (
    <section className='w-4/5 mx-auto'>
      <div>
        <h3 className='text-2xl'>Ваши рассылки</h3>
        <div className='flex gap-x-6'>
          <Button bgVariant='primary'>Создать рассылку</Button>
          <Button bgVariant='gradient'>Добавить контакты</Button>
        </div>
        <div className='flex justify-between items-center'>
          <ul className='flex text-lg gap-x-8'>
            <li>Завершенные</li>
            <li>Запланированные</li>
            <li>Черновики</li>
          </ul>
          <ul className='flex gap-x-2'>
            <Icon src={sort}/>
            <Icon src={filter}/>
            <Icon src={fileExport}/>
          </ul>
        </div>
        <div className='gap-col-6'>
          <div>
            <p className='text-violet-400 text-xl font-bold'>10 000</p>
            <p className='text-slate-400 text-sm'>отправлено</p>
          </div>
        </div>
      </div>
    </section>
  )
}
