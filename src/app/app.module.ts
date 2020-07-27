import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';
// import { todoReducer } from './todo.reducer';
import {reducers} from './reducers';
import {TodoModule} from './todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
