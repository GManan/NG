import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { CardComponent } from './shared/card/card.component';
import { NewTaskComponent } from './components/tasks/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    UserComponent,
    TaskComponent,
    NewTaskComponent,
    TasksComponent,
  ],
  imports: [FormsModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
