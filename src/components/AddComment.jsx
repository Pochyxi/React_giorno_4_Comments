import { Component } from 'react';
import { Form } from 'react-bootstrap';

class AddComment extends Component {

    state = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGU4MWVkZDY3ODAwMTUwN2Q3MzQiLCJpYXQiOjE2NjIwMjk0NDEsImV4cCI6MTY2MzIzOTA0MX0.V3BZhbimXxKJnE2_CHALYYWFMGvvzYXBcX7sjT60dK4',
        comments: {
            comment: '',
            rate: 1,
            elementId: this.props.asin
        },
        commentToggle: false, 
    }
    handleChange = (propName, propValue) => {
        this.setState(
            {
                comments: {
                    ...this.state.comments,
                    [propName]: propValue
                }
                
            }
        )
    };
    submitComment = async () => {
        console.log(this.state)
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + this.state.token
                    },
                    body: JSON.stringify(this.state.comments)
                }
            );
            if (response.ok) {
                let data = await response.json();
                console.log('commento inviato!')
                console.log(data);
                this.setState(
                    {
                        comment: '',
                        rate: 1,
                        elementId: this.props.asin
                    }
                );
            } else {
                console.log('qualcosa è andato storto');
            } 

        } catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
            <div>
                <div className='pt-2'>
                    <button 
                        className={`btn ${this.state.commentToggle ? 'btn-danger' : 'btn-primary'}`}
                        onClick={() => {
                            this.setState({ commentToggle : !this.state.commentToggle });
                        }}
                        >
                            {this.state.commentToggle ? 'Chiudi commenti' : 'Commenta'}
                        </button>
                </div>
                {
                    this.state.commentToggle && (
                        <form 
                            className='bg-light my-3 p-2'
                            onSubmit={(e) => {
                                e.preventDefault();
                                this.submitComment();
                            }}
                        >
                        <Form.Group>
                            <Form.Control
                                placeholder='commenta qui'
                                value={this.state.comments.comment}
                                onChange={(e)=> {
                                    this.handleChange('comment', e.target.value);
                                }}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='text-dark'>VOTA da 1 a 5</Form.Label>
                            <Form.Control
                            type="range"
                            value={this.state.comments.rate}
                            onChange={(e)=> {
                                this.handleChange('rate', e.target.value);
                            }}
                            min="1"
                            max="5"
                            />
                        </Form.Group>
                        <div>
                            <button type='submit' className="btn btn-success">Invia</button>
                        </div>
                    </form>
                    )
                }
                
            </div>
        )
    }
}

export default AddComment;