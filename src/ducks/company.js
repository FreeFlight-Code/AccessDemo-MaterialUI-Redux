import axios from 'axios';

// Set up initial state
const initialState = [];

// action types
const GET_COMPANY = 'GET_COMPANY';
const ADD_COMPANY = 'ADD_COMPANY';
const EDIT_COMPANY = 'EDIT_COMPANY';
const DELETE_COMPANY = 'DELETE_COMPANY';

// action creators
export function getCompany(index) {
    const data = axios.get(`/api/getCompany/${index}`).then( res => {
        return res.data
    }).catch(err=>console.log(err))
    return {
        type: GET_COMPANY,
        payload: data
    }
}
export function addCompany(obj) {
    const data = axios.post(`/api/addCompany`, obj).then( res => {
        return res.data
    }).catch(err=>{
        console.log(err)
        return null;
    })
    return {
        type: ADD_COMPANY,
        payload: data
    }
}
export function editCompany(obj) {
    axios.put(`/api/editCompany/${obj.id}`, obj).then(_=>{ 
        alert('Company Edited Successfully')
        return {
            type: EDIT_COMPANY,
            payload: obj
        }
    })
    .catch(_=>{
        alert('Company NOT Edited!!!')
        return {
            type: EDIT_COMPANY,
            payload: null
        }
    })
}
export function deleteCompany(index) {
    axios.delete(`/api/deleteCompany/${index}`).then(_=>{ 
        alert('Company Deleted Successfully')
        return {
            type: DELETE_COMPANY,
            payload: index
        }
    })
    .catch(_=>{
        alert('Company NOT Deleted!!!')
        return {
            type: EDIT_COMPANY,
            payload: null
        }
    })
}

// reducer function
export default function reducer(state = initialState, action) {
    let newState = Object.assign([], ...state);
    if (action.payload === null) return state;
    switch (action.type) {
        case GET_COMPANY + '_FULFILLED':
        newState = action.payload.splice();
        break;
        case ADD_COMPANY + '_FULFILLED':
        newState = newState.unshift(action.payload);
        break;
        //edit needs to create new object
        case EDIT_COMPANY + '_FULFILLED':

        let index = newState.filter();
        newState = [newState.slice(0, index), action.payload, newState.slice(index)]
        break;
        case DELETE_COMPANY + '_FULFILLED':
        newState = newState.splice(action.payload, 1);
        break;

        default:
            return state;
    }
    return newState;

}
