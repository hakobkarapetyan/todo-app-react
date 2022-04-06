import {createStore} from "redux";

const store = createStore (function (state, action) {
    if(action.type === "add") {
        return [
            ...state,
            {
                id: Math.random(),
                title: action.payload.title,
                completed: false,
            }
        ];
    }else if (action.type === "change") {
        let changedTodo = action.payload.todo;
        return state.map((todo) => {
            if(todo.id === changedTodo.id) {
                return changedTodo;
            }
            return todo;
        })
    }else if (action.type === "delete") {
        return state.filter((todo) => {
            return todo.id !== action.payload.todo.id;
        })
    }else if (action.type === "clear-completed") {
        return state.filter(todo => !todo.completed);
    }

    return state;
}, []
);

export default store;