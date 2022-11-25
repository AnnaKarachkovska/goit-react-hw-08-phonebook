import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Navigation from './Navigation/Navigation';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Contacts from 'pages/Contacts/Contacts';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
