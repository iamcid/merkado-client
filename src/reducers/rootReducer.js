import { combineReducers } from 'redux'

import { itemsReducer} from './itemsReducer'
import { commentsReducer} from './commentsReducer'

export const rootReducer = combineReducers({
    items: itemsReducer,
    comments: commentsReducer
}) 