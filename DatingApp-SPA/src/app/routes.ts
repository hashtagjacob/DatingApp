import { AuthGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { MessegesComponent } from './messeges/messeges.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'messeges', component: MessegesComponent},
      {path: 'lists', component: ListsComponent}
    ]

  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
