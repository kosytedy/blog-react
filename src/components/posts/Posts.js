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

    componentDidMount(){
        fetch('/api/post')
            .then(res => res.json())
            .then(data => 
                this.setState({ 
                    posts : data, 
                    isLoading : false 
                })
            ).catch(function(error) {
                console.log('Request failed.', error);
            });
    }

    render() { 
        const {posts, isLoading} = this.state;
        if(isLoading)
            return (<div>Loading posts...</div>)

        return ( 
            <Container className="col-lg-8 col-sm-12">
                <Card className="mt-5">
                    <CardHeader>Top Stories</CardHeader>
                    <CardBody>
                        <ul>
                        { 
                            posts.map(
                                post => <a href={"/post/"+post.id} key={post.id}><li className="bb1"><CardText>{post.title} - by <b>{post.user.username}</b></CardText></li></a>
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