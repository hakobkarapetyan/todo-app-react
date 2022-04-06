import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList ({todos, onChange, onDelete}) {

    return (
        <div className="todoList">
            <ul>
                {
                    todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} onChange={(todo) => onChange(todo)} onDelete={(todo) => onDelete(todo)}/>;
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;