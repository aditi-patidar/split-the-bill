import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { ExpenseComponent } from './expense/expense.component';
import { FriendsComponent } from './friends/friends.component';
import { GroupViewComponent } from './group-view/group-view.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuardService] },
  { path: 'groups', component: GroupsComponent, canActivate: [AuthGuardService] },
  { path: 'expenses', component: ExpenseComponent, canActivate: [AuthGuardService] },
  { path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuardService] },
  { path: 'add-friend', component: AddFriendComponent, canActivate: [AuthGuardService] },
  { path: 'add-group', component: AddGroupComponent, canActivate: [AuthGuardService] },
  { path: 'add-expense', component: AddExpenseComponent, canActivate: [AuthGuardService] },
  { path: 'group-view/:groupId', component: GroupViewComponent, canActivate: [AuthGuardService] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
