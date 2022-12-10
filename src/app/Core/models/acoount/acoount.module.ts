import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoountRoutingModule } from './acoount-routing.module';
import { AcoountComponent } from './acoount.component';


@NgModule({
  declarations: [
    AcoountComponent
  ],
  imports: [
    CommonModule,
    AcoountRoutingModule
  ]
})
export class AcoountModule { }
