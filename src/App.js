import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' render={() => <Landing />}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
