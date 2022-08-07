import { NgModule, Component, OnInit } from '@angular/core';
//Import Nav Link Component
import { NavLinkComponent } from 'src/app/Components/nav-link/nav-link.component';
//Import Data
import { NavLink } from 'src/app/Core/nav-data';
import { NAV_LINK_DATA } from 'src/app/Core/nav-data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  navData: Array<NavLink> = NAV_LINK_DATA;

  constructor() {}

  ngOnInit(): void {}
}
