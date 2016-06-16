import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/input-test/input-test.html',
})
export class InputTestPage {

  login: string;
  senha: string;

  constructor(public nav: NavController) {}

  entrar() {
    let texto = ('Login: ' + this.login + ', Senha: ' + this.senha);
    let alert = Alert.create({
      title: 'Entrando...',
      message: texto
    });
    this.nav.present(alert);
  }

}
