import { BUY_CAKE } from './cakeActionTypes'

export const buyCake = () => {
    console.log("cake action")
    return {
        type: BUY_CAKE
    }
}