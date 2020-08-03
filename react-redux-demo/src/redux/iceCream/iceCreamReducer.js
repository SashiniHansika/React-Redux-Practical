import { BUY_ICECREAM } from './iceCreamType'

const initialState = {
    numberOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    console.log('icecreame reducer', state)
    switch (action.type) {
        case BUY_ICECREAM:
            console.log("icecreame reducer click buy icecream")
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }
        default: return state
    }
}

export default iceCreamReducer