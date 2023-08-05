import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
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
