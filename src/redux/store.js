import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import newsReducer from './news-reducer'
import userReducer from './user-reducer'

const reducers = combineReducers({
  newsPage: newsReducer,
  userPage: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(compose(applyMiddleware(thunk)))
)

export default store

window._store_ = store
