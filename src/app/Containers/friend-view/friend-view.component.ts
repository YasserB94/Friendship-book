import { Component, OnInit } from '@angular/core';
import { FriendManagerService } from 'src/app/Services/friend-manager.service';
import { Friend } from 'src/app/Models/Friend';
@Component({
  selector: 'app-friend-view',
  templateUrl: './friend-view.component.html',
  styleUrls: ['./friend-view.component.css'],
})
export class FriendViewComponent implements OnInit {
  private _friends: Friend[];
  constructor(private friendManager: FriendManagerService) {
    this._friends = this.friendManager.getFriends();
  }

  ngOnInit(): void {
    console.log(this.friends);
  }

  public get friends(): Friend[] {
    return this._friends;
  }
}
