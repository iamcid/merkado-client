import React from 'react';
import { connect } from 'react-redux';

import { fetchComments, addComment } from '../actions/commentsActions';

import CommentsList from './CommentsList';

class CommentsContainer extends React.Component {
    
    componentDidMount() { 
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                Comments:
                <CommentsList />
            </div>
        );
    }
}

export default connect(null, {fetchComments, addComment })(CommentsContainer);