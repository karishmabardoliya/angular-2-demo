import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularDemo2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularDemo2AppComponent);
