import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {
    comments: [],
  };
  render() {
    return (
      <ListGroup>
        {this.props.comments.map((comment) => (
          <div key={comment._id}>
            <SingleComment
              rate={comment.rate}
              comment={comment.comment}
              commentId={comment._id}
            />
          </div>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
