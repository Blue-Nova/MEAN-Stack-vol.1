import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  data: any = [];

  constructor(private http: HttpClient) {
    this.fetchMessage();
  }

  async fetchMessage() {
    this.http.get(`http://localhost:3000/api/message/all`).subscribe((response: any) => {
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
