import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RequestComponent } from './request/request.component';
import { ParametersComponent } from './parameters/parameters.component';
import { OutputparametersComponent } from './outputparameters/outputparameters.component';
import { TestComponent } from './test/test.component';
import {RouterModule, Routes} from "@angular/router";
import { FormComponent } from './form/form.component';
import {RestangularModule} from "ng2-restangular";

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('/');
}

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'form', component: FormComponent },
  { path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  },
];



@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    ParametersComponent,
    OutputparametersComponent,
    TestComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    RestangularModule.forRoot(RestangularConfigFactory),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
