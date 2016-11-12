import {
  Component,
  Renderer,
  ElementRef,
  AfterViewInit,
  ContentChild,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { getDOM, DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/operator/map';
import 'rxjs/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('menuState', [
      state('hidden', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('shown', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition(":enter", [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate(2000, style({ opacity: 0 }))
      ]),
      transition('hidden => shown', animate('100ms ease-in')),
      transition('shown => hidden', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  private _doc: HTMLDocument;
  private _domAdapter: DomAdapter;
  url: Observable<any>;
  constructor(private renderer: Renderer, private _elementRef: ElementRef, private _router: Router, private _activeRoute: ActivatedRoute) {
  }
  isHidden: boolean = true;

  state: string = 'inactive';
  ngAfterViewInit() {
    this._domAdapter = getDOM();
    this._doc = this._domAdapter.defaultDoc();

    const loader = this._doc.getElementsByTagName('body')[0];
    setTimeout(() => {
      if (loader) this.renderer.setElementClass(loader, 'loaded', true);
    }, 1000);

    this.url = this._router.events.filter(event => event instanceof NavigationEnd);
    this.url.subscribe((value) => {
      console.log(value);
    })
  }
  onAbout() {
    this._changeStateToNavigated();
    this._router.navigate(['/about']);

  }
  onPortfolio() {
    this._changeStateToNavigated();
    this._router.navigate(['/portfolio']);
  }

  onSkills() {
    this._changeStateToNavigated();
    this._router.navigate(['/skills']);
  }
  private _changeStateToNavigated() {
    if (this.state == 'hidden') {
      this.state = 'shown'
    } else {
      this.state = 'hidden'
    }
  }

  /*
  
  
    ngOnInit() {
      this.sub = this.router.events
        .filter(event => event instanceof NavigationEnd)
        .map(_ => this.router.routerState)
        .map(state => state.firstChild(this.activated))
        .filter(route => route.outlet === PRIMARY_OUTLET)
        .flatMap(route => route.data)
        .subscribe(data => {
          this.titleService.setTitle(data['title'] || "My default title");
        });
    }
    
    ngOnDestroy() {
      this.sub.unsubscribe();
    }*/
}
