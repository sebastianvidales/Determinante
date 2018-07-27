import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detz',
  templateUrl: 'detz.html',
})
export class DetzPage {
  public cramer;
  public detz;
  public detsys;
  public resultado;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.cramer = JSON.parse(localStorage.getItem("cramer"));
        this.detz = localStorage.getItem("detz");
        this.detsys = localStorage.getItem("detsystem");
        console.log(parseFloat(this.detz)/(parseFloat(this.detsys)));
        this.resultado = (parseFloat(this.detz)/(parseFloat(this.detsys)));
  }

}
