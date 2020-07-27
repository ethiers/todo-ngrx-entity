import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Todo} from "./models/model";
import {UUID} from 'angular2-uuid'
import {AddTodo, DeleteTodo, ToggleDone, UpdateTodo} from "./actions/todo.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-ngrx-entity';

  public todos$: any;
  todo: string;
  editing = false;
  idToEdit: string | null;

  constructor(private store: Store<any>) {
  }

  generateUUID() {
    return UUID.UUID();
  }

  ngOnInit(): void {
    this.todos$ = this.store.select('appReducer');
  }

  addTodo(value){
    const todo: Todo = {
      value,
      done: false,
      id: this.generateUUID()
    }
    this.store.dispatch(new AddTodo({ todo }));
  }

  deleteTodo(id) {
    this.store.dispatch(new DeleteTodo({id}));
  }

  updateTodo(updatedTodo){
    this.store.dispatch(new UpdateTodo({
      id: this.idToEdit,
      newValue: updatedTodo
    }));
  }

  toggleDone(todo) {
    this.store.dispatch(new ToggleDone({
      id: todo.id,
      done: !todo.done
    }));
  }

  editTodo(todo) {
    this.editing = true;
    this.todo = todo.value;
    this.idToEdit = todo.id;
  }

  cancelEdit() {
    this.editing = false;
    this.todo = '';
    this.idToEdit = null;
  }

}
