/*
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';

console.log("Bootstrapping SITMap-ng2");
bootstrap(AppComponent, [HTTP_PROVIDERS]);
*/

import {bootstrap} from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppComponent} from './app.component'

bootstrap(AppComponent, [
  HTTP_PROVIDERS
]);
