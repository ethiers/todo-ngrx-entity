import { Action } from '@ngrx/store';
import {Todo} from '../models/model';

export enum TodoActionTypes {
  ADD_TODO  = 'ADD_TODO',
  DELETE_TODO  = 'DELETE_TODO',
  UPDATE_TODO  = 'UPDATE_TODO',
  TOGGLE_DONE  = 'TOGGLE_DONE',
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: {todo: Todo}) {}
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;
  constructor(public payload: { id: string }) { }
}

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO;
  constructor(public payload: { id: string, newValue: string }) { }
}

export class ToggleDone implements Action {
  readonly type = TodoActionTypes.TOGGLE_DONE;
  constructor(public payload: {id: string; done: boolean}) {
  }
}

export type TodoActions = AddTodo | DeleteTodo | UpdateTodo | ToggleDone;

