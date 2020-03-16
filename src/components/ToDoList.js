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
            type: 'UPDATE_TASK',
            payload: {
                id: taskId,
                title: taskTitle
            }
        })
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

    if(editing) {
        return (
            <div className = 'tasks-container'>
                <div className='task-list'>
                    {tasks.map(task => {
                        return <Task task={task} updateTasks={updateTasks} />
                    })}
                </div>
                <div>
                    <input className='task-input' type='text' value={newTaskTitle} onChange={handleChanges} />
                    <button onClick={() => dispatch({ type: 'UPDATE_LIST', payload: { id: Date.now(), title: newTaskTitle } })}>Update List</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='tasks-container'>
                <div className='task-list'>
                    {tasks.map(task => {
                        return <Task task={task} updateTasks={updateTasks} />
                    })}
                </div>
                <button onClick = {() => dispatch({ type: 'TOGGLE_EDITING' })} >Add Task</button>
            </div>
        )
    }
}

export default ToDoList