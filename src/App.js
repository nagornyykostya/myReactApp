import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
<BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
    <div class='app-wrapper-content'>
      <Route path='/dialogs' component={Dialogs}/>
      <Route path='/profile' component={Profile}/>
          </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
