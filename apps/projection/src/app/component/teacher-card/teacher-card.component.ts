import { Component, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardType } from '../../model/card.model';
import { Teacher } from '../../model/teacher.model';
import { CardComponent } from '../../ui/card/card.component';
import { randTeacher } from '../../data-access/fake-http.service';
@Component({
  selector: 'app-teacher-card',
  template: ` <ng-template #teacher>
      <img src="assets/img/teacher.png" width="200px" />
    </ng-template>
    <app-card
      [templateView]="teacher"
      [list]="teachers"
      [type]="cardType"
      (deleteEvent)="deleteItem($event)"
      (addEvent)="addItem()"
      customClass="bg-light-red"></app-card>`,
  styles: [
    `
      ::ng-deep .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  standalone: true,
  imports: [CardComponent],
})
export class TeacherCardComponent implements OnInit {
  teachers: Teacher[] = [];
  cardType = CardType.TEACHER;

  constructor(private http: FakeHttpService, private store: TeacherStore) {}

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));

    this.store.teachers$.subscribe((t) => (this.teachers = t));
  }
  deleteItem(id: number) {
    this.store.deleteOne(id);
  }
  addItem() {
    this.store.addOne(randTeacher());
  }
}
