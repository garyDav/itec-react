console.log("Introducción a UseReducer");

/*
 * 1. Es una función común y corriente
 * 2. Debe de ser una función pura
 * 3. Debe de retornar un nuevo estado
 * 4. Usualmente sólo recibe dos argumentos
 *   * El valor inicial (initalState) y la acción a ejecutar
 *
 * 2 -> 1. No debe de tener efectos secundarios
 *      2. No debe de realizar tareas asíncronas
 *      3. Debe de retornar siempre un estado nuevo
 *      4. No utilizaremos localStorage, ni sessionStorage, ni nada por el estilo
 *      5. No debe de requerir más que una acción que pueda tener un argumento
 * */

const initialState = [
  {
    id: 1,
    todo: "Comprar Tomate",
    done: false,
  },
];

// action no es estrictamente necesario
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    // El estado no debe ser directamente mutado (cambiar)
    // return state.push(action.payload); // NO MUTAR
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

console.log(todos);

const newTodo = {
  id: 2,
  todo: "Comprar Lechuga",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
