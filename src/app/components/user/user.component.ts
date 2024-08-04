import { DUMMY_USERS } from './../../dummy-users';
import {
  Component,
  computed,
  Input,
  Output,
  input,
  EventEmitter,
  output,
} from '@angular/core';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User = { id: string; avatar: string; name: string };
interface User {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  //SIGNALS for ANGULAR version 18
  // avatar = input<string>('');
  // name = input<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  get imagePath() {
    return '../../../assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
