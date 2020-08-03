import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamCreator = () => {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 >Number of Icecreams -{numberOfIceCream} </h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
        </div>
    )
}

export default IceCreamCreator