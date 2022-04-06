import './App.css';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import {useCallback, useReducer} from 'react';
import {useSelector, useDispatch} from "react-redux";

function App() {
  
  const todoList = useSelector(function(state) {
    return state;
  })

const dispatch = useDispatch();

const onAdd = useCallback((title) => {
	dispatch({
		type: "add",
		payload: {
			title: title,
		}
	})
}, []);

  return (
    <div className="App">
      <TodoHeader add={(onAdd)}/>
      <TodoList todos={todoList} onChange={(changedTodo) => {
        dispatch({
          type: "change",
          payload: {
            todo: changedTodo,
          }
        })
      }} onDelete={(todo) => {
        dispatch({
          type: "delete",
          payload: {
            todo: todo,
          }
        })
      }}/>
      <TodoFooter todos={todoList} clearCompleted={() => {
        dispatch({
          type: "clear-completed",
          payload: {},
        })
      }}/>
    </div>
  );
}

export default App;
