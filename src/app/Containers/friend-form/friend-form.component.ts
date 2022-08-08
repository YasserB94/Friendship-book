import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendManagerService } from 'src/app/Services/friend-manager.service';
import { PROGRAMMING_LANGUAGES } from 'src/app/Core/coding-list';
import { Friend } from 'src/app/Models/Friend';
@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css'],
})
export class FriendFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private friendManager: FriendManagerService
  ) {}
  newFriendForm!: FormGroup;
  programmingLang: string[] = PROGRAMMING_LANGUAGES;
  formValid: boolean = false;
  submitButtonMsg: string = '';
  ngOnInit(): void {
    this.submitButtonMsg = 'Please fill out the form';
    this.newFriendForm = this.formBuilder.group({
      firstName: [
        'testName',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      lastName: [
        'testName',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      email: [
        'test@test.com',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: [
        '0499999999',
        [
          Validators.required,
          Validators.maxLength(13),
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
        ],
      ],
      programmingLanguage: ['html', [Validators.required]],
    });
  }
  onSubmit() {
    const newFriend: Friend = this.friendManager.createFriend(
      this.newFriendForm.value.firstName,
      this.newFriendForm.value.lastName,
      this.newFriendForm.value.email,
      this.newFriendForm.value.phone,
      this.newFriendForm.value.programmingLanguage
    );
    this.friendManager.addFriend(newFriend);
    this.router.navigate(['']);
  }
  //Form Getters

  public get firstName() {
    return this.newFriendForm.get('firstName');
  }
  public get lastName() {
    return this.newFriendForm.get('lastName');
  }
  public get email() {
    return this.newFriendForm.get('email');
  }
  public get phone() {
    return this.newFriendForm.get('phone');
  }
  public get programmingLanguage() {
    return this.newFriendForm.get('programmingLanguage');
  }
}
