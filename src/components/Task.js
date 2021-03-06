import React , { useState, useReducer } from 'react'

import { taskReducer, initialState } from '../reducers/taskReducer'

const Task = ({task, updateTasks, toggleStatus}) => {

    const [{ editing, title, due, completed}, dispatch] = useReducer(taskReducer, initialState(task))
    const [newTitle, setNewTitle] = useState(title)

    console.log('current task: ', task.title, title);

    const handleChanges = e => {
        setNewTitle(e.target.value)
    }

    const handleUpdate = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_TASK', payload: newTitle})
        updateTasks(newTitle, task.id)
        setNewTitle('');
    }

    const handleStatus = e => {
        e.target.classList.toggle('completed')
        dispatch({ type: 'TOGGLE_STATUS'})
        toggleStatus(task.id)
    }

    console.log(Date.parse(due) - Date.now());
    const checkOverDue = (Date.parse(due) - Date.now()) < 0;

    return (
        <div className='task'>
            {!editing
            ?   (
                <h2 > 
                    <span className= {checkOverDue ? 'overdue' : ''} onClick={handleStatus}>{title}</span> {` ${due}`}
                    <i className = 'far fa-edit' onClick={() => dispatch({ type: 'TOGGLE_EDITING' })} />
                </h2>
            )
            :   (
                <div>
                    <input 
                        className='title-input'
                        type='text'
                        value={newTitle}
                        onChange={handleChanges} 
                    />
                    <button onClick={handleUpdate} > Update Task </button>
                </div>
            )
            }
        </div>
    )
}

export default Task