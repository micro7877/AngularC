import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DEFAULT_TIMER } from './data';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  providers: [{ provide: DEFAULT_TIMER, useValue: 1000 }],
  selector: 'app-root',
  template: ` <div class="flex gap-4 mb-5">
      <button class="border rounded-md px-4 py-2" routerLink="video">
        Video
      </button>
      <button class="border rounded-md px-4 py-2" routerLink="phone">
        Phone
      </button>
    </div>
    <router-outlet />`,
  host: {
    class: 'p-10 flex flex-col',
  },
})
export class AppComponent {}
