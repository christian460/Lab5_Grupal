import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ApiService]
})
export class ListComponent {
  productos: any[] = [];

  constructor(private api: ApiService) {
    this.getProductos();
  }

  getProductos = () => {
    this.api.getAllProductos().subscribe (
      data => {
        console.log(data);
        this.productos = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
