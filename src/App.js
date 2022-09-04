import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      book: fantasyBooks[0],
    };
  }
  changeState(el) {
    this.setState({ book: el });
  }
  render() {
    const book = this.state.book;
    return (
      <div className="App">
        <header className="App-header">
          <WarningSign text="Watch out again!" />
          <MyBadge text="NEW!!" color="info" />
          <Row>
            <Col xs={6} className="mx-auto">
              <SingleBook
                selected={true}
                changeState={this.changeState}
                book={book}
              />
            </Col>
          </Row>
          <BookList
            selected={false}
            changeState={this.changeState}
            books={fantasyBooks}
          />
        </header>
      </div>
    );
  }
}

export default App;
