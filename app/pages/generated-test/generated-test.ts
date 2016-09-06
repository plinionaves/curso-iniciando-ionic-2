import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnectionService } from './../../providers/connection-service/connection-service';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html'
})
export class GeneratedTestPage {

  constructor(private navCtrl: NavController, private connectionService: ConnectionService) {

  }


  buscarCep() : void {
    this.connectionService.getCep('37950000')
      .then((res) => {
        let json = res.json();
        console.log(json.localidade);
      }).catch((err) => {
        console.log(err);
      });
  }

}
