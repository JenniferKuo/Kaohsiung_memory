import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
	url: string;
	data: string;
	intro_data: string;
	project: string;
	story: string;

  constructor(public http: Http, public navCtrl: NavController) {
  }
  ionViewDidLoad() {
  	this.loadBanner();
  	this.loadIntro();
  }

  loadBanner() {
  	this.http.get('https://kaohsiungmemory.com/json/banner.json')
  		.map(res => res.json())
  		.subscribe(data => {
  			this.data = data;
  			console.log(this.data);
  		},err => {
  			console.log(err);
  		});
  }

  loadIntro() {
  	this.http.get('https://kaohsiungmemory.com/json/console_setting.json')
  		.map(res => res.json())
  		.subscribe(data => {
  			this.project = data.index.project;
  			this.story = data.index.story;
  			console.log(data);
        document.getElementById("project").innerHTML = this.project;
        document.getElementById("story").innerHTML = this.story;
  		},err => {
  			console.log(err);
  		});
  }

  loadLocalBanner() {
  	this.http.get('assets/data/banner.json')
  		.map(res => res.json())
  		.subscribe(data => {
  			this.data = data;
  			console.log(this.data);
  		},err => {
  			console.log(err);
  		});
  }
}
