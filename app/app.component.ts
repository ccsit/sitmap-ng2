import {Component} from '@angular/core';
import {MapComponent} from './map.component';
import {Navbar} from './components/navbar/navbar.component';

@Component({
    selector: 'my-app',
    directives: [MapComponent, Navbar],
    templateUrl: "app/app.component.html"
})
export class AppComponent { }
