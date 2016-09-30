# curso-iniciando-ionic-2
Repositório do Curso de Ionic 2

# Guia de atualizações do Ionic 2

Este guia tem o intuito de informá-lo(a) sobre as últimas atualizações realizadas no framework Ionic 2 para que você possa acompanhar o curso e implementar os exemplos de acordo com as novas regras.

O guia irá mostrar como era o código quando o curso foi gravado e como é agora, um antes e um depois, para que você faça apenas as alterações que forem necessárias e não obtenha nenhum erro na aplicação.


## 1. Component ```<ion-navbar>```

*Antes*
```html
    <ion-navbar *navbar>
      <button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title>Alert Component</ion-title>
    </ion-navbar>

    <ion-content padding class="alert">
      <p>Seu conteúdo aqui</p>
    </ion-content>
```

*Depois*
```html
  <ion-header>
    <ion-navbar>
      <button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title>Alert Component</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding class="alert">
    <p>Seu conteúdo aqui</p>
  </ion-content>
```


## 2. Component ```<ion-toolbar>```

*Antes*
```html
    <ion-navbar *navbar>
      <ion-title>Toolbar Component</ion-title>
    </ion-navbar>

    <!-- toolbar no topo -->
    <ion-toolbar></ion-toolbar>
    <!-- ou -->
    <ion-toolbar position="top"></ion-toolbar>

    <ion-content padding class="toolbar">
      <p>Seu conteúdo aqui</p>
    </ion-content>

    <!-- toolbar no rodapé [após o conteúdo] -->
    <ion-toolbar position="bottom"></ion-toolbar>
```

*Depois*
```html
  <ion-header>
    <ion-navbar>
      <ion-title>Alert Component</ion-title>
    </ion-navbar>
    <!-- toolbar no topo -->
    <ion-toolbar></ion-toolbar>
  </ion-header>

  <ion-content padding class="toolbar">
    <p>Seu conteúdo aqui</p>
  </ion-content>

  <ion-footer>
    <!-- toolbar no rodapé -->
    <ion-toolbar></ion-toolbar>
  </ion-footer>
```

## 2. Component ```Alert``` para ```AlertController```
*Antes*
```javascript
import {NavController, Alert} from 'ionic-angular';

export class AlertPage {

  constructor(public nav: NavController) {}

  showAlert() {
    let alert = Alert.create({
      title: 'Ionic 2',
      message: 'Meu primeiro alert',
      buttons: ['OK']
    });

    this.nav.present(alert);
  }

}
```

*Depois*
```javascript
import {AlertController} from 'ionic-angular';

export class AlertPage {

  constructor(public alertCtrl: AlertController) {}

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ionic 2',
      message: 'Meu primeiro alert',
      buttons: ['OK']
    });

    alert.present();
  }

}
```

## 2. Component ```Modal``` para ```ModalController```
*Antes*
```javascript
import {NavController, Modal} from 'ionic-angular';
import {ModalLoginPage} from './../modal-login/modal-login';

export class ModalTestPage {
  constructor(public nav: NavController) {}

  openModal() {
    let modal = Modal.create(ModalLoginPage);

    this.nav.present(modal);
  }

}
```

*Depois*
```javascript
import {ModalController} from 'ionic-angular';
import {ModalLoginPage} from './../modal-login/modal-login';

export class ModalTestPage {
  constructor(public modalCtrl: ModalController) {
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalLoginPage);
    modal.present();
  }
}
```
