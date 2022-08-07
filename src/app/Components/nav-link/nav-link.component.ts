import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from 'src/app/Core/nav-data';
@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css'],
})
export class NavLinkComponent implements OnInit {
  @Input() navLink!: NavLink;
  constructor() {}

  ngOnInit(): void {}
}
