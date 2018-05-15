import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './ducks/user';
import dataReducer from './ducks/data';
// import productReducer from './ducks/products';
// import cartReducer from './ducks/cart';
import promiseMiddleware from 'redux-promise-middleware';

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer
})

export default createStore(reducers, {}, applyMiddleware(promiseMiddleware()));