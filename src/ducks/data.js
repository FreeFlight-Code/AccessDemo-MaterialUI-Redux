import axios from 'axios';

// Set up initial state
const initialState = [];

// action types
const GET_DATA = 'GET_DATA';

// action creators
export function getData() {
    const data = axios.get('/api/getData').then( res => {
        return res.data
    })
    return {
        type: GET_DATA,
        payload: data
    }
}

// reducer function
export default function reducer(state = initialState, action) {
    let newState = Object.assign([], ...state);
    switch (action.type) {
        case GET_DATA + '_FULFILLED':
        newState = action.payload.slice();
        break;

        default:
            return state;
    }
    return newState;

}
