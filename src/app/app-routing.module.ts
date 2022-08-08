import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FriendFormComponent } from './Containers/friend-form/friend-form.component';
import { FriendViewComponent } from './Containers/friend-view/friend-view.component';
import { NAV_LINK_DATA } from './Core/nav-data';
//TODO:: TURN NAV_LINK_DATA INTO ASSOCIATIVE ARRAY
const routes: Routes = [
  { path: NAV_LINK_DATA[2].path, component: FriendFormComponent },
  { path: NAV_LINK_DATA[0].path, component: FriendFormComponent },
  { path: NAV_LINK_DATA[1].path, component: FriendViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
