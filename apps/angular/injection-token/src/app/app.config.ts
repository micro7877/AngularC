import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'video' },
      {
        path: 'video',
        loadComponent: () => import('./components/video.component'),
      },
      {
        path: 'phone',
        loadComponent: () => import('./components/phone.component'),
      },
    ]),
  ],
};
