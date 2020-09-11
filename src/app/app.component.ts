import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'uuidApp';
  newUUID = '';
  referenceLink = [
    {
      url: 'https://github.com/uuidjs/uuid',
      text: 'JS-UUID'
    },
    {
      url: 'https://github.com/lindell/JsBarcode',
      text: 'JS-Barcode'
    }
  ];
  constructor() {
  }
  ngOnInit() {

    this.generateNewUUID();
  }

  generateNewUUID() {
    this.newUUID = uuidv4();
    JsBarcode.default('#barcode', this.newUUID, {
      lineColor: '#08415C',
      background: 'transparent',
      height: 40,
      displayValue: true
    });
    JsBarcode.default('#ean-13', '1234567890128', { format: 'ean13', height: 40 });
    JsBarcode.default('#ean-8', '12345670', { format: 'ean8', height: 40 });
    JsBarcode.default('#ean-5', '12345', { format: 'ean5', height: 40 });
    JsBarcode.default('#ean-2', '12', { format: 'ean2', height: 40 });
    JsBarcode.default('#upc-a', '123456789012', { format: 'upc', height: 40 });
    JsBarcode.default('#code39', 'Hello', { format: 'code39', height: 40 });
    JsBarcode.default('#itf-14', '1234567890123', { format: 'itf14', height: 40 });
    JsBarcode.default('#msi', '123456', { format: 'msi', height: 40 });
    JsBarcode.default('#pharmacode', '12345', { format: 'pharmacode', height: 40 });
  }
}

