import { Component} from 'react';
import CommentList from './CommentList';
import Error from './Error';
import Loading from './Loading';

class CommentArea extends Component {
    state = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGU4MWVkZDY3ODAwMTUwN2Q3MzQiLCJpYXQiOjE2NjIwMjk0NDEsImV4cCI6MTY2MzIzOTA0MX0.V3BZhbimXxKJnE2_CHALYYWFMGvvzYXBcX7sjT60dK4',
        comments: [],
        loading: true,
        error: false,
    }
    componentDidMount() {
        this.fetchComments();
    }
    async fetchComments() {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this.state.token
                    }
                }
            );
            if (response.ok) {
                let data = await response.json();
                console.log(data);
                this.setState(
                    {
                        comments: data,
                        loading: false,
                    }
                );
            } else {
                console.log('qualcosa è andato storto');
                this.setState(
                    {
                        loading: false,
                        error: true
                    }
                )
            } 

        } catch (error) {
            console.error(error);
            this.setState(
                {
                    loading: false,
                    error: true
                }
            )
        }
    }
    render() {
        
        return (
            <div className='text-dark bg-light my-3'>
                <h2>Commenti</h2>
                <div>
                    <CommentList comments={this.state.comments} />
                    {
                        this.state.loading && (
                            <Loading />
                        )
                    }
                    {
                        this.state.error && (
                            <Error />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default CommentArea;