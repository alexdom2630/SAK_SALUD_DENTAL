import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsvidPage } from '../detailsvid/detailsvid';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
	private _dataVi: any;
  private _detailsvid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this._detailsvid = DetailsvidPage;
    this._dataVi =[
  		{ title: "La importancia de la limpieza dental", 		 video: "1.mp4", poster: "blanqueamiento.png",    descripcion: "Ve el procediemiento de esta técnica." },
  		{ title: "¿Qué es la gingivitis?",         			         video: "2.mp4",     poster: "gingivitis.png",    				   descripcion: "Descubre que es la Gingivitis." },
  		{ title: "¿Conoces como lavarte los dientes correctamente?", video: "3.mp4",  poster: "lavar.png",    				  descripcion: "Aprende a lavarte los dientes." },
  		{ title: "El Raton de los Dientes",         				 video: "raton_dientes.mp4",  poster: "ratoncito.png",    				  descripcion: "Vives la historia del ratón de los dientes." },
  		{ title: "¿Qué vive dentro de nuestra boca?",         		 video: "vive_boca.mp4",      poster: "vive_boca.png",    descripcion: "Acompañanos y descubre que vive dentro de nuestra boca." }
        
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  loadDetails( currentData ) {
        this.navCtrl.push( this._detailsvid , { details: currentData } );
    }

}
