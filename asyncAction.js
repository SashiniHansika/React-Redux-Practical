const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const thuckMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const axios = require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}


const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,

    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users

    }
}
const fetchUsersError = error => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    }
}


const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response
                const users = response.data.map(users => users.id)
                dispatch(fetchUsersSuccess(users))

            }
            ).catch(
                error => {
                    // error message
                    dispatch(fetchUsersError(error.message))
                }
            )
    }
}

const store = createStore(reducer, applyMiddleware(thuckMiddleware));
store.subscribe(() => { console.log("store", store.getState()) })
store.dispatch(fetchUsers())

