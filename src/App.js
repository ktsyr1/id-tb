import React from 'react';  
import './App.css'; 
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Index from "./com/center/index";
import Nav from "./com/theme/nav";
import View_center from './com/center/view'; 

function App() {
  return (
    // <Router>
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/:id" component={View_center} />

        </Switch>
      </div>
    </BrowserRouter>
    // </Router>
  );
}

export default App;
