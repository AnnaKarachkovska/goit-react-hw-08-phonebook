import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logIn } from 'redux/operations';
import styles from './Login.module.css'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ev => {
    ev.preventDefault();

    const form = ev.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value, 
        password: form.elements.password.value
      })
    )
    navigate('/contacts');
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            className={styles.input}
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          Log in
        </button>
      </form>
    </>
  );
};

export default Login;
