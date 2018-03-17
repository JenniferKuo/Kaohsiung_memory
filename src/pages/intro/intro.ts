import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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
  wrapperHeight = '15vh';
  slidesHeight = '55vh';

  constructor(public loadingCtrl: LoadingController, public http: Http, public navCtrl: NavController) {
  }
  ionViewDidLoad() {
  	this.loadData();
  }

  loadData() {
    let loading = this.loadingCtrl.create({
      content: '資料載入中'
    });
    loading.present();
  	this.http.get('https://app.kaohsiungmemory.com/json/banner.json')
  		.map(res => res.json())
  		.subscribe(data => {
  			this.data = data;
  			console.log(this.data);
  		},err => {
  			console.log(err);
  		});

    this.http.get('https://app.kaohsiungmemory.com/json/console_setting.json')
      .map(res => res.json())
      .subscribe(data => {
        this.project = data.index.project;
        this.story = data.index.story;
        console.log(data);
        document.getElementById("project").innerHTML = this.project;
        document.getElementById("story").innerHTML = this.story;
        loading.dismiss();
      },err => {
        console.log(err);
        loading.dismiss();
      });
  }

  changeHeight(){
    // 已經展開
    if(this.wrapperHeight == 'auto'){
      this.wrapperHeight = '15vh';
      this.slidesHeight = '55vh';
    }// 還沒展開
    else{
      this.wrapperHeight = 'auto';
      this.slidesHeight = 'auto';
    }
    console.log("height change to ", this.wrapperHeight);
  }
}
