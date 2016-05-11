import {Component}    from '@angular/core';
import {Navbar}       from './components/navbar/navbar.component';
import {MapComponent} from './components/map/map.component';

@Component({
    selector: 'my-app',
    directives: [Navbar, MapComponent],
    templateUrl: "app/app.component.html"
})
export class AppComponent { }
