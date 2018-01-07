import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapPage } from '../pages/map/map';
import { LinksPage } from '../pages/links/links';
import { IntroPage } from '../pages/intro/intro';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToIntro(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IntroPage);
  }goToMap(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MapPage);
  }goToLinks(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LinksPage);
  }
}
