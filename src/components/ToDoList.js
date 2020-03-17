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

    // if(editing) {
    //     return (
    //         <div className = 'tasks-container'>
    //             <div className='task-list'>
    //                 {tasks.map(task => {
    //                     return <Task task={task} updateTasks={updateTasks} toggleStatus={toggleStatus} />
    //                 })}
    //             </div>
    //             <div>
    //                 <input className='task-input' type='text' value={newTaskTitle} onChange={handleChanges} />
    //                 <button onClick={() => {
    //                     setNewTaskTitle('')
    //                     dispatch({ 
    //                         type: 'ADD_TASK', 
    //                         payload: { 
    //                             id: Date.now(), 
    //                             title: newTaskTitle 
    //                         }
    //                     }) 
    //                 }}>Update List</button>
    //             </div>
    //             <button onClick = {() => dispatch({ type: 'CLEAR_COMPLETED' })} >Clear Completed</button>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='tasks-container'>
    //             <div className='task-list'>
    //                 {tasks.map(task => {
    //                     return <Task key={task.id} task={task} updateTasks={updateTasks} toggleStatus={toggleStatus} />
    //                 })}
    //             </div>
    //             <button onClick = {() => dispatch({ type: 'TOGGLE_EDITING' })} >Add Task</button>
    //             <button onClick = {() => dispatch({ type: 'CLEAR_COMPLETED' })} >Clear Completed</button>
    //         </div>
    //     )
    // }


    return (
        <div className='tasks-container'>
            {tasks.map(task => {
                return <Task key={task.id} task={task} updateTasks={updateTasks} toggleStatus={toggleStatus} />
            })}
            {
                editing
                ? (
                    <div className='task-list-input'>
                        <input className='task-input' type='text' value={newTaskTitle} onChange={handleChanges} />
                        <button onClick={() => {
                            setNewTaskTitle('')
                            dispatch({ 
                                type: 'ADD_TASK', 
                                payload: { 
                                    id: Date.now(), 
                                    title: newTaskTitle 
                                }
                            }) 
                    }}>Add Task</button>
                    <button onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}>Back</button>
                    </div>
                ) : (
                    <div className = 'list-buttons-container'>
                        <button onClick = {() => dispatch({ type: 'TOGGLE_EDITING' })} >Add Task</button>
                        <button onClick = {() => dispatch({ type: 'CLEAR_COMPLETED' })} >Clear Completed</button>
                    </div>
                )
            }
            
        </div>
    )
}

export default ToDoList