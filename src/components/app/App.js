import React, { Component} from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../home/Home';
import Posts from '../posts/Posts';
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
          <Route path='/posts' exact={true} component={Posts} />
          <Route path='/post/:postId' component={Post} />
        </Switch>
      </Router>
    );
  }
}
 
export default App;