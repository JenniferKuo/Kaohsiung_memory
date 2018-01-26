import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-links',
  templateUrl: 'links.html'
})
export class LinksPage {

  constructor(public http: Http, public navCtrl: NavController) {
  }
  
  ionViewDidLoad() {
  	this.loadContent();
  }

  loadContent() {
  	this.http.get('https://kaohsiungmemory.com/json/console_setting.json')
  		.map(res => res.json())
  		.subscribe(data => {
  			this.data = data.links.content;
  			console.log(this.data);
  		},err => {
  			console.log(err);
  		});
  }
}
