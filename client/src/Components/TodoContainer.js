import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
import peroroAronaIcon from "../Assets/peroro-arona.png";
export const TodoContainer = ({todo}) => {
  return (
    <div className="todo-container">
      <div className="image">
        <img src={peroroAronaIcon} alt="peroro-arona" />
        <div className="bubble-container">
          {todo && <p>{todo.length}</p>}
        </div>

      </div>

      <div className="body">
        <AddTodo />
        <ul>
          {todo && todo.map((todo) => {
            return <Todo key={todo._id} todo={todo} />
          })}
        </ul>

      </div>

    </div>
  );
};
