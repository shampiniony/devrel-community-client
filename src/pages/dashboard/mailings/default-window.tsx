import sort from '@/assets/icons/sort.svg';
import filter from '@/assets/icons/filter.svg';
import fileExport from '@/assets/icons/export.svg';
import { ButtonLink } from '@/components/index';
import { Statistics } from './statistics';
import { Reports } from './reports';

const Icon = ({ src }: { src: string }) => {
  return <li className='w-6'><img src={ src }/></li>
}

export const DefaultWindow = () => (
  <div>
    <h3 className='text-2xl'>Ваши рассылки</h3>
    <div className='flex gap-x-6'>
      <ButtonLink to='sender' bgVariant='primary'>Создать рассылку</ButtonLink>
      <ButtonLink to='#' bgVariant='gradient'>Добавить контакты</ButtonLink>
    </div>
    <div className='flex mt-4 mb-2 justify-between items-center'>
      <ul className='flex text-lg gap-x-8'>
        <li>Завершенные</li>
        <li>Запланированные</li>
        <li>Черновики</li>
      </ul>
      <ul className='flex gap-x-2'>
        <Icon src={sort} />
        <Icon src={filter} />
        <Icon src={fileExport} />
      </ul>
    </div>
    <Statistics />
    <Reports />
  </div>
)
