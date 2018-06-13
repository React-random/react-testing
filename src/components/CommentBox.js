import React, {Component} from 'react';
import { saveComment, fetchComments } from '../actions'
import { connect } from 'react-redux';

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {comment:''};
    }

    handleChange = event => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.comment) {
            this.props.saveComment(this.state.comment);
        }

        this.setState({comment:''});
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>

                <button onClick={this.props.fetchComments}>Fetch comments</button>
            </div>

        );
    }
}

export default connect(null, {
    saveComment,
    fetchComments
})(CommentBox);
