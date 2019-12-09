import { Injectable } from '@angular/core';
import { Producto } from '../producto';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataRepositoryService {
  private prod: Producto[] = [];
  constructor(private dataService: DataServiceService) {
    this.dataService.getProducto()
    .subscribe((response) => {
      console.log(response);
      this.prod = response.productos;
    });
   }

   getProductos(): Producto[] {
    return this.prod;
  }
}
