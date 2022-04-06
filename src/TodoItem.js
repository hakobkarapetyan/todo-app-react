import "./TodoItem.css";

function TodoItem ({todo, onChange, onDelete}) {
    const checkedVal = todo.completed ? true : false;
    
    return (
        <li key={todo.id} className="todoItem">
            <label>
                <input type="checkbox" checked={checkedVal} onChange={(evt) => {
                    onChange({
                        ...todo,
                        completed: evt.target.checked,
                    });
                }}/>
                {todo.title}
            </label>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                onDelete(todo);
            }}>X</a>
        </li>
    )
}

export default TodoItem;