import * as types from './actionTypes';

export const completeTask = (task) => ({
    type:types.COMPLETE_TASK,
    payload:task,
})

export const AddTask = (task) => ({
    type:types.ADD_TASK,
    payload:task,
})

export const removeTask = (task) => ({
    type:types.REMOVE_TASK,
    payload:task,
})

export const updateTodo = (task) => ({
    type:types.UPDATE_TASK,
    payload:task,
})