import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListComponent } from './list.component';
import { Cities, ListDirective, Students } from './list.directive';
import { PersonComponent } from './person.component';
import { Person, PersonDirective } from './person.directive';

// Useful Resources

// https://www.youtube.com/watch?v=dau7kQMdH4A
// https://github.com/joshuamorony/ng-template-outlet-example

// type guard can be used as a pipe
// https://medium.com/@bitbangx/type-guards-in-angular-templates-9a3c966e2145

// https://angular.dev/guide/directives/structural-directives#improving-template-type-checking-for-custom-directives

@Component({
  standalone: true,
  imports: [
    NgTemplateOutlet,
    PersonComponent,
    ListComponent,
    PersonDirective,
    ListDirective,
  ],
  selector: 'app-root',
  template: `
    <person [person]="person">
      <ng-template personRef let-name let-age="age">
        {{ name }}: {{ age }}
      </ng-template>
    </person>

    <list [list]="students">
      <ng-template listRef let-student let-i="index">
        {{ student.name }}: {{ student.age }} - {{ i }}
      </ng-template>
    </list>

    <list [list]="cities">
      <ng-template listRef let-city let-i="index">
        {{ city.name }}: {{ city.country }} - {{ i }}
      </ng-template>
    </list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // when you first run the app, person -> returns `no template` in the html
  // after adding the directive -> `toto: 3` is in the html.

  // is cities supposed to be in the html ?
  // If you implement a guard -> you can prevent either cities or students from being in the html

  person: Person = {
    name: 'toto',
    age: 3,
  };

  students: Students[] = [
    { name: 'toto', age: 3 },
    { name: 'titi', age: 4 },
  ];

  cities: Cities[] = [
    { name: 'Paris', country: 'France' },
    { name: 'Berlin', country: 'Germany' },
  ];
}
