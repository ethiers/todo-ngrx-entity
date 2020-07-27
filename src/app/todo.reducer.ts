import {TodoActionTypes, TodoActions} from './actions/todo.actions';
import {ActionReducerMap} from '@ngrx/store';
import {Todo} from './models/model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface State extends EntityState<Todo> {
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
export const initialState: State = todoAdapter.getInitialState();

export function todoReducer(
  state: State = initialState,
  action: TodoActions
) {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return todoAdapter.addOne(action.payload.todo, state);
    case TodoActionTypes.DELETE_TODO:
      return todoAdapter.removeOne(action.payload.id, state);
    case  TodoActionTypes.UPDATE_TODO:
      return todoAdapter.updateOne(
        { id: action.payload.id, changes: {value: action.payload.newValue } },
        state
      );
    case TodoActionTypes.TOGGLE_DONE:
      return todoAdapter.updateOne(
        { id: action.payload.id, changes: { done: action.payload.done } },
        state
      );

    default:
      return state;
  }
}
