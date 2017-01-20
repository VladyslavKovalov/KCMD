import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';





const appRoutes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'About', component: AboutComponent },
    { path: 'Home', component: HomeComponent}
           


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
