import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  user:string;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {

  }

  showAlert() : void   {
    let alert = this.alertCtrl.create({
      title: 'Ionic 2',
      subTitle: 'App criado com Ionic 2',
      message: 'Curso iniciando com Ionic 2',
      inputs: [
        {
          name: 'login',
          placeholder: 'Insira seu login'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
            this.user = data.login;
            console.log('Clicou no ok');
          }
        }
      ]
    });

    alert.present();
  }

  showInputs() : void   {
    let alert = this.alertCtrl.create({
      title: 'Ionic 2',
      message: 'Curso iniciando com Ionic 2',
      enableBackdropDismiss: true,
      inputs: [
        {
          type: 'checkbox',
          value: 'blue',
          label: 'Blue'
        },
        {
          type: 'checkbox',
          value: 'red',
          label: 'Red',
          checked: true
        },
        {
          type: 'checkbox',
          value: 'white',
          label: 'White'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelou');
            //return false;
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    alert.setSubTitle('App criado com Ionic 2');

    alert.present();
  }

}
