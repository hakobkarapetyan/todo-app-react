import "./TodoFooter.css";

function TodoFooter ({todos, clearCompleted}) {

    let completedCount = todos.filter(todo => todo.completed).length;
    
    return (
        <div className="footer">
            <p className="copletedCount">{completedCount}/{todos.length} Completed</p>
            <button className="clearCompleted" onClick={() => clearCompleted()}>Clear Completed</button>
        </div> 
    )
}

export default TodoFooter;