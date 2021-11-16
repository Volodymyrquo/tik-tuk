import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import moviesReducer from './movies-reducer'

const reducers = combineReducers({
  moviesPage: moviesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(compose(applyMiddleware(thunk)))
)

export default store

window._store_ = store
