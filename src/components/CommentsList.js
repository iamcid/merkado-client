import React from 'react';
import { connect } from 'react-redux';


const CommentsList = ({ comments, productId }) => {
    const comment = comments.filter(comment => comment.product_id === productId)
    return (
        <div>
            {comment.map(comment => <ul><li key ={comment.id}>{comment.content}</li></ul>)}           
        </div>
    );
};

const mapStateToProps = state => {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentsList);