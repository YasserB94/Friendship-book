import { Component, OnInit } from '@angular/core';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  brand = {
    title:'Friendship Book',
  }
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
    console.log(this.faGithub)
  }

}
