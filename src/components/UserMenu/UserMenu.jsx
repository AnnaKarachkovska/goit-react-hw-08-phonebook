import {useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from 'redux/operations';
import styles from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(state => state.auth.user.email);

  const handleClick = () => {
    dispatch(logOut());
    navigate('/login')
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.name}>{email}</p>
        <button onClick={handleClick} className={styles.btn}>
          Log out
        </button>
      </div>
    </>
  );
};

export default UserMenu;
