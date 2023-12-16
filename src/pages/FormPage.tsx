import { useParams, useSearchParams } from 'react-router-dom';
import { IFormFeilds } from './IFormFeilds';
import axios from 'axios'

export const FormPage = () => {
  let { form_id } = useParams();
  let [searchParams] = useSearchParams();
  let token = searchParams.get("token");

  axios.post(`http://localhost/api/formfeilds/${form_id}`)

  return <div className='w-[100vw] h-[100vw] bg-primary'>
    <div className='h-20 p-5 flex items-center'>
      <img src='/logo.png' className='h-12' alt=''/>
      <p className='text-2xl font-semibold mx-5'>DevMate</p>
    </div>

    <div className='bg-light-primary mx-auto w-1/2 rounded-xl h-fit p-10'>
      <h1>Font</h1>
      <input className='bg-primary w-full rounded-md p-2' type='text' name='' id=''/>
      <h1>Font</h1>
      <input className='bg-primary w-full rounded-md p-2' type='text' name='' id=''/>
      <h1>Font</h1>
      <input className='bg-primary w-full rounded-md p-2' type='text' name='' id=''/>
    </div>
  
  </div>;
};
