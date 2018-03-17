import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  	constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
  		this.presentLoadingDefault();
  	}

  	presentLoadingDefault() {
		let loading = this.loadingCtrl.create({
		content: '資料載入中...'
		});

		loading.present();

		setTimeout(() => {
		loading.dismiss();
		}, 5000);
	}

  
}
