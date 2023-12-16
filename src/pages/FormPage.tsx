import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IFormData } from '../models/FormTypes';
import axios from 'axios';
import { useCreateForm } from '../hooks/useCreateForm';

export const FormPage = () => {
  let { form_id } = useParams();
  let [feilds, setFeilds] = useState<IFormData>({name: "404 form not found", fields: []});
  
  useEffect(() => {
    axios
      .get(`http://localhost/api/formfields/${form_id}/`)
      .then((res) => {
        setFeilds(res.data.data as IFormData);
      })
      .catch(() => {
        setFeilds({name: "404 form not found", fields: []});
      });
  }, []);

  let form = useCreateForm(feilds);

  return (
    <div className='w-[100vw] min-h-[100vh] h-fit pb-10 bg-primary'>
      <div className='h-20 p-5 flex items-center'>
        <img src='/logo.png' className='h-12' alt='' />
        <p className='text-2xl font-semibold mx-5'>DevMate</p>
      </div>
      <div className='bg-light-primary mx-auto w-1/2 rounded-xl h-fit p-10'>
        { form }
      </div>
    </div>
  );
};
