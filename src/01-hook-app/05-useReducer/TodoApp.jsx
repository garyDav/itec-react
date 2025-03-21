import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

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
              <span> {todo.todo} </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
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
      </div>
    </>
  );
};