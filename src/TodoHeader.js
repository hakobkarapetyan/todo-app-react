import './TodoHeader.css';
import {useState} from "react";

export default function TodoHeader ({add}) {
    const [title, setTitle] = useState("");

    return (
        <form action="#" className="addTodo" onSubmit={(e) => {
            e.preventDefault();
            if(title !== "") {
                add(title);
                setTitle("");
            }
        }}>
            <input type="text" name="addTodo" value={title} placeholder="Add Todo" onChange={(evt) => {
                setTitle(evt.target.value);
            }}/>
            <button type="submit" className="addBtn">Add</button>
        </form>
    )
};