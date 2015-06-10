/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap,For} from 'angular2/angular2';

import TodoItem from './todoitem';

@Component({
  selector: 'todo-container', // Defines the <my-app></my-app> tag
  properties: {
    'items': 'items'
  }
})
@View({
  template: `<h1 (click)="tummyTime()">Item(s) list</h1>
  
  <span>{{newtodo}}</span>
  <span>{{fred}}</span>
  {{items.length}} item(s)
  <button type="button" (click)="handleClick($event)" [disabled]="items.length==0">Clear</button>
  
  <button type="button" (click)="handleAdd()">Add lots</button>
  
  <select (change)="handleClick($event)">
  <option *for="#todo of items">{{todo}}</option>
  </select>
  
  <ul>
  <li *for="#todo of items">
  <todo-item [item]="todo"></todo-item>
  {{todo}}
  </li>
</ul>  
  `, // Defines the inline template for the component
  directives:[For,TodoItem]
})

class TodoContainer {
  name: string;
  newtodo:string;
  items:Array<string>;
  
  constructor() {
    this.name = 'Alice';
    this.newtodo='';
   
  }
  
  onMount(){
    console.log('mount');
  }
  
  enterTodo($event,newtodo){
   
    if ($event.which!=13) return;
    

  console.log(newtodo.value);
  this.newtodo=newtodo.value;
  newtodo.value='';    
    
    
  }
  
  tummyTime(){
     
  }
  
  handleClick($event){
    console.log(this.items);
    console.log($event.target.value);
  }
  
  handleAdd(){
    
        
    for (let i=0;i<10; i++){
      this.items.push('xxx'+i);
    }
    
    
  }
}

export default TodoContainer;