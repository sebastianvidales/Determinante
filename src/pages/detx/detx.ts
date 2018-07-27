import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetyPage } from "../dety/dety";

@Component({
  selector: 'page-detx',
  templateUrl: 'detx.html',
})
export class DetxPage {
public cramer;
public detsys;
public detx;
public resultado;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detsys = localStorage.getItem("detsystem");
    console.log(typeof this.detsys);

    this.detx = localStorage.getItem("detx");
    console.log(parseFloat(this.detx)/(parseFloat(this.detsys)));
    this.resultado = parseFloat(this.detx)/(parseFloat(this.detsys));
    this.cramer = JSON.parse(localStorage.getItem("cramer"));
  }
  irpaginadetx2(){
    this.navCtrl.push(DetyPage);
  }
}
