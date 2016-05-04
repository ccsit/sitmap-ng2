import {Component} from "@angular/core";

@Component({
    selector: 'map',
    template: '<div id="map">Bella di padella</div>'
})
export class MapComponent {

  constructor() {
    console.log("MapComponent");
  }

}
