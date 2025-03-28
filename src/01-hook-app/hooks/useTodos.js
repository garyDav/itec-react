import { useReducer, useEffect, useState } from "react";
import { todoReducer } from "../05-useReducer/todoReducer";

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [
    {
      id: 1,
      todo: "Comprar Tomate",
      done: false,
    },
  ]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
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

    const updatedTodo = todos.find((todo) => todo.id === id);
    if (updatedTodo) {
      const newMessage = `El TODO "${updatedTodo.todo}" ahora está ${updatedTodo.done ? "pendiente" : "completado"}`;
      setMessage(newMessage);
    }
  };

  const toggleFirstTodo = () => {
    if (todos.length > 0) {
      handleToggleTodo(todos[0].id);
    }
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    toggleFirstTodo,
    message,
  };
};
