import { useState } from "react";
import { useTodoContext } from "../Hooks/useTodoContext";
import closeIcon from "../Assets/close.png";
export const Todo = ({todo}) => {

  const [isDone, setIsDone] = useState(todo.isDone);

  const {dispatch} = useTodoContext();

  const deleteTodo = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/todos/${todo._id}`, {
      method: 'DELETE',
    });

    const json = await response.json();

    if(response.ok){
      dispatch({type: 'DELETE_TODO', payload: json});
    }
  }

  const updateTodo = async (e) => {
    e.preventDefault();

    setIsDone(prev => !prev);

    const response = await fetch(`/api/todos/${todo._id}`, {
      method: 'PATCH',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({isDone: isDone})
    })

    const json = await response.json();

    if(response.ok){
      dispatch({type: 'UPDATE_TODO', payload: json});
      console.log('updated')
    }
  }

  return (
    <div className="todo">
      <p onClick={updateTodo} className={todo.isDone ? "done" : ""}>{todo.todo}</p>
      <div onClick={deleteTodo}>
        <img src={closeIcon} alt="x" />
      </div>
    </div>
  );
};
