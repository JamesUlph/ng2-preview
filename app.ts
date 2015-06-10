/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

import MyThing from './thing';
import TodoContainer from './todocontainer';
import BallistixFooter from './ballistix-footer';
import BallistixPager from './ballistix-pager';

// Annotation section


@Component({
  selector: 'my-app' // Defines the <my-app></my-app> tag
})
@View({
  template: `<h1 (click)="tummyTime()">Helloeee {{ name }}</h1>
  <input id="new-todo" placeholder="What?" autofocus #newtodo
  (keyup)="enterTodo($event,newtodo)">
  <span>{{newtodo}}</span>
  <my-thing fred="test"></my-thing>
  
  <button type="button" (click)="handleAdd()">Add</button>
  <button (click)="handleClear()" [disabled]="items.length==0">Clear item(s)</button>
   <ballistix-pager [items]="items.length" [perpage]="5"></ballistix-pager>
   <ballistix-pager [items]="items.length" ></ballistix-pager>
  <todo-container [items]="items"></todo-container>
  
 
  <ballistix-footer></ballistix-footer>
 
  `, // Defines the inline template for the component
directives:[MyThing,TodoContainer,BallistixFooter,BallistixPager]
})

class MyAppComponent {
  name: string;
  newtodo:string;
  items:Array<string>;
  
  constructor() {
    this.name = 'Alice';
    this.newtodo='';
    this.items=[];
    this.items.push("test1");
    this.items.push("test2");
    this.items.push("test3");
  }
  
  handleClear(){
    this.items=[];
  }
  handleAdd(){
    this.items.push("xyz");
  }
  enterTodo($event,newtodo){
   
    if ($event.which!=13) return;
    

  console.log(newtodo.value);
  this.newtodo=newtodo.value;
  newtodo.value='';    
    
    
  }
  
  tummyTime(){
    alert('time for tummy time!');
  }
}

bootstrap(MyAppComponent);