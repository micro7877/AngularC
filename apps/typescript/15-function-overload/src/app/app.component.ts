import { Component } from '@angular/core';
import { createVehicle } from './vehicle.utils';

@Component({
  standalone: true,
  selector: 'app-root',
  template: ``,
})
export class AppComponent {
  car = createVehicle('car', 'diesel');
  moto = createVehicle('moto', 'diesel');
  bus = createVehicle('bus', 20, true);
  // was it intentional to have the boolean argument on the wrong vehicle?
  boat = createVehicle('boat', 300);
  bicycle = createVehicle('bicycle');
}
