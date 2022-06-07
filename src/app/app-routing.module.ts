import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { MachanicsComponent } from './machanics/machanics.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReportsComponent } from './reports/reports.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [

  {path: '', component : LoginComponent },
  {path: 'register', component : RegisterComponent },
  {path: 'home', component : HomeComponent },
  {path: 'login', component : LoginComponent },
  {path: 'machanics', component : MachanicsComponent },
  {path: 'edit-user', component : EditUserComponent },
  {path: 'view-all-users', component :  ViewUsersComponent},
  {path: 'new-user', component :  NewUserComponent},
  {path: 'manage-request', component :  ManageRequestComponent},
  {path: 'all-users', component :  ViewUsersComponent},
  {path: 'edit-profile', component :  UserProfileComponent},
  {path: 'reports', component :  ReportsComponent},
  {path: 'notifications', component :  NotificationsComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
