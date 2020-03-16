// import React from 'react'

export const initialState = (task_title) =>{
    return {
        editing: false,
        title: task_title
    }
}

export const taskReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_EDITING' :
            return {
                ...state, 
                editing: true
            }
        case 'UPDATE_TASK' :
            return {
                editing: false,
                title: action.payload
            }
        default :
            return state;
    }
}