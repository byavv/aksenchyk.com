import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { HomeModule } from './home';
import { AboutModule } from './about';
import { PortfolioModule } from './portfolio';
import { SkillsModule } from './skills';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,///
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
