import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../shared/interfaces/all-products';
import { AllProductsService } from '../../service/all-products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent {

  constructor(private _AllProductsService: AllProductsService) { }
  
  // <!-- // *********------------ pass data to parent-----------******** -->

  @Input() allproductChild: Iproduct[] = [];

  // <!-- // *********------------ add data to nav card count-----------******** -->

  addProd() {
    this._AllProductsService.setcount();
  }

  ngOnDestroy(): void {}
}
