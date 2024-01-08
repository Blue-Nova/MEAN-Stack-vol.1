import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [HomeComponent, AppComponent, ListComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
