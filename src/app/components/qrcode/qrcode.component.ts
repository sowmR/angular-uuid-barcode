import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
    selector: 'app-qrcode',
    templateUrl: './qrcode.component.html',
    styleUrls: ['./qrcode.component.css']
})

export class QRCodeComponent {
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = 'https://www.techiediaries.com/';
    constructor() { }

    loadQRCode() {
        // let canvas = document.getElementById('canvas');
        // QRCode.toCanvas("#canvas", 'sample text', (error) => {
        //     if (error) { console.error(error); }
        //     console.log('success!');
        // });
        const typeNumber = 4;
        const errorCorrectionLevel = 'L';
        // let  qr = QRCode;
        // console.log(qr);
        // QRCode('#qrcode', {
        //     text: 'http://baasha.net',
        //     width: 128,
        //     height: 128,
        //     colorDark: '#000000',
        //     colorLight: '#ffffff'
        // });
    }
}
