import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { IFormFeilds } from './IFormFeilds';
import { useFormik } from 'formik';
import axios from 'axios';

export const FormPage = () => {
  let [feilds, setFeilds] = useState<IFormFeilds | null>(null);
  let { form_id } = useParams();
  let [searchParams] = useSearchParams();
  let token = searchParams.get('token');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    axios
      .get(`http://localhost/api/formfields/${form_id}/`)
      .then((res) => {
        setFeilds(res.data.data as IFormFeilds);
      })
      .catch(() => {
        setFeilds(null);
      });
  }, []);

  return (
    <div className='w-[100vw] h-[100vw] bg-primary'>
      <div className='h-20 p-5 flex items-center'>
        <img src='/logo.png' className='h-12' alt='' />
        <p className='text-2xl font-semibold mx-5'>DevMate</p>
      </div>

      <div className='bg-light-primary mx-auto w-1/2 rounded-xl h-fit p-10'>
        {feilds == null ? "404 not found" : ""}
        {feilds?.email ? (
          <>
            <h1>Email</h1>
            <input
              className='bg-primary w-full rounded-md p-2'
              type='text'
              name=''
              id=''
            />
          </>
        ) : (
          ''
        )}
        {feilds?.first_name ? (
          <>
            <h1>First Name</h1>
            <input
              className='bg-primary w-full rounded-md p-2'
              type='text'
              name=''
              id=''
            />
          </>
        ) : (
          ''
        )}
        {feilds?.last_name ? (
          <>
            <h1>Last Name</h1>
            <input
              className='bg-primary w-full rounded-md p-2'
              type='text'
              name=''
              id=''
            />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
