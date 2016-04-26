/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from "./components/app/app.component";
import { ROUTER_PROVIDERS } from "angular2/router";
import { HTTP_PROVIDERS } from "angular2/http";
import { CookieService } from 'angular2-cookie/core';
import { AuthHelper } from './components/authentication/auth.helper';
import { HeaderService } from './components/header/header.service';
import { CartService } from './components/cart/cart.service';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, CookieService, AuthHelper, HeaderService, CartService ]);
