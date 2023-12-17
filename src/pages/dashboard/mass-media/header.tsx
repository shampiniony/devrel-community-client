import { EmotionLabel, IEmotionLabel } from './emotion-label'

const emotionLabels: IEmotionLabel[] = [
  {
    circleColor: 'bg-green-400',
    children: 'Позитив',
  },
  {
    circleColor: 'bg-blue-400',
    children: 'Нейтрально',
  },
  {
    circleColor: 'bg-red-400',
    children: 'Негатив',
  }
]

export const Header = () => {
  return (
    <div className='flex items-center justify-between my-5'>
      <h3 className='text-2xl'>Темы</h3>
      <ul className='flex gap-x-3'>
        { emotionLabels.map((el, indx) => <EmotionLabel key={indx} {...el}/>) }
      </ul>
    </div>
  )
}
