import axios from 'axios';

// Set up initial state
const initialState = [];

// action types
const GET_JOBS = 'GET_JOBS';
const GET_MY_JOBS = 'GET_MY_JOBS';


// action creators
export function getJobs() {
    const data = axios.get('/api/getJobs').then( res => {
        return res.data
    })
    return {
        type: GET_JOBS,
        payload: data
    }
}
export function getMyJobs(id) {
    const data = axios.get('/api/getMyJobs/' + id).then( res => {
        return res.data
    })
    return {
        type: GET_MY_JOBS,
        payload: data
    }
}

// reducer function
export default function reducer(state = initialState, action) {
    let newState = Object.assign([], ...state);
    switch (action.type) {

        case GET_JOBS + '_FULFILLED':
        newState = action.payload.slice();
        break;
        case GET_MY_JOBS + '_FULFILLED':
        newState = action.payload.slice();
        break;

        default:
            return state;
    }
    return newState;

}
