import React, { Component} from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Home from '../home/Home';
import Posts from '../posts/Posts';

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
          <Route path='/posts' exact={true} component={Posts} />
        </Switch>
      </Router>
    );
  }
}
 
export default App;