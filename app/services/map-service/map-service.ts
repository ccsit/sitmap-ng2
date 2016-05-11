import { Injectable } from '@angular/core';
import { Map } from 'esri-mods';

@Injectable()
export class MapService {

  map: any = null;

  constructor() {

    this.map = new Map({
      spatialReference: { wkid: 21781 }
    });

  }

}
