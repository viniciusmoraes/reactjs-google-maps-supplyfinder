import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { Reducers } from '../Reducers'

// const initialState = {
//
// }

const middleware = [thunk]

const Store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default Store;