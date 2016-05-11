import {Component, EventEmitter} from '@angular/core';
import {BasemapService} from './../../services/basemap-service/basemap-service'

@Component({
  selector: 'basemap-switcher',
  providers: [BasemapService],
  template: `    
    <select class="form-control" (change)="onChange($event, $event.target.value)">
      <option *ngFor="let basemap of basemaps" [value]="basemap.id" value="{{basemap.id}}">{{basemap.name}}</option>
    </select>
  `
})
export class BasemapSwitcher {

  public basemaps;
  
  constructor(private basemapService:BasemapService) {

    this.basemapService
      .basemaps
      .subscribe(
        data => { this.basemaps = data },
        err => console.log(err)
      );

  }

  onChange(event, id) {
    console.log(id);
  }

}
