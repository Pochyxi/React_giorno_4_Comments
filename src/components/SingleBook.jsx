import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";

class SingleBook extends Component {

  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
  }
  state = {
    selected: this.props.selected,
  };
  changeState(el) {
    this.props.changeState(el)
  }

  render() {
    return (
      <div
        className="my-3 h-20 d-flex flex-column d-lg-flex"
        style={{
          border: this.state.selected ? "3px solid red" : "3px solid gray",
        }}
      >
        <Card onClick={() => {
          this.changeState(this.props.book)
          this.setState({ selected: !this.state.selected })
        }}>
          <Card.Img className="b-single" variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && (
          <div className="bg-light">
            <div>
              <AddComment asin={this.props.book.asin} />
            </div>
            <CommentArea asin={this.props.book.asin} />
          </div>
        )}
      </div>
    );
  }
}

export default SingleBook;
