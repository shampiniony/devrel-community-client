import { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IFormData, IField } from '../types/FormTypes';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../components';

export const useCreateForm = (form_data: IFormData) => {
  const [step, setStep] = useState(1);
  let [searchParams] = useSearchParams();
  let token = searchParams.get('token');
  if (token && step !== 3) setStep(3);

  // Dynamically create initial values and validation schema
  const initialValues = form_data.fields.reduce((acc, feilds) => {
    // @ts-ignore
    acc[feilds.name] = '';
    return acc;
  }, {});

  console.log(initialValues);

  const validationSchema = Yup.object(
    form_data.fields.reduce((acc, field) => {
      // @ts-ignore
      acc[field.name] = Yup.string();
      return acc;
    }, {})
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (step === 1) {
        try {
          const response = await axios.post(
            'http://localhost/api/users/login/',
            {
              // @ts-ignore
              email: values.email,
              redirect: window.location.href,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.status === 200) setStep(2);
        } catch (error) {
          setStep(3);
        }
      } else {
        // Handle submission for step 2
        try {
          const response = await axios.post(
            'http://localhost/api/user-by-token/',
            {
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': token,
              },
            }
          );

          if (response.status === 200) {
            console.log(response.data);
          }
        } catch (error) {
          console.error('Error during API request', error);
        }

        alert(JSON.stringify(values, null, 2));
      }

      setSubmitting(false);
    },
  });

  const renderField = (field: IField) => {
    return (
      <div key={field.name}>
        <h1>{field.name.replace(/_/g, ' ')}</h1>
        <input
          className='bg-second-primary border-[1px] border-primary w-full rounded-md p-2'
          type='text'
          name={field.name}
          onChange={formik.handleChange}
          // @ts-ignore
          value={formik.values[field.name]}
        />
      </div>
    );
  };

  return (
    <>
      <h1 className='text-4xl font-bold text-center'>{form_data.name}</h1>
      <form
        onSubmit={formik.handleSubmit}
        className='w-3/4 mx-auto pt-4 flex flex-col gap-5'
      >
        {form_data.fields.length && step === 1 ? (
          <>
            <h1>Email</h1>
            <input
              className='bg-second-primary border-[1px] border-primary w-full rounded-md p-2'
              type='email'
              name='email'
              onChange={formik.handleChange}
              //@ts-ignore
              value={formik.values.email}
            />
            {/* <button
              type='submit'
              className='w-full h-10 flex items-center justify-center cursor-pointer border rounded-lg'
            >
              Далее
            </button> */}
            <Button
              className='font-bold w-full h-10 flex items-center justify-center cursor-pointer rounded-lg'
              onClick={() => {
                formik.handleSubmit();
              }}
              bgVariant={'gradient-fill'}
            >
              Далее
            </Button>
          </>
        ) : (
          ''
        )}
        {step === 2 && <>Пройдите по ссылке на почте</>}
        {step === 3 && form_data.fields.map((field) => renderField(field))}
        {step === 3 && (
          // <Button
          //   className='w-full h-10 flex items-center justify-center cursor-pointer border rounded-lg'
          //   onClick={() => {
          //     formik.handleSubmit();
          //   }}
          //   bgVariant={'inherit'}
          // >
          //   Войти
          // </Button>
          <Button
            className='font-bold w-full h-10 flex items-center justify-center cursor-pointer rounded-lg'
            onClick={() => {
              formik.handleSubmit();
            }}
            bgVariant={'gradient-fill'}
          >
            Далее
          </Button>
        )}
      </form>
    </>
  );
};
