import React, {Component} from 'react';
import { saveComment } from '../actions'
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

        this.props.saveComment(this.state.comment);

        this.setState({comment:''});
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, {
    saveComment
})(CommentBox);
