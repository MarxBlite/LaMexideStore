import { Component, OnInit } from '@angular/core';
import { DataRepositoryService } from '../services/data-repository.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private dataRepository: DataRepositoryService) { }

  ngOnInit() {
  }

  get productos(): any {
    return this.dataRepository.getProductos();
  }

}
