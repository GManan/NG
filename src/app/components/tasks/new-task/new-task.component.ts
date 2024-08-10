import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { type NewTaskData } from '../../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  // SIGNALS
  enteredTitle = signal('');
  enteredSummery = signal('');
  enteredDate = signal('');

  onCancelClick() {
    this.cancel.emit();
  }
  onSubmit(taskData: NewTaskData) {
    this.add.emit({
      date: this.enteredDate(),
      summary: this.enteredSummery(),
      title: this.enteredTitle(),
    });
  }
}
