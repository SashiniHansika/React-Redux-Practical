const redux = require("redux")
const reduxLogger = require("redux-logger")

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

// (previouseState, cation) => newState

const initialState = {
    numOfCakes: 10,
    numberOfIceCreams: 15,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, // create a copy of state object
            numOfCakes: state.numOfCakes - 1 // only update numberOfCakes property
        }
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }
        default: return state
    }
}

const store = createStore(reducer, applyMiddleware(logger)) // create store
console.log('initial state', store.getState()) // initial state

const unsubscribe = store.subscribe(() => { }) // create listner to the store

store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
console.log(store.getState())
