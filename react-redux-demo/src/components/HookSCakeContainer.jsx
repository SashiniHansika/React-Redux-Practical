import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'


const HooksCakeContainer = () => {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes (Hooks)- {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())} >Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;