/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";

describe('App: Ng2bootstrap4', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        AboutComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([{
          path: 'home',
          component: HomeComponent
        },
          {
            path: 'about',
            component: AboutComponent
          }
        ])
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
