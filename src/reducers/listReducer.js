import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const createDate = (date) => {
    let year = date.substring(0,4)
    let month = date.substring(5,7)
    let day = date.substring(8,10)
    let d = new Date(year, month-1, day)
    return d.toDateString()
}
const createAdvanceDate = (date) => {
    let d = date.getTime() + ( 7 * 24 * 60 * 60 * 1000 )
    return (new Date(d)).toDateString()
}
export const initialState = {
    editing: false,
    tasks: [
        {
            id: 0,
            title: 'Task 1',
            due: createAdvanceDate(new Date()),
            completed: false
        },
        {
            id: 1,
            title: 'Task 2',
            due: createAdvanceDate(new Date()),
            completed: false
        }
    ]
}

export const listReducer = (state, action) => {
    
    switch(action.type) {
        case 'TOGGLE_EDITING' :
            return {
                ...state, 
                editing: !state.editing
            }
        case 'UPDATE_TASK_TITLE' :
            return {
                editing: false,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload.id){
                        console.log(`updating task ${task.id} with ${action.payload.title}`)
                        return {
                            ...task,
                            title: action.payload.title,
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
                            ...task,
                            completed: !task.completed
                        }
                    } else {
                        return task;
                    }
                })
            }
        case 'ADD_TASK' :
            console.log('Adding task', action.payload)
            return {
                editing: false,
                tasks: [
                    ...state.tasks,
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        due: createDate(action.payload.due),
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