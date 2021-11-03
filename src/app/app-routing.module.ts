import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { FriendsComponent } from './friends/friends.component';
import { GroupViewComponent } from './group-view/group-view.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'add-friend', component: AddFriendComponent },
  { path: 'add-group', component: AddGroupComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'group-view/:groupId', component: GroupViewComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
