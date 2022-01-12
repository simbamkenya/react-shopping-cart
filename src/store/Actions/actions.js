import {ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './actionTypes'

export const addItems = () => (dispatch) => {
    return (dispatch) => {
        dispatch({
            type: ADD_ITEM,
            payload: 4
        })
    }
}

export const removeItems = () => (dispatch) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ITEM
        })
    }
}

export const clearCart = () => (dispatch) => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART
        })
    }   
}