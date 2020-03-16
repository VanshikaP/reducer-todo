import React from 'react'

export const initialState = {
    editing: false,
    tasks: [
        {
            id: 0,
            title: 'Task 1'
        },
        {
            id: 1,
            title: 'Task 2'
        }
    ]
}

export const listReducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'TOGGLE_EDITING' :
            return {
                ...state, 
                editing: true
            }
        case 'UPDATE_TASK' :
            return {
                editing: false,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload.id){
                        console.log(`updating task ${task.id} with ${action.payload.title}`)
                        return {
                            id: task.id,
                            title: action.payload.title
                        }
                    } else {
                        return task;
                    }
                })
            }
        case 'UPDATE_LIST' :
            return {
                editing: false,
                tasks: [
                    ...state.tasks,
                    {
                        id: action.payload.id,
                        title: action.payload.title
                    }
                ]
            }
        default :
            return state;
    }
}