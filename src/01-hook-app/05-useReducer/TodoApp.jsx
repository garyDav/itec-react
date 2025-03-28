import { UseForm } from "../hooks/useForm";
import { useTodos } from "../hooks/useTodos";

import { TodoItem } from "./TodoItem";

const initialState = {
  todo: "",
};

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  const { formValues, onInputChange, onReset } = UseForm(initialState);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      todo: formValues.todo,
    };

    console.log(newTodo);
    handleNewTodo(newTodo);
    onReset();
  };

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>

        <div>
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              name="todo"
              placeholder="Añade Compra"
              value={formValues.todo}
              onChange={onInputChange}
            />

            <br />
            <br />

            <button type="submit">Agregar</button>
          </form>
        </div>
      </div>
    </>
  );
};
