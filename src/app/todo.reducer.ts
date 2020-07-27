import {TodoActionTypes, TodoActions} from './actions/todo.actions';
import {ActionReducerMap} from '@ngrx/store';
import {Todo} from './models/model';

const initialTodoState: Todo = {
  id : '',
  done: false,
  value: null
};

export function todoReducer(state = [], action: TodoActions) {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [action.payload.todo, ...state];
    case TodoActionTypes.DELETE_TODO:
      return state.filter(item => item.id !== action.payload.id);
    case  TodoActionTypes.UPDATE_TODO:
      return state.map(item => {
        return item.id === action.payload.id
          ? Object.assign({}, item, { value: action.payload.newValue })
          : item;
      });
    case TodoActionTypes.TOGGLE_DONE:
      return state.map( item => {
        return item.id === action.payload.id
          ? Object.assign({}, item, { value: action.payload.done})
          : item;
      });

    default:
      return state;
  }
}
