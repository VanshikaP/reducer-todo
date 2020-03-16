import React from 'react'

export const initialState = {
    editing: false,
    tasks: [
        {
            id: 0,
            title: 'Task 1',
            completed: false
        },
        {
            id: 1,
            title: 'Task 2',
            completed: false
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
        case 'UPDATE_TASK_TITLE' :
            return {
                editing: false,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload.id){
                        console.log(`updating task ${task.id} with ${action.payload.title}`)
                        return {
                            id: task.id,
                            title: action.payload.title,
                            completed: task.completed
                        }
                    } else {
                        return task;
                    }
                })
            }
        case 'TOGGLE_TASK_STATUS' :
            return {
                editing: false,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload.id){
                        console.log(`updating task status`)
                        return {
                            id: task.id,
                            title: task.title,
                            completed: !task.completed
                        }
                    } else {
                        return task;
                    }
                })
            }
        case 'ADD_TASK' :
            return {
                editing: false,
                tasks: [
                    ...state.tasks,
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        completed: false
                    }
                ]
            }
        case 'CLEAR_COMPLETED' :
            console.log('clearing tasks')
            return {
                editing: false,
                tasks: state.tasks.filter(task => task.completed === false)
            }
        default :
            return state;
    }
}