import { useEffect } from "react";
import { useTodoContext } from "./Hooks/useTodoContext";
import { TodoContainer } from "./Components/TodoContainer";
import './App.css';

function App() {
  const {todo, dispatch} = useTodoContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('/api/todos');
      const json =  await response.json();

      if(response.ok){
        dispatch({type: 'SET_TODOS', payload: json});
      }
    };

    fetchTodos();
  }, []);

    return (
    <div className="App">
      {todo && <TodoContainer todo={todo} />}
    </div>
  );
};

export default App;
