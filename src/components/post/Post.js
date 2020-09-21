import React, { Component } from 'react';

import { Card, Container, CardHeader, CardBody, CardText } from 'reactstrap';
import Moment from 'react-moment';

import NavBar from '../navbar/NavBar';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoaded: false,
            post: {},
        }
    }

    componentDidMount(){
        let postId = this.props.match.params.postId;
        fetch("/api/post/"+postId)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    post: data,
                })
            }).catch(function(error) {
                console.log('Request failed.', error);
            })
    }

    render() { 
        const {post, isLoaded} = this.state;
        if(!isLoaded)
            return (<div>Loading post...</div>)
        return ( 
            <div>
                <NavBar />
                <Container className="col-lg-8 col-sm-12">
                    <Card className="mt-5">
                        <CardHeader>{post.title}</CardHeader>
                        <CardBody>
                            <ul>
                                <li className="bb1"><CardText style={{fontSize: 12}}>Posted by <b>{post.user.username}</b> on <b><Moment format="D MMM YYYY">{post.createdAt}</Moment></b> </CardText></li>
                            </ul>
                            <div className="p-3">{post.content}</div>
                        </CardBody>
                    </Card>
                    <div>
                        <div className="mt-3">Comments:</div>
                        {
                            post.comments.map(comment => 
                                <Card className="mt-2">
                                    <CardHeader><b>{comment.user.username}</b> on <b><Moment format="D MMM YYYY">{comment.createdAt}</Moment></b> </CardHeader>
                                    <CardBody>
                                        <div className="p-2">{comment.content}</div>
                                    </CardBody>
                                </Card>
                            )
                        }
                    </div>
                </Container>
            </div>
        );
    }
}
 
export default Post;