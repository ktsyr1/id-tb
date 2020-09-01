import React from 'react';  
import './App.css'; 
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Index from "./com/center/index";
import View_center from './com/center/center/view.center'; 
import Auth from './com/auth/auth';
import Errors from './com/theme/error';
import Add_center from './com/center/center/Add.center';
import About from './com/theme/about';
import Reports from './com/center/report/index.report';

function App() {
  return (
    // <Router>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route  path="/center/:id" component={View_center} />
          <Route  path="/add-center" component={Add_center} />
          <Route  path="/about" component={About} />
          <Route  path="/auth" component={Auth} />
          <Route  path="/reports" component={Reports} />
          <Route component={Errors}  />


        </Switch>
      </div>
    </BrowserRouter>
    // </Router>
  );
}

export default App;
