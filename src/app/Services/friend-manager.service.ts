import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend, IFriend } from '../Models/Friend';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FriendManagerService {
  //TODO: PUT SERVER _URL IN ENV FILE
  private _url = {
    base: 'http://localhost:3000/',
    addFriend: 'http://localhost:3000/addfriend/',
    getFriends: 'http://localhost:3000/getFriends',
  };
  constructor(private http: HttpClient) {}
  createFriend(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    favoriteLanguage: string
  ) {
    return new Friend(firstName, lastName, email, phone, favoriteLanguage);
  }
  addFriend(friend: Friend) {
    this.http.post(this._url.addFriend, friend.toJson()).subscribe();
  }
  //
  getFriends(): Friend[] {
    let friends: Friend[] = [];
    this.http.get<IFriend[]>(this._url.getFriends).subscribe((data) => {
      data.forEach((friend) => {
        friends.push(
          new Friend(
            friend.firstName,
            friend.lastName,
            friend.email,
            friend.phone,
            friend.favoriteLanguage
          )
        );
      });
    });
    return friends;
  }
}
