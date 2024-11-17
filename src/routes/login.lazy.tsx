import { createLazyFileRoute } from '@tanstack/react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';

export const Route = createLazyFileRoute('/login')({
  component: Login
});

const validationSchema = yup.object({
  email: yup.string().required('ელ.ფოსტა სავალდებულოა'),
  password: yup.string().required('პაროლი სავალდებულოა')
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async () => {
      formik.setSubmitting(true);
      // try {
      // } catch (error) {
      //   console.error(error);
      // } finally {
      //   formik.setSubmitting(false);
      // }
    }
  });

  return (
    <div>
      <h1>login pag</h1>
    </div>
  );
}
