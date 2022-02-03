import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { AboutScreen } from '../screens/AboutScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { Navbar } from '../components/Navbar';


export const AppRouter = () => {
  return (
  <Router>
    <div>
      <Navbar />
      <hr />

      <div className='container'>
        <Routes>
          <Route exact path="/" element={ <HomeScreen /> }/>
          <Route exact path="/about" element={ <AboutScreen /> }/>
          <Route exact path="/login" element={ <LoginScreen /> }/>
          <Route path="*" element={ <HomeScreen /> }/>
        </Routes>
      </div>

    </div>
  </Router>
  );
};
