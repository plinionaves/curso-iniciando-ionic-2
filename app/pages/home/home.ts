import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuTestPage } from '../menu-test/menu-test';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  pushPage() : void {
    this.navCtrl.push(MenuTestPage);
  }

}
