import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';

console.log("Bootstrapping SITMap-ng2");
bootstrap(AppComponent, [HTTP_PROVIDERS]);
