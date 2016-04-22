/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from "./components/app/app.component";
import { ROUTER_PROVIDERS } from "angular2/router";
import { HTTP_PROVIDERS } from "angular2/http";
import { AuthHelper } from './components/authentication/auth.helper';
import { HeaderService } from './components/header/header.service';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, AuthHelper, HeaderService ]);
