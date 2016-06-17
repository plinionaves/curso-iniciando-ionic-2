import {Component} from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {

  user:any = {};

  constructor(public nav: NavController, public view: ViewController, public params: NavParams) {
    console.log('dados recebidos', params.get('action'));
  }

  logar() {
    this.view.dismiss(this.user);
  }

  close() {
    this.view.dismiss();
  }

}
