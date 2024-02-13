import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
})
export class AppRoutingModule { }
