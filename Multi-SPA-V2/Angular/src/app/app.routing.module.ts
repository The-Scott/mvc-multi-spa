import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KitcheSink} from './modules/kitchensink/kitchensink.component';
import {AngularHome} from './modules/home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: AngularHome
    },{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'kitchensink',
        component:KitcheSink
    }, {
        path: '**',
        component: AngularHome
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

