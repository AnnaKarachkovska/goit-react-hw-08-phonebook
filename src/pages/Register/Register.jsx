import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { register } from 'redux/operations';
import styles from './Register.module.css'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate('/contacts');
    form.reset();
  };

    return (
        <>
        <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
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