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

 

    trigger('routerContainerState', [
      //  state('shown', style({ transform: 'translateX(0)' })),
     //   state('hidden', style({ transform: 'translateX(-100%)' })),
       /* transition('hidden => shown', [
            animate(1000, keyframes([
                // style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                // style({ opacity: 0.8, offset: 0.3 }),
                // style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })


                style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(-80%)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ]))
        ]),
        transition('shown => hidden', [
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
           state('hidden', style({
               opacity: '0'
           })),
           state('shown', style({
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
        transition('hidden => shown', animate('100ms ease-in')),
        transition('shown => hidden', animate('100ms ease-out'))

 */