import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, NoPreloading } from '@angular/router';
import { NotFound404Component } from './404';
import { HomeComponent } from './home';

@NgModule({
    declarations: [
        NotFound404Component,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot([
         //   { path: '', loadChildren: './home/index#HomeModule' },
            { path: '', component: HomeComponent },
            { path: 'about', loadChildren: './about/index#AboutModule', pathMatch: 'full' },
            { path: 'skills', loadChildren: './skills/index#SkillsModule', pathMatch: 'full' },
            { path: 'portfolio', loadChildren: './portfolio/index#PortfolioModule', pathMatch: 'full' },
            { path: '**', component: NotFound404Component }
        ],
            { preloadingStrategy: NoPreloading }
        )
    ],//
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
