import React, { Component} from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../home/Home';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Post from '../post/Post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/post/:postId' component={Post} />
          <Route path="/"
              render={props => {
                  if (!this.isLoggedIn()) {
                      return <AuthRoutes {...props} />;
                  }
              }} />
        </Switch>
      </Router>
    );
  }

  isLoggedIn(){
    return sessionStorage.getItem("jwttkn") !== null
  }
}

class AuthRoutes extends Component {
  render() {
      return (
          <Switch>
            <Route path='/register' exact={true} component={Register} />
            <Route path='/login' exact={true} component={Login} />
          </Switch>
      )
  }
}
export default App;