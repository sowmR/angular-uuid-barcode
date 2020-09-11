import { Component, OnInit } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';
import * as JsBarcode from 'jsbarcode';

@Component({
    selector: 'app-barcode',
    templateUrl: './barcode.component.html',
    styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {
    newUUID = '';
    constructor() {}

    generateNewUUID() {
        this.newUUID = uuidv4();
        JsBarcode.default('#barcode', this.newUUID, {
            lineColor: '#08415C',
            background: 'transparent',
            height: 40,
            displayValue: true
        });
        JsBarcode.default('#ean-13', '1234567890128', { format: 'ean13', height: 40, background: 'transparent' });
        JsBarcode.default('#ean-8', '12345670', { format: 'ean8', height: 40, background: 'transparent' });
        JsBarcode.default('#ean-5', '12345', { format: 'ean5', height: 40, background: 'transparent' });
        JsBarcode.default('#ean-2', '12', { format: 'ean2', height: 40, background: 'transparent' });
        JsBarcode.default('#upc-a', '123456789012', { format: 'upc', height: 40, background: 'transparent' });
        JsBarcode.default('#code39', 'Hello', { format: 'code39', height: 40, background: 'transparent' });
        JsBarcode.default('#itf-14', '1234567890123', { format: 'itf14', height: 40, background: 'transparent' });
        JsBarcode.default('#msi', '123456', { format: 'msi', height: 40, background: 'transparent' });
        JsBarcode.default('#pharmacode', '12345', { format: 'pharmacode', height: 40, background: 'transparent' });
    }
    ngOnInit() {
        // this.generateNewUUID();
    }
}
