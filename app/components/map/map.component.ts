import { Component, Input, Output, OnInit, ElementRef, EventEmitter } from "@angular/core";
import { Map, MapView, TileLayer, WebTileLayer, Extent } from 'esri-mods';
import { MapService } from '../../services/map-service/map-service';

@Component({
  selector: 'map',
  template: `<div id="viewDiv"></div>`,
  providers: [ MapService ]
})
export class MapComponent {

  view:MapView;

  @Output()
  viewCreated = new EventEmitter();

  constructor(
    private elRef:ElementRef,
    private mapService:MapService
  ) {}

  ngOnInit() {

    /*
    let wmts = new WebTileLayer({
      urlTemplate: "http://geo.ti.ch/wmts/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/21781/{level}/{row}/{col}.jpeg",
      spatialReference: { wkid: 21781 }
    });
    */

    var layer = new TileLayer({
      url: "http://www.sitmap.ti.ch/arcgis/rest/services/basemap/LyrCarteNazionaliColori/MapServer"
    });

    let options = {
      extent: new Extent({
        xmin: 627570.6971412341,
        ymin: 72761.1089337934,
        xmax: 800871.1373243432,
        ymax: 160961.3329623579,
        spatialReference: { wkid: 21781 }
      })
    };

    this.view = new MapView({
      container: this.elRef.nativeElement.firstChild,
      map: this.mapService.map,
      extent: options.extent
    });

    // this.mapService.map.add(wmts);
    this.mapService.map.add(layer);

    this.view.padding.top = 50;
    this.view.then((view) => this.viewCreated.emit(this.view));

  }

}
