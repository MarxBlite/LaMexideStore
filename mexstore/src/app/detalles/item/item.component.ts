import { Component, OnInit } from '@angular/core';
import { DataRepositoryService } from '../../services/data-repository.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private dataRepository: DataRepositoryService) { }

  
  ngOnInit() {
  }

  get productos(): any {
    return this.dataRepository.getProductos();
  }

}
