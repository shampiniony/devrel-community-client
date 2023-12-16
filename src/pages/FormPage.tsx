import { useParams } from 'react-router-dom';

export const FormPage = () => {
  let { form_id } = useParams();

  return <>{form_id}</>;
};
