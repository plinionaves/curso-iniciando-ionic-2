import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Lowercase} from './../../pipes/lowercase';

/*
  Generated class for the TestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/test/test.html',
  pipes: [Lowercase]
})
export class TestPage {
  constructor(public nav: NavController) {}
}
