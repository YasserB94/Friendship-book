import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/app/Models/Friend';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css'],
})
export class FriendCardComponent implements OnInit {
  @Input() friend!: Friend;
  constructor() {}

  ngOnInit(): void {}
}
