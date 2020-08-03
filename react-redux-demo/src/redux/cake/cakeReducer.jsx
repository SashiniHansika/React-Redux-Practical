import { BUY_CAKE } from './cakeActionTypes'

const initialState = {
    numberOfCakes: 10
}


const caseReducer = (state = initialState, action) => {
    console.log("sbb", action.type)
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state
    }
}

export default caseReducer 