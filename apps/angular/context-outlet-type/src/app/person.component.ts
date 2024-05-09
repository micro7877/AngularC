import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  contentChild,
  Directive,
  input,
  TemplateRef,
} from '@angular/core';

interface Person {
  name: string;
  age: number;
}

interface Context {
  $implicit: string;
  age: number;
}

@Directive({
  standalone: true,
  selector: 'ng-template[person]',
})
export class PersonDirective {
  static ngTemplateContextGuard(
    dir: PersonDirective,
    ctx: unknown,
  ): ctx is Context {
    return true;
  }
}

@Component({
  standalone: true,
  imports: [NgTemplateOutlet],
  selector: 'person',
  template: `
    <ng-container
      *ngTemplateOutlet="
        personTemplateRef() || emptyRef;
        context: { $implicit: person().name, age: person().age }
      " />

    <ng-template #emptyRef>No Template</ng-template>
  `,
})
export class PersonComponent {
  person = input.required<Person>();

  readonly personTemplateRef = contentChild.required(PersonDirective, {
    read: TemplateRef,
  });
}
