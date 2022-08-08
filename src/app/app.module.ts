//Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Forms
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

//Services
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Components
import { NavLinkComponent } from './Components/nav-link/nav-link.component';
//Containers
import { FriendFormComponent } from './Containers/friend-form/friend-form.component';
import { FriendViewComponent } from './Containers/friend-view/friend-view.component';
import { NavBarComponent } from './Containers/nav-bar/nav-bar.component';
//Root
import { AppComponent } from './app.component';
import { FriendCardComponent } from './Components/friend-card/friend-card.component';
import { HeaderComponent } from './Components/header/header.component';

//HTTP
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FriendFormComponent,
    FriendViewComponent,
    NavBarComponent,
    NavLinkComponent,
    FriendCardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
