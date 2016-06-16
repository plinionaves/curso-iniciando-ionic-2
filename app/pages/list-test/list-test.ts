import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/list-test/list-test.html',
})
export class ListTestPage {

  personagens: Array<string>;

  constructor(public nav: NavController) {

    this.personagens = [
      'Tyrion Lannister',
      'Daenerys Targaryen',
      'Oberyn Martell'
    ];

  }
}
