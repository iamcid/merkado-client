import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from "../actions/commentsActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CommentsList = ({ comments, productId }) => {
    
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(fetchComments())
        }, [dispatch])

        return (
            <div>
                 {comments.filter(function(comment){
                     return comment.product_id === productId}).map(c => 
                <div key={c.id}>
                    {c.content} 
                </div>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { comments: state.comments}
}

export default connect(mapStateToProps, { fetchComments })(CommentsList);