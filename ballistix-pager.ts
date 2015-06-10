import {Component, View, bootstrap,For} from 'angular2/angular2';

@Component({
  selector: 'ballistix-pager', // Defines the <my-app></my-app> tag
properties: {
    items: 'items',
    perpage:'perpage'
  }//,
  //injectables:[items]
})

@View({
  template: `
  <div>Pager</div>
  {{items}}
  
  
  <ul>
  <li class="pager" *for="#t of getIt()" (click)="setPage(t)" [class.sel]="t.selected"  > 
  <span  >
  {{t.idx}}
  </span>
  </li>
  </ul>
  
  `, // Defines the inline template for the component
directives:[For]
})

class BallistixPager {
 items:number;
  its:any;
  perpage:number;
  current:number;
  
	constructor(){
    
   this.perpage=10;
  this.current=0;
  
  	console.log(this.its);
	}
  
  setPage(i){
    if (i.idx==this.current) return;
    console.log('set page ',i);
    
    this.current=i.idx;
  }
  getIt(){
    
    this.its=[];
    
    let p=this.items/this.perpage;
    
    for (let i=0; i<p;i++){
      let ob:any={};
      ob.idx=i;
      ob.selected=this.current==i;
      this.its.push(ob);
    }
    
    return this.its;
  }
 
  
}

export default BallistixPager;