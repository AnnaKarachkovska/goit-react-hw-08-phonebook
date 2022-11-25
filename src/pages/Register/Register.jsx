import { useDispatch } from 'react-redux';

import * as yup from 'yup';

import { register } from 'redux/operations';
import styles from './Register.module.css'

const schema = yup.object().shape({
  name: yup
    .string()
    .min(5, '* The name must be at least 5 characters')
    .required('* Required input field'),
  email: yup
    .string()
    .min(6, '* Mail must be at least 6 characters')
    .required('* Required input field')
    .email('Invalid email address entered...'),
  password: yup
    .string()
    .min(8, '* Your password must be at least 8 characters long')
    .required('* Required input field'),
});

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();

    const form = ev.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value, 
        email: form.elements.email.value, 
        password: form.elements.password.value
      })
    );

    form.reset();
  };

    return (
        <>
        <form onSubmit={handleSubmit} className={styles.form} validationschema={schema}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            minLength="5"
            required
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            className={styles.input}
            minLength="8"
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          Sign up
        </button>
      </form>
        </>
    )
}

export default Register;