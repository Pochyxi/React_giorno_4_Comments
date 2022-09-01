import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

class CommentList extends Component {
    
    render() {
        return (
            <ListGroup>
                {this.props.comments.map(comment =>(
                    <div key={comment._id}>
                        <SingleComment 
                            id={comment._id}
                            rate={comment.rate}
                            comment={comment.comment}
                            commentId={comment.elementId}
                        />
                    </div>
                    
                ) )}
                
            </ListGroup> 
        )
    }
            
}

export default CommentList;