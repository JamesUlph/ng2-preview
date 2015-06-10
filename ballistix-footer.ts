import {Component, View, bootstrap,For} from 'angular2/angular2';

@Component({
  selector: 'ballistix-footer' // Defines the <my-app></my-app> tag

})

@View({
  template: `
  <div>Footer</div>
  `, // Defines the inline template for the component
directives:[]
})

class BallistixFooter {
	constructor(){
		
	}
}

export default BallistixFooter;