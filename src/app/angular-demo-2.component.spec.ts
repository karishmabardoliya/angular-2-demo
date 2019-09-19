import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularDemo2AppComponent } from '../app/angular-demo-2.component';

beforeEachProviders(() => [AngularDemo2AppComponent]);

describe('App: AngularDemo2', () => {
  it('should create the app',
      inject([AngularDemo2AppComponent], (app: AngularDemo2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-demo-2 works!\'',
      inject([AngularDemo2AppComponent], (app: AngularDemo2AppComponent) => {
    expect(app.title).toEqual('angular-demo-2 works!');
  }));
});
