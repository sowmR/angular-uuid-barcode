import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReferenceComponent} from './components/reference/reference.component';
import {BarcodeComponent} from './components/barcode/barcode.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
