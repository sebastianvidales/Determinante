import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetxPage } from "../detx/detx";

@Component({
  selector: 'page-detsystem',
  templateUrl: 'detsystem.html',
})
export class DetsystemPage {
  public detsys;
  public cramer;
  public a1;
  public a2;
  public a3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.detsys = localStorage.getItem("detsystem");
    this.a1 = localStorage.getItem("a1");
    this.a2 = localStorage.getItem("a2");
    this.a3 = localStorage.getItem("a3");
    this.cramer = JSON.parse(localStorage.getItem("cramer"));
  }
  irpaginadetx(){
    this.navCtrl.push(DetxPage);
  }
}
