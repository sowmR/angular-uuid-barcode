import { Component } from '@angular/core';
@Component({
    selector: 'app-reference',
    templateUrl: './reference.component.html',
    styleUrls: ['./reference.component.css']
})
export class ReferenceComponent {

    referenceLink = [
        {
            url: 'https://github.com/uuidjs/uuid',
            text: 'JS-UUID'
        },
        {
            url: 'https://github.com/lindell/JsBarcode',
            text: 'JS-Barcode'
        },
        {
            url: 'https://github.com/techiediaries/ngx-qrcode',
            text: 'ngx-QRcode'
        }
    ];
}