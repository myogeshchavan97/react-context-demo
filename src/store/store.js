import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    users: usersReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
