import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the CardTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/card-test/card-test.html',
})
export class CardTestPage {
  constructor(public nav: NavController, public params: NavParams) {

    console.log(params.get('mensagem'));

  }

  voltar() {
    this.nav.pop();
  }

}
