import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [HomeComponent, AppComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
