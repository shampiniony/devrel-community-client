import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IFormData } from '../../types/FormTypes';
import axios from 'axios';
import { useCreateForm } from '../../hooks/useCreateForm';

export const FormPage = () => {
  let { form_id } = useParams();
  let [feilds, setFeilds] = useState<IFormData>({
    name: '404 form not found',
    fields: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost/api/formfields/${form_id}/`)
      .then((res) => {
        setFeilds(res.data.data as IFormData);
      })
      .catch(() => {
        setFeilds({ name: '404 form not found', fields: [] });
      });
  }, []);

  let form = useCreateForm(feilds);

  return (
    <div className='my-20 mx-auto w-1/2 rounded-xl h-fit p-10 bg-light border-[#A5A6B5] border-2'>
      {form}
    </div>
  );
};
