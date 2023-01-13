import * as types from './actionTypes';
import {v4 as uuidv4} from "uuid";

const initialState = {
    todos : [{ id : 1 , description : "Start Coding" , isDone : false }],
};

const todosReducers =  (state = initialState , action) => {
    switch(action.type) {
        case types.ADD_TASK:
            const newTodo ={
                id : uuidv4(),
                description : action.payload,
                isDone: false,
            };

            const addedTodos = [...state.todos, newTodo];
            return{
                ...state,
                todos: addedTodos,
            }
        case types.REMOVE_TASK:
            const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
            return {
                ...state,
                todos: filterTodo,
            };
        case types.UPDATE_TASK:
            const updatedTodos = state.todos.map((todo) => {
                if(todo.id === action.payload.id){
                    return {...todo , description : action.payload.updatedTask };
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos,
            }
        case types.COMPLETE_TASK:
            const toggleTodo = state.todos.map((t) =>
            t.id === action.payload.id
            ? { ...action.payload , isDone: !action.payload.completed}
            : t );
            return {
                ...state,
                todos : toggleTodo,
            };
        default:
            return state;
    }   
}

export default todosReducers;