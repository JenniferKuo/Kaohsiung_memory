import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the BannerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BannerProvider {
	
  private url: string = "https://kaohsiungmemory.com/json/banner.json";

  constructor(public http: Http) {
    console.log('Hello BannerProvider Provider');
  }

  getBanner(){
  	return this.http.get(this.url)
  	.do(res => console.log(res));
  }

}
