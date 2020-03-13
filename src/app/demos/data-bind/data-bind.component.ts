import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styles: []
})
export class DataBindComponent  {

  public contadorClique:number=0;
  public urlImagem:String = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome:String="";
  adicionarclique(){
    this.contadorClique++;
  }
  
  zerarContador()
  {
    this.contadorClique = 0;
  }

  keyUp(event: any)
  {
    this.nome = event.target.value;
  }
}
