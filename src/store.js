import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './ducks/user';
// import productReducer from './ducks/products';
// import cartReducer from './ducks/cart';
import promiseMiddleware from 'redux-promise-middleware';

const reducers = combineReducers({
    // products: productReducer,
    // cart: cartReducer,
    user: userReducer
})

export default createStore(reducers, {}, applyMiddleware(promiseMiddleware()));