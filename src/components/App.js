import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../style/App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
