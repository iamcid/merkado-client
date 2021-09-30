import React from 'react';

class LikeButton extends React.Component {
    state ={
        likes: 0
    }

    handleLikes = () => {
        let count = this.state.likes + 1
        this.setState({
            likes: count
        })
    }

    render (){
        return(
            <div>
                <button className="like-button" onClick={this.handleLikes}>Like {this.state.likes}</button>
            </div>
        )
    }
}

export default LikeButton;