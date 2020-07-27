import * as todoActions from './actions/todo.actions'
import {ActionReducerMap} from "@ngrx/store";
import {Todo} from "./models/model";

const initialTodoState: Todo = {
  id : "",
  done: false,
  value: null
};

export function todoReducer(state = [], action: todoActions.TodoActions) {
  switch (action.type) {
    case todoActions.TodoActionTypes.ADD_TODO:
      return [action.payload.todo, ...state];
    case todoActions.TodoActionTypes.DELETE_TODO:
      return state.filter(item => item.id !== action.payload.id);
    case  todoActions.TodoActionTypes.UPDATE_TODO:
      return state.map(item => {
        return item.id === action.payload.id
          ? Object.assign({}, item, { value: action.payload.newValue })
          : item;
      });
    case todoActions.TodoActionTypes.TOGGLE_DONE:
      return state.map( item => {
        return item.id === action.payload.id
          ? Object.assign({}, item, { value: action.payload.done})
          : item;
      });

    default:
      return state;
  }
}
