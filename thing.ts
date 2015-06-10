/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-thing', // Defines the <my-app></my-app> tag
  properties: {
    'fred': 'fred'
  }
})
@View({
  template: `<h1 (click)="tummyTime()">{{fred}} {{ name }}</h1>
  <input id="new-todo" placeholder="What?" autofocus #newtodo
  (keyup)="enterTodo($event,newtodo)">
  <span>{{newtodo}}</span>
  <span>{{fred}}</span>
  ` // Defines the inline template for the component
})

class MyThing {
  name: string;
  newtodo:string;
  fred:string;
  
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
     alert(this.fred);
  }
}

export default MyThing;