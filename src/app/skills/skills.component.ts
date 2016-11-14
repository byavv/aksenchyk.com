import { Component, trigger, transition, animate, style, state, OnInit, HostBinding } from '@angular/core';


@Component({
    selector: 'skills',
    templateUrl: 'skills.component.html',
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
    },
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}