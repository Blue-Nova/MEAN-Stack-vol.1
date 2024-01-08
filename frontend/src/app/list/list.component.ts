import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  data: any = [];
  selectedUser: any = [];

  constructor(private http: HttpClient) {
    this.fetchMessage();
  }

  async fetchMessage() {
    this.http.get('http://localhost:3000/api/get/all').subscribe((response: any) => {
      this.data = response;
    });
  }

  selected(id: any){
    this.http.get(`http://localhost:3000/api/get/id/${id}`).subscribe((response: any) => {
      this.selectedUser = response;
    });

  }

}
