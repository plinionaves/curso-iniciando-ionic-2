import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lowercase } from './../../pipes/lowercase';

@Component({
  templateUrl: 'build/pages/menu-test/menu-test.html',
  pipes: [Lowercase]
})
export class MenuTestPage {

  constructor(private navCtrl: NavController) {

  }

}
