import { Routes, Route } from "react-router-dom";

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Navigation from './Navigation/Navigation';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Contacts from "pages/Contacts/Contacts";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;