import { Component, Renderer, ElementRef, AfterViewInit, ContentChild } from '@angular/core';
import { getDOM, DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ContentChild('')
  private _doc: HTMLDocument;
  private _domAdapter: DomAdapter;
  constructor(private renderer: Renderer, private _elementRef: ElementRef) { }
  isHidden: boolean = true;

  /* ngAfterViewInit() {
     this._domAdapter = getDOM();
     this._doc = this._domAdapter.defaultDoc();
    
       const loader = this._doc.getElementById('loader-wrapper');
       this.renderer.setElementStyle(loader, 'background','transparent')
    
   }*/
  ngAfterViewInit() {
    this._domAdapter = getDOM();
    this._doc = this._domAdapter.defaultDoc();
    const loader = this._doc.getElementsByTagName('body')[0];
    setTimeout(() => {
      if (loader) this.renderer.setElementClass(loader, 'loaded', true);
    }, 1000);
  }
}
//fsd