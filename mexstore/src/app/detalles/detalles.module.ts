import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesRoutingModule } from './detalles-routing.module';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    DetallesRoutingModule
  ]
})
export class DetallesModule { }
