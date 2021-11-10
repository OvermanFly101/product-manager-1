import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Main from './views/main';
import Detail from './views/detail';
import Update from './views/update';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/:id/edit'>
          <Update />
        </Route>
        <Route path='/:id'>
          <Detail />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
