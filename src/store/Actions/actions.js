import {ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './actionTypes'

export const addItems = (item) => {
    return (dispatch) => {
        // console.log(item)
        dispatch({
            type: ADD_ITEM,
            payload: item
        })
       
    }
}

export const removeItems = () => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ITEM
        })
    }
}

export const clearCart = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART
        })
    }   
}