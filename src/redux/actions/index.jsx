export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';

export const addToDo=(payload)=>{
    return{
        type: ADD_TODO,
        payload
    }
}

export const removeToDo=(payload)=>{
    return{
        type: REMOVE_TODO,
        payload
    }
}

export const changeToDo=(payload)=>{
    return{
        type: UPDATE_TODO,
        payload
    }
}

export const handleCheckbox=(payload)=>{
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}