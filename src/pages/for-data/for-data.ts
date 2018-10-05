import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-for-data',
  templateUrl: 'for-data.html',
})
export class ForDataPage {
  numbers: number[];
  addNumber: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numbers = [1, 2];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForDataPage');
  }

  add(num) {
    this.numbers.push(num);
    console.log(num)
  }

}
