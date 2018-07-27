import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { operacion } from "../operacion";
import { DetsystemPage } from "../detsystem/detsystem";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public cramer;
  constructor(public navCtrl: NavController) {
    this.cramer = new operacion(
      0.3, 0.5, 0.1,
    0.52, 1, 0.3,
    1, 1.9, 0.5,
    -0.01, 0.67, -0.44);
    localStorage.setItem("cramer", JSON.stringify(this.cramer));

        localStorage.setItem("detsystem", this.cramer.Determinante());
        localStorage.setItem("detx", this.cramer.DeterminanteX());
        localStorage.setItem("dety", this.cramer.DeterminanteY());
        localStorage.setItem("detz", this.cramer.DeterminanteZ());
        localStorage.setItem("a1", this.cramer.MatrizA1());
        localStorage.setItem("a2", this.cramer.MatrizA2());
        localStorage.setItem("a3", this.cramer.MatrizA3());


  }
irpagina_detsystem(){
  this.navCtrl.push(DetsystemPage);
}
}
