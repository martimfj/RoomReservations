import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Main from './Main';
import Register from './Register'
import Forum from './Forum'
import Profile from './Profile'
import Notify from './Notify'


class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/forum" component={Forum} />
          <Route path="/notify" component={Notify} />
          
        </div>
      </Router>          
    );
  };
};

export default App;