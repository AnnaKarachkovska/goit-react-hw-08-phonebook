import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import UserMenu from 'components/UserMenu/UserMenu';

const getStyle = ({ isActive }) =>
  isActive ? { color: '#719bf0' } : { color: 'black' };
//#0247FE
const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav className={styles.nav}>
      {isLoggedIn ? (<NavLink to="/contacts" className={styles.link} style={getStyle}>
        Home
      </NavLink>): 
      <NavLink to="/" className={styles.link} style={getStyle}>
        Home
      </NavLink>
      }
      {isLoggedIn ? (<UserMenu/>) 
      : (<div className={styles.link}>
      <NavLink to="/register" className={styles.link} style={getStyle}>
       Sign up
      </NavLink>
      <NavLink to="/login" className={styles.link} style={getStyle}>
       Log in
      </NavLink>
      </div>)}
    </nav>
  );
};

export default Navigation;