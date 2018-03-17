import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-links',
  templateUrl: 'links.html'
})
export class LinksPage {
  data: string;
  
  constructor(public loadingCtrl: LoadingController, public http: Http, public navCtrl: NavController) {
  }
  
  ionViewDidLoad() {
  	this.loadContent();
  }

  loadContent() {
    let loading = this.loadingCtrl.create({
      content: '資料載入中'
    });
    loading.present();
  	this.http.get('https://kaohsiungmemory.com/json/console_setting.json')
  		.map(res => res.json())
  		.subscribe(data => {
  			this.data = data.links.content;
  			console.log(this.data);
        loading.dismiss();
  		},err => {
  			console.log(err);
        loading.dismiss();
  		});
  }
}
