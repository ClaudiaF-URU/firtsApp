import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-if',
  templateUrl: 'if.html',
})
export class IfPage {
  flag: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IfPage');
  }

  changeValue() {
    this.flag = !this.flag;
  }

  back() {
    this.navCtrl.pop();
  }

}
