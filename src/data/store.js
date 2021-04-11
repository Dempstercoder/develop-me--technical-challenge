import { createStore, compose } from 'redux';
import persistState from "redux-localstorage";
import initialState from './initial';
import reducer from './reducer';

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(persistState())
);

export default store;


// const store = createStore(
//   reducer, 
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );