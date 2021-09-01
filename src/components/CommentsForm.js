import React from 'react';

class CommentsForm extends React.Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addComment({
            content: this.state.content,
            product_id: this.props.product.id,
        })
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Comment:</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange} name="name" />
                    <button style={{backgroundColor: 'black', color: 'white'}} > Add Comment </button>
                </form>
            </div>
        );
    }
}

export default CommentsForm;