export const initialState = (task) => {
    return {
        editing: false,
        title: task.title,
        completed: task.completed
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
                title: action.payload,
                completed: state.completed
            }
        case 'TOGGLE_STATUS' :
            return {
                ...state,
                completed: !state.completed
            }
        default :
            return state;
    }
}
