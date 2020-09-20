import React, { Component } from 'react';

import { Card, Container, CardHeader, CardBody, CardText } from 'reactstrap';

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
            <Container className="col-lg-8 col-sm-12">
                <Card className="mt-5">
                    <CardHeader>Top Stories</CardHeader>
                    <CardBody>
                        <ul>
                        { 
                            posts.map(
                                post => <a href={"/post/"+post.id}><li className="bb1"><CardText>{post.title} - by <b>{post.user.username}</b></CardText></li></a>
                            )
                        }
                    </ul>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}
 
export default Posts;