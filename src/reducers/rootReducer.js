import { combineReducers } from 'redux';
import { productsReducer} from './productsReducer';
import { commentsReducer} from './commentsReducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    comments: commentsReducer
}) 