import {Component} from '@angular/core';
import {BasemapSwitcher} from '../basemap-switcher/basemap-switcher.component';

@Component({
  selector: 'navbar',
  directives: [BasemapSwitcher],
  templateUrl: 'app/components/navbar/navbar.component.html'
})
export class Navbar {

}
