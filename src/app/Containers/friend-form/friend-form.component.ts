import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css'],
})
export class FriendFormComponent implements OnInit {
  constructor(private formBuiler: FormBuilder) {}
  newFriendForm = this.formBuiler.group({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programmingLanguage: '',
  });

  ngOnInit(): void {}
  onSubmit() {
    console.warn('FriendFormComponent: Submitted');
    console.log(this.newFriendForm.value.firstName);
    this.newFriendForm.reset();
  }
}
