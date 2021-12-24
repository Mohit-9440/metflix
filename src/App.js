import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';


export default function App(){
  return (
    <Router>
      <Routes>
        <Route exact element={<Browse />} path={ROUTES.BROWSE} />
        <Route exact element={<SignIn />} path={ROUTES.SIGN_IN} />
        <Route exact element={<SignUp />} path={ROUTES.SIGN_UP} />
        <Route exact element={<Home/>} path={ROUTES.HOME} />


      </Routes>
    </Router>
  );
}