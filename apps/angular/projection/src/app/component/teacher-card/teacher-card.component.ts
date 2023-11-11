import { Component } from '@angular/core';
import { FakeHttpService, randTeacher } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { Teacher } from '../../model/teacher.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-teacher-card',
  template: `<app-card [list]="teachers$ | async" class="bg-light-red" (addItem)="add()">
    <img src="assets/img/teacher.png" width="200px" />
    <ng-template #rowRef let-teacher>
      <app-list-item [name]="teacher.firstname" [id]="teacher.id" (deleteItem)="delete($event)"> </app-list-item>
    </ng-template>
  </app-card>`,
  styles: [
    `
      .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  standalone: true,
  imports: [CardComponent, ListItemComponent, AsyncPipe],
})
export class TeacherCardComponent {
  readonly teachers$: Observable<Teacher[]> = this.store.teachers$;

  constructor(private http: FakeHttpService, private store: TeacherStore) {
    this.http.fetchTeachers$.pipe(takeUntilDestroyed()).subscribe((t) => this.store.addAll(t));
  }

  add() {
    this.store.addOne(randTeacher());
  }

  delete(id: number) {
    this.store.deleteOne(id);
  }
}
