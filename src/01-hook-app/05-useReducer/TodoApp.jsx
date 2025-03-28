import { UseForm } from "../hooks/useForm";
import { useTodos } from "../hooks/useTodos";

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
    message,  // Añadimos el mensaje
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
            <li key={todo.id}>
              <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                {todo.todo}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>

              {/* Botón para completar o desmarcar */}
              <button onClick={() => handleToggleTodo(todo.id)}>
                {todo.done ? "Desmarcar" : "Completar"}
              </button>

              <br />
              <br />
            </li>
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

        {/* Mostrar el mensaje en la página */}
        {message && <p>{message}</p>} {/* Aquí mostramos el mensaje cuando se actualiza */}
      </div>
    </>
  );
};

