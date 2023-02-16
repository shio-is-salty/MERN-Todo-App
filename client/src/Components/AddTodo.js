import { useState } from "react";
import { useTodoContext } from "../Hooks/useTodoContext";
import addIcon from "../Assets/add.png"
export const AddTodo = () => {

  const { dispatch } = useTodoContext();
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    if(!todo){
      return
    }

    e.preventDefault();

    const response = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({todo: todo, isDone: false}),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const json = await response.json();


    if(response.ok){
      dispatch({type: 'CREATE_TODO', payload:json});
      setTodo('');
      console.log(`New todo added ${json}`);

    }
  }
  function enterKeyPress(e){
    if(e.key === 'Enter'){
      handleSubmit(e);
    };
  };


  return (
    <div className="add-todo-container">
      <input onKeyPress={(e)=>enterKeyPress(e)} onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="Add new item..." />
      <div className="add-container">
        <img onClick={handleSubmit} src={addIcon} alt="+" />
      </div>

    </div>

  );
};
