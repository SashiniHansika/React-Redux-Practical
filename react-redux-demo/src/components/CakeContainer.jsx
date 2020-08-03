import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.cake.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// map states come from redux store
const mapStateToProps = state => {
    console.log(state.numberOfCakes)
    return {
        numberOfCakes: state.numberOfCakes
    }
}

// To update store
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);