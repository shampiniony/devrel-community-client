import { useParams, useSearchParams } from 'react-router-dom';

export const FormPage = () => {
  let { event_id } = useParams();
  let [searchParams] = useSearchParams();
  let token = searchParams.get("token");

  return <div className='w-[100vw] h-[100vw] bg-primary'>
  
  </div>;
};
