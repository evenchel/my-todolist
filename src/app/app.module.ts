import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodolistComponent } from './todolist.component';

import { TodoListService } from './todolist.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TodolistComponent ],
  providers:    [ TodoListService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
