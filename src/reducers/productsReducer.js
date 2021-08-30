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