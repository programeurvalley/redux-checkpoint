import { combineReducers } from "redux";

import todosReducers  from "./reducer";

const rootReducers = combineReducers({
    todos: todosReducers,
});

export default rootReducers;