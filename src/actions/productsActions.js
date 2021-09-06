export const fetchProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => dispatch({type: 'FETCH_PRODUCTS', payload: products}))
    }
}

export const selectedProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'SELECTED_PRODUCT',
            payload: product
        })        
    }
}

export const addProduct = product => {
    return (dispatch) => {
        fetch('http://localhost:3000/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(product => dispatch({ type: 'ADD_PRODUCT', payload: product}))
    }
}