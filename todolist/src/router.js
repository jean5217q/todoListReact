import React from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import App from './components/App'


const RouterComponent = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={()=><App status='all'/>}  />
      <Route path="/active" component={()=> <App status='active'/>} />
      <Route path="/completed" component={()=><App status='completed'/>} />
    </div>
  </Router>
);

export default RouterComponent;