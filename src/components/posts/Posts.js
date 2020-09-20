import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            posts: []
        }
    }

    async componentDidMount(){
        const response = await fetch('/api/post');
        const body = await response.json();
        this.setState({ posts : body, isLoading : false });
    }

    render() { 
        const {posts, isLoading} = this.state;
        if(isLoading)
            return (<div>Loading...</div>)

        return ( 
                <div>
                    <h2>Posts</h2>
                        { 
                            posts.map(
                            post => <div key={post.id}>{post.title} - by <b>{post.user.username}</b></div>
                            )
                        }
                </div> 
        );
    }
}
 
export default Posts;