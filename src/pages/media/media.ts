import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsmediaPage } from '../detailsmedia/detailsmedia';

@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {
	    private _dataCards: any;
      private _detailsmedia: any;

  	  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this._detailsmedia = DetailsmediaPage;

      this._dataCards = [
  			{ title: "Implantes Dentales", 					  image: "1.png", descripcion: "No importa tu edad siempre es posible arreglar tu dentadura, haz tu diagnóstico con nosotros."},
  			{ title: "Diagnósticos Ortodentales", image: "2.png", descripcion: "Ofrecemos la solución más viable a tu problema y nos ajustamos a tu presupuesto."},
  			{ title: "Especialistas en la revisión de niños", 		  image: "3.png", descripcion: "La mayoria de enfermedades dentales ocurren por la nula revisión dental no dejes que eso ocurra con tus seres más queridos."},
  			{ title: "Realiza tu cita", 					  image: "AdobeStock_4.png", descripcion: "Da click a la imagen y agenda tu cita."},
  			{ title: "Extracción de muelas de juicio",        image: "4.png", descripcion: "No tengas miedo en SAK SALUD DENTAL contamos con la mejor tecnología para que no sientas dolor en tus tratamientos."},
  		];
  	}

  	ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  	}

    loadDetails( currentInfo ) {
      this.navCtrl.push( this._detailsmedia, { details: currentInfo } );
    }

}
