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
  animate, keyframes, HostBinding
} from '@angular/core';

import { getDOM, DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/operator/map';
import 'rxjs/operator/filter';
import { APP_TRIGGERS } from './app.triggers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    ...APP_TRIGGERS
  ],

})
export class AppComponent {

  private _doc: HTMLDocument;
  private _domAdapter: DomAdapter;
  sub: Subscription;
  routeContainerState = 'hidden';
  current: string = '';
  constructor(private renderer: Renderer, private _elementRef: ElementRef, private _router: Router, private _activeRoute: ActivatedRoute) { }

  isHidden: boolean = true;
  navigated: boolean = false;


  ngAfterViewInit() {
    this._domAdapter = getDOM();
    this._doc = this._domAdapter.defaultDoc();
    const loader = this._doc.getElementsByTagName('body')[0];
    setTimeout(() => {
      if (loader) this.renderer.setElementClass(loader, 'loaded', true);
    }, 1000);
  }

  onAbout() {
    this._navigateAndChangeStateTo('/about');
  }
  onPortfolio() {
    this._navigateAndChangeStateTo('/portfolio');
  }
  onSkills() {
    this._navigateAndChangeStateTo('/skills');
  }

  private _navigateAndChangeStateTo(url) {
    this.navigated = true;
    setTimeout(() => {
      this._router.navigate([url]);
    }, 200);
  }

  ngOnInit() {
    this.sub = this._router.events
      .filter(event => event instanceof NavigationEnd)
      .map(_ => this._router.routerState)
      .subscribe(state => {
        if (state.snapshot.url !== '/') {
          this.navigated = true;
          this.routeContainerState = 'shown';
        } else {
          this.navigated = false;
          this.routeContainerState = 'hidden';
        }
        this.current = state.snapshot.url;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
