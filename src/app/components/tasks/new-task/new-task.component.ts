import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { type NewTaskData } from '../../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  @Input({required:true})userId!:string;
  // SIGNALS
  enteredTitle = signal('');
  enteredSummery = signal('');
  enteredDate = signal('');
  private tasksService =inject(TasksService)

  onClose() {
    this.close.emit();
  }
  onSubmit(taskData: NewTaskData) {
    this.tasksService.addTask({
      date: this.enteredDate(),
      summary: this.enteredSummery(),
      title: this.enteredTitle(),
    },this.userId);
    this.close.emit();
  }
}
