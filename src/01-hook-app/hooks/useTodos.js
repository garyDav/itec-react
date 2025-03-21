import { useReducer, useEffect } from "react";
import { todoReducer } from "../05-useReducer/todoReducer";

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [
    {
      id: 1,
      todo: "Comprar Tomate",
      done: false,
    },
  ]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,

    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,

    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
