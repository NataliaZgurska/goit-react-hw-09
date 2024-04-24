import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

// import { addContact } from '../../redux/contacts/operations';
import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from '../utils/constants';

import css from './RegistrationPage/RegistrationPage.module.css';

const FORM_INITIAL_VALUES = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required!')
    .email('You must enter valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Your password must be greater than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
    ),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // dispatch(
    //   addContact({
    //     ...values,
    //   })
    // );
    // actions.resetForm();
    console.log(values);
  };

  return (
    <div className={css.formAddContainer}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formAdd}>
          <div className={css.NameNumberContainer}>
            <label className={css.formLabel}>
              <span>Email:</span>
              <Field
                type="email"
                name="email"
                // autoComplete="off"
                placeholder="email"
                className={css.formInput}
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="email"
              />
            </label>
            <label className={css.formLabel}>
              <span>Password:</span>
              <Field
                type="password"
                name="password"
                // autoComplete="off"
                placeholder="password"
                className={css.formInput}
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="password"
              />
            </label>
          </div>
          <button type="submit" className={css.formAddBtn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;

// const LoginPage = () => {
//   return <div>LoginPage</div>;
// };

// export default LoginPage;
