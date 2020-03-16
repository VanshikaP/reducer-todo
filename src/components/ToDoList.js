import React , { useState, useReducer } from 'react'

import Task from './Task'

import { listReducer, initialState } from '../reducers/listReducer'


const ToDoList = () => {

    const [{ editing, tasks }, dispatch] = useReducer(listReducer, initialState)
    const [newTaskTitle, setNewTaskTitle] = useState('')

    console.log(editing, tasks);

    const handleChanges = e => {
        setNewTaskTitle(e.target.value)
    }

    const updateTasks = (taskTitle, taskId) => {
        console.log('update task list with id: ', taskId, ' and title: ', taskTitle)
        dispatch({
            type: 'UPDATE_TASK_TITLE',
            payload: {
                id: taskId,
                title: taskTitle,
            }
        })
    }

    const toggleStatus = taskId => {
        dispatch({
            type: 'TOGGLE_TASK_STATUS',
            payload: {
                id: taskId
            }
        })
    }

    if(editing) {
        return (
            <div className = 'tasks-container'>
                <div className='task-list'>
                    {tasks.map(task => {
                        return <Task task={task} updateTasks={updateTasks} toggleStatus={toggleStatus} />
                    })}
                </div>
                <div>
                    <input className='task-input' type='text' value={newTaskTitle} onChange={handleChanges} />
                    <button onClick={() => dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), title: newTaskTitle } })}>Update List</button>
                </div>
                <button onClick = {() => dispatch({ type: 'CLEAR_COMPLETED' })} >Clear Completed</button>
            </div>
        )
    } else {
        return (
            <div className='tasks-container'>
                <div className='task-list'>
                    {tasks.map(task => {
                        return <Task task={task} updateTasks={updateTasks} toggleStatus={toggleStatus} />
                    })}
                </div>
                <button onClick = {() => dispatch({ type: 'TOGGLE_EDITING' })} >Add Task</button>
                <button onClick = {() => dispatch({ type: 'CLEAR_COMPLETED' })} >Clear Completed</button>
            </div>
        )
    }

    // return (
    //     <div className='task-list-container'>
    //         {
    //             // tasks.map(task => {
    //             //     return <Task />
    //             // })
            
    //             (editing)
    //             ? (
    //                 <div>
    //                     {tasks.map(task => {
    //                         return <Task />
    //                     })}
    //                     <input className='task-input' type='text' value={newTaskTitle} onChange={handleChanges} />
    //                     <button onClick={() => dispatch({ type: 'UPDATE_LIST', payload: newTaskTitle })}>Update List</button>
    //                 </div>
    //             )
    //             : (
    //                 <div>
    //                     {tasks.map(task => {
    //                         return <Task />
    //                     })}
    //                     <button onClick = {() => dispatch({ type: 'TOGGLE_EDITING' })} >Add Task</button>
    //                 </div>
    //             )
    //         }
            
    //     </div>
    // )
}

export default ToDoList