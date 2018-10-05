import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-for',
  templateUrl: 'for.html',
})
export class ForPage {
  test: number[];
  testObj;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.test = [1, 2, 5, 3];
    this.testObj = [{
      name: 'Claudia',
      lastname: 'Fernandez'
    }, { name: "Pedro", lastname: "Perez" }, { name: "Karla", lastname: "Pineda" }, { name: "Jose", lastname: "Oropeza" }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForPage');
    console.log(this.test, this.testObj)
  }

}
