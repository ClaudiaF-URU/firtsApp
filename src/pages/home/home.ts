import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElementsPage } from '../elements/elements';
import { DataBindingPage } from '../data-binding/data-binding';
import { IfPage } from '../if/if';
import { ForPage } from '../for/for';
import { ForDataPage } from '../for-data/for-data';
import { ComponentPage } from '../component/component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  }

  goToElements() {
    this.navCtrl.push(ElementsPage);
  }

  goToDataBinding(){
    this.navCtrl.push(DataBindingPage);
  }

  goToIf(){
    this.navCtrl.push(IfPage);
  }

  goToFor(){
    this.navCtrl.push(ForPage);
  }

  goToBindingFor(){
    this.navCtrl.push(ForDataPage);
  }
  
  goToComponents(){
    this.navCtrl.push(ComponentPage);
  }
}
