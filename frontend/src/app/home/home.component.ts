import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any = [];
  index: number = 0;

  constructor(private http: HttpClient) {
    this.fetchMessage();
  }

  async fetchMessage() {
    this.http.get(`http://localhost:3000/api/get/index/${this.index}`).subscribe((response: any) => {
      this.data = response;
    });
  }
  onInputChange(newValue: any) {
    this.fetchMessage();
  }
  onButtonClick(){
    this.fetchMessage();
  }
}
