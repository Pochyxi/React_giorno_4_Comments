import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  state = {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGU4MWVkZDY3ODAwMTUwN2Q3MzQiLCJpYXQiOjE2NjIwMjk0NDEsImV4cCI6MTY2MzIzOTA0MX0.V3BZhbimXxKJnE2_CHALYYWFMGvvzYXBcX7sjT60dK4",
  };
  deletComment = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentId}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + this.state.token,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("commento cancellato!");
        console.log(data);
      } else {
        console.log("qualcosa è andato storto");
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <ListGroup.Item key={this.props.commentId}>
        {this.props.rate}/5 : {this.props.comment}
        <div>
          <button className="btn btn-danger" onClick={this.deletComment}>
            elimina
          </button>
        </div>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
