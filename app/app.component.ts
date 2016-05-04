import {Component} from '@angular/core';
import {MapComponent} from './map.component';

@Component({
    selector: 'my-app',
    directives: [MapComponent],
    template: '<div><map></map></div>'
})
export class AppComponent { }
