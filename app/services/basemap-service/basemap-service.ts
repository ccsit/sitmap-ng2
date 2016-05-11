import {Injectable, Output} from "@angular/core";
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BasemapService {

  public basemaps;

  constructor(private http:Http) {
    this.basemaps = this.http.get('api/basemaps.json')
      .map(res => res.json());
  }

}
