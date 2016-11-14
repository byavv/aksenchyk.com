import {
    Component,
    Renderer,
    ElementRef,
    AfterViewInit,
    ContentChild,
    trigger,
    state,
    style, sequence,
    transition,
    animate, keyframes
} from '@angular/core';



export const APP_TRIGGERS = [
    trigger('mainContainerState', [
        state('sideclosed', style({ transform: 'translateX(0)', opacity: 1 })),
        state('sideopened', style({ transform: 'translateX(-200px)', opacity: 0.3 })),
        transition('sideclosed => sideopened', [
            animate(200, keyframes([
                style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                style({ opacity: 0.3, transform: 'translateX(-200px)', offset: 1.0 })
            ]))
        ]),
        transition('sideopened => sideclosed', [
            animate(200, keyframes([
                style({ opacity: 0.3, transform: 'translateX(-200px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ]))
        ])
    ]),
    trigger('sideMenuState', [
        state('sideopened', style({ transform: 'translateX(100%) translateX(-200px)' })),
        state('sideclosed', style({ transform: 'translateX(100%)' })),
        transition('sideclosed => sideopened', [
            animate(200, keyframes([
                style({ transform: 'translateX(100%)', offset: 0 }),
                style({ transform: 'translateX(100%)  translateX(-200px)', offset: 1.0 })
            ]))
        ]),
        transition('sideopened => sideclosed', [
            animate(200, keyframes([
                style({ transform: 'translateX(100%)  translateX(-200px)', offset: 0 }),
                style({ transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ]),
    trigger('shadowState', [
        state('sideopened', style({ transform: 'translateX(0%) translateX(-200px)', opacity: 1 })),
        state('sideclosed', style({ transform: 'translateX(-100%)', opacity: 0 })),
        transition('sideopened => sideclosed', [
            animate(200, keyframes([
                style({ transform: 'translateX(-200px)', opacity: 1, offset: 0 }),
                style({ transform: 'translateX(0)', opacity: 0, offset: 1 })
            ]))
        ]),
        transition('sideclosed => sideopened', [
            animate(200, keyframes([
                style({ transform: 'translateX(0)', opacity: 0, offset: 0 }),
                style({ transform: 'translateX(-200px)', opacity: 1, offset: 1 })
            ]))
        ]),
    ]),
    trigger('switchButtonState', [
        state('sideopened', style({ transform: 'translateX(-200px)' })),
        state('sideclosed', style({ transform: 'translateX(0%)' })),
        transition('sideopened => sideclosed', [
            animate(200, keyframes([
                style({ transform: 'translateX(-200px)', offset: 0 }),
                style({ transform: 'translateX(0)', offset: 1 })
            ]))
        ]),
        transition('sideclosed => sideopened', [
            animate(200, keyframes([
                style({ transform: 'translateX(0)', offset: 0 }),
                style({ transform: 'translateX(-200px)', offset: 1 })
            ]))
        ]),
    ]),

    //


    trigger('routerContainerState', [
        //  state('sideopened', style({ transform: 'translateX(0)' })),
        //   state('sideclosed', style({ transform: 'translateX(-100%)' })),
        /* transition('sideclosed => sideopened', [
             animate(1000, keyframes([
                 // style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                 // style({ opacity: 0.8, offset: 0.3 }),
                 // style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
 
 
                 style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                 style({ opacity: 1, transform: 'translateX(-80%)', offset: 0.3 }),
                 style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
             ]))
         ]),
         transition('sideopened => sideclosed', [
             animate(1000, keyframes([
                 // style({ opacity: 0, transform: 'translateX(0)', offset: 0 }),
                 // style({ opacity: 0.8, offset: 0.3 }),
                 // style({ opacity: 1, transform: 'translateX(-100%)', offset: 1.0 })
 
 
                 style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                 style({ opacity: 1, transform: 'translateX(-80%)', offset: 0.8 }),
                 style({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
             ]))
         ])*/
    ]),

    /*   trigger('menuState', [
           state('sideclosed', style({
               opacity: '0'
           })),
           state('sideopened', style({
               opacity: '1'
           }))
       ])*/
]
/*

   transition(":enter", [
            style({ opacity: 0 }),
            animate(2000, style({ opacity: 1 }))
        ]),
        transition(":leave", [
            animate(2000, style({ opacity: 0 }))
        ]),
        transition('sideclosed => sideopened', animate('100ms ease-in')),
        transition('sideopened => sideclosed', animate('100ms ease-out'))

 */