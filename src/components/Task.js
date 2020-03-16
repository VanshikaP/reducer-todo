import React , { useState, useReducer } from 'react'

import { taskReducer, initialState } from '../reducers/taskReducer'

const Task = ({task, updateTasks}) => {

    const [{ editing, title}, dispatch] = useReducer(taskReducer, initialState(task.title))
    const [newTitle, setNewTitle] = useState('')

    const handleChanges = e => {
        setNewTitle(e.target.value)
    }

    const handleUpdate = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_TASK', payload: newTitle})
        updateTasks(newTitle, task.id)

    }

    return (
        <div className='task' key={task.id}>
            {!editing
            ?   (
                <h2> 
                    {title} {' '}
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