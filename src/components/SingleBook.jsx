import { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'
import AddComment from './AddComment'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <div>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? '3px solid red' : 'none' }}
          >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
            
          </Card.Body>
        </Card>
          {
            this.state.selected && (
              <div className='bg-light'>
                <div className="my-3">
                      <AddComment asin={this.props.book.asin} />
                </div>
                <CommentArea asin={this.props.book.asin} />
              </div>
                  
            )
          }
      </div>
      
    )
  }
}

export default SingleBook
