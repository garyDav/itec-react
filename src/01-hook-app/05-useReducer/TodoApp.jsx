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
          <li>ListTodo</li>
        </ul>

        <div>
          <h4>Agregar TODO</h4>
          <hr />

          <button type="">Add Todo</button>
        </div>
      </div>
    </>
  );
};
