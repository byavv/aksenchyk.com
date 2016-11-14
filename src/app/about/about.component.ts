import { Component, trigger, transition, animate, style, state, OnInit, HostBinding } from '@angular/core';

var startingStyles = (styles) => {
    styles['position'] = 'absolute';
    styles['top'] = 0;
    styles['left'] = 0;
    styles['right'] = 0;
    styles['height'] = '100%';
    return styles;
}

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [
        trigger('route', [
            transition('void => *', [
                style({
                    transform: 'translateX(-100%)'
                }),
                animate('1s ease-out', style({ transform: 'translateX(0%)' }))
            ]),
            transition('* => void', [
                style({
                    transform: 'translateX(0%)'
                }),
                animate('1s ease-in', style({ transform: 'translateX(100%)' }))
            ])
        ]),
    ],
    host: {
        '[@route]': 'true',
        '[style.display]': "'block'",
        '[style.position]': "'fixed'",
        '[style.left]': "'0'",
        '[style.right]': "'0'",
        '[style.height]': "'100%'",
        '[style.z-index]': "'100300'"
    }
})
export class AboutComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}