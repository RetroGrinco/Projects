import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UsersListComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UsersListComponent]

})
export class UsersModule { }
