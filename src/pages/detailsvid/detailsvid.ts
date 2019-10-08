import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detailsvid',
  templateUrl: 'detailsvid.html',
})
export class DetailsvidPage {
	    private _currentDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	        this._currentDetails = this.navParams.data.details;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsvidPage');
  }

}
