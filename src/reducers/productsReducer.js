export const productsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return action.payload
        case 'ADD_PRODUCT':
            return [...state, action.payload]
        default:
            return state
    }
}

export const selectedProductReducer = (state = null, action) => {
    switch(action.type){
        case 'SELECTED_PRODUCT':
            return action.payload
        default:
            return state
    }
}