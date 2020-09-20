import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar/NavBar';
import Posts from '../posts/Posts';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <NavBar />
                <Posts />
            </div>
        );
    }
}
 
export default Home;