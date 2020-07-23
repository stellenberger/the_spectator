import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Landing, NavBar} from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' render={() => <Landing />}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
