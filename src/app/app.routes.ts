import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-component/home-component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about-component/about-component').then(m => m.AboutComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/project-component/project-component').then(m => m.ProjectComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact-component/contact-component').then(m => m.ContactComponent)
    }
];
