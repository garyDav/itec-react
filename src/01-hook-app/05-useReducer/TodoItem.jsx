import propTypes from "prop-types";

export const TodoItem = ({ todo = {}, handleDeleteTodo }) => {
  return (
    <>
      <li>
        <span> {todo.todo} </span>
        <button onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
        <br />
        <br />
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todo: propTypes.object,
  handleDeleteTodo: propTypes.func,
};
