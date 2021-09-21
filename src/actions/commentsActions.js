export const fetchComments = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/comments')
    .then(response => response.json())
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments}))
    }
}

export const addComment = (comment, productId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({comment, product_id: productId})
    })
    .then(response => response.json())   
    .then(comment => dispatch({ type: 'ADD_COMMENT', payload: comment}))
    }
}