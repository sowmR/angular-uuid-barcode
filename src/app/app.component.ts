import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
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
  }
}

