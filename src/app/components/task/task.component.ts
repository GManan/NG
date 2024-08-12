import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks/tasks.service';
@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  private taskService = inject(TasksService);
  
  onComplete() {
   this.taskService.removeTask(this.task.id);
  }
}
