import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]); // signals for Angular version >16

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  //Different when using signals
  //SIGNALS ONLY USED HERE
  // get imagePath(){
  //   // console.log( this.selectedUser.avatar);
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    console.log('clicked ');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
