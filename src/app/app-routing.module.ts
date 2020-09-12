import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {BarcodeComponent} from './components/barcode/barcode.component';
import { QRCodeComponent } from './components/qrcode/qrcode.component';
import { ReferenceComponent } from './components/reference/reference.component';

const routes: Routes = [
  { path: '', component: BarcodeComponent },
  { path: 'qrcode', component: QRCodeComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: '*', component: BarcodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
