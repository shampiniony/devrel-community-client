export const Statistic = ({ header, text, color }: {header: string, text: string, color: string}) => {
  return (
    <div>
      <p className={`text-${color} text-xl font-bold`}>{ header }</p>
      <p className='text-slate text-sm'>{ text }</p>
    </div>
  )
}
