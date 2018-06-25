import { combineReducers, createStore, applyMiddleware } from 'redux';
import peopleReducer from './ducks/people';
import dataReducer from './ducks/data';
import companyReducer from './ducks/company';
import jobReducer from './ducks/job';
import promiseMiddleware from 'redux-promise-middleware';

const reducers = combineReducers({
    company: companyReducer,
    job: jobReducer,
    people: peopleReducer,
    data: dataReducer
})

export default createStore(reducers, {}, applyMiddleware(promiseMiddleware()));