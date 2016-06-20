import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomeTabPage} from './../home-tab/home-tab';
import {ContatosTabPage} from './../contatos-tab/contatos-tab';

@Component({
  templateUrl: 'build/pages/tab-test/tab-test.html',
})
export class TabTestPage {

  homePage:any = HomeTabPage;
  contatosPage:any = ContatosTabPage;

  constructor(public nav: NavController) {}
}
