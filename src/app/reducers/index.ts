import {ActionReducerMap} from "@ngrx/store";
import { todoReducer } from "./../todo.reducer";
//import {Todo} from './../models/model';

interface AppState {
  appReducer: any;
}

export const reducers: ActionReducerMap<AppState> = {
  appReducer: todoReducer
}

