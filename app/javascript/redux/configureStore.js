import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GreetingReducer from './GreetingReducer';

const reducer = combineReducers({
  GreetingReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;