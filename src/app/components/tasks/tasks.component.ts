import { Component, Inject, Input, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from '../task/task.model';
import {TasksService} from "./tasks.service"
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  
  constructor(private tasksService:TasksService){}

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  
  onStartAddTask() {
    this.isAddingTask=true;
  }
  onCancelAddTask(){
    this.isAddingTask=false;
    
  }
  onAddTask(task:NewTaskData) {
    this.isAddingTask=false;
    this.tasksService.addTask(task,this.userId);


    }
}
