import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/commentsActions';

class CommentsForm extends React.Component {

    state = { 
        content:''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addComment(this.state, this.props.productId)
        this.setState({
            content:''
        })
    }

    render() {
        return (
            <div class="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <label> <u><b> Add a comment: </b></u></label>
                    <input type='text' value={this.state.content} onChange={this.handleChange} name='content'/><br/>
                    <input type='submit' /><br/>
                </form>
            </div>
        )
    }    
}
export default connect(null, { addComment })(CommentsForm);