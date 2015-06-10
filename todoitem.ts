/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap,For} from 'angular2/angular2';



@Component({
  selector: 'todo-item', // Defines the <my-app></my-app> tag
  properties: {
    'item': 'item'
  }
})
@View({
  template: `
 
  <span>{{item}}</span>
 
   
  
  `, // Defines the inline template for the component
  directives:[For]
})

class TodoItem {
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
  
  handleClick(){
    console.log(this.items);
    
  }
}

export default TodoItem;