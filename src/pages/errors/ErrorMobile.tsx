import mobile_error from './../../assets/elements/mobile-only.png';

export const ErrorMobile = () => {
  return <div className='flex flex-col items-center justify-center h-[100vh] gap-5'>
    <img className='w-1/2 pl-6' src={mobile_error} alt=''/>
    <h1 className='text-5xl font-bold'>Вот незадача!</h1>
    <div className='text-center'>
      <p>Сейчас сервис доступен только на десктопе.</p>
      <p>Мы уже работаетм над мобильной весией.</p>
    </div>
  </div>
}