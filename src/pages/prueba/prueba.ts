import { Component } from '@angular/core';

import { MediaPage } from '../media/media';
import { DetailsPage } from '../details/details';


@Component({
  templateUrl: 'prueba.html'
})
export class PruebaPage {

  mediaRoot = MediaPage;
  detailsRoot = DetailsPage;


  constructor() {}

}
