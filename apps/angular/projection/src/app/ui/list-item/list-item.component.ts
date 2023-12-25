import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StudentStore } from '../../data-access/student.store';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardType } from '../../model/card.model';

@Component({
  selector: 'app-list-item',
  template: `
    <!-- <div class="border border-grey-300 py-1 px-2 flex justify-between">
      {{ name }}
      <button (click)="delete(id)">
        <img class="h-5" src="assets/svg/trash.svg" />
      </button>
    </div> -->
    <ng-template #templateTest>
      {{ name }}
      <button (click)="delete(id)">
        <img class="h-5" src="assets/svg/trash.svg" />
      </button>
    </ng-template>

    <div class="border-grey-300 flex justify-between border px-2 py-1">
      <ng-container *ngTemplateOutlet="templateTest"></ng-container>
    </div>
  `,
  standalone: true,
  imports: [NgTemplateOutlet],
})
export class ListItemComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() type!: CardType;

  constructor(
    private teacherStore: TeacherStore,
    private studentStore: StudentStore,
  ) {}

  delete(id: number) {
    if (this.type === CardType.TEACHER) {
      this.teacherStore.deleteOne(id);
    } else if (this.type === CardType.STUDENT) {
      this.studentStore.deleteOne(id);
    }
  }
}
