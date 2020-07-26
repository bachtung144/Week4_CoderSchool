import {ADD_TODO, TOGGLE_TODO, EDIT_TODO} from '../actions/todoAction';

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Google How to build todo app',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false,
    },
    {
      text: 'Read results from Google',
      completed: false,
    },
    {
      text: 'Google How to build todo app using React Native',
      completed: true,
    },
  ],
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };

    case EDIT_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              text: action.item.text,
            });
          }
          return todo;
        }),
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      });

    default:
      return state;
  }
};
