import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReferenceComponent} from './components/reference/reference.component';
import {BarcodeComponent} from './components/barcode/barcode.component';
import {QRCodeComponent} from './components/qrcode/qrcode.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeComponent,
    QRCodeComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
