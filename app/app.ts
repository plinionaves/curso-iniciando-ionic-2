import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {TestPage} from './pages/test/test';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import {CardTestPage} from './pages/card-test/card-test';
import {IconTestPage} from './pages/icon-test/icon-test';
import {InputTestPage} from './pages/input-test/input-test';
import {ListTestPage} from './pages/list-test/list-test';
import {GridTestPage} from './pages/grid-test/grid-test';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  home: any = HomePage;
  test: any = TestPage;
  alert: any = AlertPage;
  button: any = ButtonTestPage;
  card: any = CardTestPage;
  icon: any = IconTestPage;
  input: any = InputTestPage;
  list: any = ListTestPage;
  grid: any = GridTestPage;

  rootPage: any = this.home;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }

}

ionicBootstrap(MyApp);
