import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Main from './Main';
import Register from './Register'
import Forum from './Forum'

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forum" component={Forum} />
        </div>
      </Router>          
    );
  };
};

export default App;