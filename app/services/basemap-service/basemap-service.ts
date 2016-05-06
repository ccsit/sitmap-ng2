import {Injectable, Output} from "@angular/core";
import {Http, Response} from '@angular/http';

@Injectable()
export class BasemapService {

  @Output()
  public basemaps;

  constructor(private http:Http) {
    this.basemaps = this.http
      .get('api/basemaps.json')
      .map(res => res.json());
  }

}
