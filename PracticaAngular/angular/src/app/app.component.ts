import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  getOperation:string = '';
  getResult:string = '0';
  
  clickC(){
    this.getResult = '0';
  };

  click(numero: string){
    if(this.getResult == '0'){
      this.getResult = numero;
    }
    else{
      this.getResult += numero;
    }
  };

  clickResult(){
    let operacion = this.getResult;
    this.getOperation = operacion;

    this.getResult = eval(operacion);
  }
}

