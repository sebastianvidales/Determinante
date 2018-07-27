import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { DetzPage } from "../detz/detz";
@Component({
  selector: 'page-dety',
  templateUrl: 'dety.html',
})
export class DetyPage {
public dety;
public cramer;
public detsys;
public resultado;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cramer = JSON.parse(localStorage.getItem("cramer"));
    this.dety = localStorage.getItem("dety");
    this.detsys = localStorage.getItem("detsystem");
    console.log(parseFloat(this.dety)/(parseFloat(this.detsys)));
    this.resultado = (parseFloat(this.dety)/(parseFloat(this.detsys)))-10;

  }
  irpaginadetx3(){
    this.navCtrl.push(DetzPage);
  }

}
